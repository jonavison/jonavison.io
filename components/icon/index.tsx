import React, { FC, SVGProps } from 'react'
import { RefAttributes } from 'react'

import { MoonIcon } from './Moon'
import { SunIcon } from './Sun'
import { ChevronUpIcon } from './ChevronUp'
import { ChevronDownIcon } from './ChevronDown'
import { ChevronLeftIcon } from './ChevronLeft'
import { ChevronRightIcon } from './ChevronRight'
import { CloseIcon } from './Close'
import { MenuIcon } from './Menu'
import { WarningIcon } from './Warning'

import { SocialIconName, socialIconMap } from './social'
export type IconName =
  | SocialIconName
  | 'menu'
  | 'moon'
  | 'sun'
  | 'close'
  | 'warning'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'

const iconMap = {
  ...socialIconMap,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  close: CloseIcon,
  menu: MenuIcon,
  moon: MoonIcon,
  sun: SunIcon,
  warning: WarningIcon,
}

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes

export interface IconProps extends ComponentAttributes {}
export const Icon: FC<{ name: IconName } & IconProps> = ({
  name,
  ...props
}) => {
  const IconComponent = iconMap[name]
  if (!IconComponent) {
    console.error(`Icon "${name}" not found`)
    return null
  }
  return <IconComponent {...props} />
}
