import { FC } from 'react'
import { IconProps } from './index'

export const SquirrelIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15.236 22a3 3 0 0 0-2.2-5.166 2.9 2.9 0 0 0-.75-.07A3.001 3.001 0 0 0 10 21.501" />
      <path d="M18 18V6.5A3.5 3.5 0 0 0 14.5 3H12v2.5A3.5 3.5 0 0 0 15.5 9H18" />
      <path d="M18 9h1a3 3 0 0 1 0 6h-1" />
      <path d="M6.5 14.5A2.5 2.5 0 0 1 9 12H6a3 3 0 0 0-3 3v1.5A3.5 3.5 0 0 0 6.5 20H10" />
      <circle cx="15.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}
