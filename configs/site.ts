import type { FooterItem } from "@/types"


export type SiteConfig = typeof siteConfig

const links = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
}

export const siteConfig = {
  name: "TunedSphere",
  description: "A dedicated Psychedelic Art Platform, focusing on Music",
  url: "http://localhost:3000/",
  ogImage: "",
  links: {
    facebook: "https://facebook.com/tunedsphere",
    instagram: "https://instagram.com/tunedsphere",
    twitter: "https://twitter.com/tunedsphere",
  },
  footerNav: [
    {
      title: "About Me", // Default href for "About Us" title
      items: [
        {
          title: "About",
          href: "/about-me",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Facebook",
          href: links.facebook,
          external: true,
        },
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}
