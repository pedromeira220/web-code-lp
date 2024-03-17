import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-gray-50 px-3 py-2 shadow-sm outline-none',
        'focus-within:border-brand-300 focus-within:ring-4 focus-within:ring-brand-100 ',
        className,
      )}
    />
  )
}
