import { Icon } from "@/components/icon"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icon
  label?: string
  description?: string
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
    disabled?: boolean
  }[]
}

export type MainNavItem = NavItem

