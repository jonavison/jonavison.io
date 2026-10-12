import { fbmSimplex2d } from "@vgpu/wgsl-std/noise/simplex";

struct Params {
  time: f32,
  intensity: f32,
  pointer: vec2f,
  resolution: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn softGlow(uv: vec2f, center: vec2f, radius: f32) -> f32 {
  let aspect = params.resolution.x / max(params.resolution.y, 1.0);
  let d = length((uv - center) * vec2f(aspect, 1.0));
  return exp(-d * d / max(radius * radius, 0.0001));
}

// Soft prismatic ribbon — Pink Floyd spectrum without hard geometry.
fn spectrum(t: f32) -> vec3f {
  let x = fract(t);
  let rose = vec3f(0.92, 0.42, 0.62);
  let magenta = vec3f(0.72, 0.28, 0.78);
  let indigo = vec3f(0.28, 0.24, 0.72);
  let azure = vec3f(0.28, 0.58, 0.92);
  let cyan = vec3f(0.35, 0.82, 0.88);
  let amber = vec3f(0.95, 0.62, 0.38);

  var c = mix(rose, magenta, smoothstep(0.0, 0.18, x));
  c = mix(c, indigo, smoothstep(0.14, 0.36, x));
  c = mix(c, azure, smoothstep(0.32, 0.52, x));
  c = mix(c, cyan, smoothstep(0.48, 0.68, x));
  c = mix(c, amber, smoothstep(0.64, 0.86, x));
  c = mix(c, rose, smoothstep(0.82, 1.0, x));
  return c;
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.resolution.x / max(params.resolution.y, 1.0);
  let p = vec2f(uv.x * aspect, uv.y);
  let t = params.time;

  // Slow glassy fluid field
  let n1 = fbmSimplex2d(p * 1.05 + vec2f(t * 0.028, t * 0.018), 5, 2.02, 0.52);
  let n2 = fbmSimplex2d(p * 1.85 - vec2f(t * 0.022, t * 0.031), 4, 2.08, 0.5);
  let n3 = fbmSimplex2d(p * 0.55 + vec2f(n1 * 0.35, n2 * 0.3) + t * 0.012, 3, 2.0, 0.55);
  let field = n1 * 0.45 + n2 * 0.35 + n3 * 0.2;

  let pointerUv = params.pointer;
  // Peak spotlight on the left (~25%); keep strength through mid-left, fade hard on the right
  // so the scrolling content column stays readable.
  let sideFade = smoothstep(0.32, 0.92, pointerUv.x);
  let sideGain = mix(1.0, 0.26, sideFade);
  let sweetSpot = exp(-((pointerUv.x - 0.25) * (pointerUv.x - 0.25)) / 0.045);
  let spotGain = sideGain * (0.94 + 0.12 * sweetSpot);

  // Soft glass refraction offsets (chromatic, not geometric)
  let refract = vec2f(field * 0.055, -field * 0.04);
  let glassWarp = vec2f(n2 * 0.03, n1 * 0.025);

  let core = softGlow(uv, pointerUv + glassWarp * 0.35, 0.42) * spotGain;
  let bloomR = softGlow(uv, pointerUv + refract + vec2f(0.018, -0.01), 0.62) * spotGain;
  let bloomG = softGlow(uv, pointerUv + refract * 0.7, 0.68) * spotGain;
  let bloomB = softGlow(uv, pointerUv - refract + vec2f(-0.014, 0.012), 0.72) * spotGain;
  let frost = softGlow(uv, pointerUv * 0.65 + vec2f(0.18, 0.22) + glassWarp, 1.05) * mix(1.0, spotGain, 0.65);
  let haze = softGlow(uv, vec2f(0.35 + n3 * 0.08, 0.55 + n1 * 0.06), 1.25) * mix(1.0, spotGain, 0.4);

  // Iridescent ribbon drifting through the field
  let ribbonT = uv.x * 0.55 + uv.y * 0.35 + field * 0.45 + t * 0.04;
  let ribbonMask = smoothstep(0.15, 0.55, 0.5 + field * 0.5) * (0.16 + frost * 0.24);

  let prism = spectrum(ribbonT) * ribbonMask;

  // Apple-dark glass base
  let bg = vec3f(0.04, 0.045, 0.07);
  let glassTint = vec3f(0.12, 0.1, 0.16);

  // Chromatic soft light (iOS glass sheen)
  let lightR = bloomR * 0.55 + core * 0.35;
  let lightG = bloomG * 0.5 + core * 0.28;
  let lightB = bloomB * 0.48 + core * 0.25;
  let chroma = vec3f(lightR, lightG, lightB);

  let roseGlow = vec3f(0.88, 0.45, 0.68) * (core * 0.42 + bloomR * 0.18);
  let indigoGlow = vec3f(0.32, 0.28, 0.78) * (bloomB * 0.3 + frost * 0.24);
  let cyanGlow = vec3f(0.4, 0.78, 0.9) * (bloomG * 0.2 + haze * 0.14);
  let amberKiss = vec3f(0.95, 0.58, 0.35) * (bloomR * bloomG * 0.3 + core * 0.06);

  var color = mix(bg, glassTint, 0.28 + frost * 0.16);
  color = color + roseGlow * 0.42;
  color = color + indigoGlow * 0.38;
  color = color + cyanGlow * 0.3;
  color = color + amberKiss * 0.24;
  color = color + prism * 0.38 * mix(1.0, spotGain, 0.55);
  // Soft specular glass highlight near pointer (also quieter on the right)
  color = color + vec3f(0.95, 0.92, 1.0) * (core * core * 0.045);
  // Gentle chromatic lift
  color = color + chroma * vec3f(0.08, 0.06, 0.1);

  // Frost grain (very light)
  let grain = fbmSimplex2d(uv * 380.0 + vec2f(t * 0.08, 0.0), 1, 2.0, 0.5) * 0.008;
  color = color + vec3f(grain);

  // Keep text readable — pull back toward base
  let depth = clamp(0.45 + frost * 0.15 + core * 0.12, 0.0, 0.85);
  color = mix(bg, color, clamp(params.intensity, 0.0, 1.0) * depth);

  return vec4f(color, 1.0);
}
