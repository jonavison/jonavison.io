/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['vgpu', '@vgpu/core', '@vgpu/wgsl', '@vgpu/wgsl-std'],
  webpack(config) {
    config.module.rules.push({
      test: /\.wgsl$/,
      loader: '@vgpu/wgsl/loader-webpack',
    })
    return config
  },
}

module.exports = nextConfig
