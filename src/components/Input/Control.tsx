import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type ControlProps = InputHTMLAttributes<HTMLInputElement>

export function Control({ className, ...rest }: ControlProps) {
  return (
    <input
      {...rest}
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-gray-950 placeholder-gray-500 outline-none focus:ring-0',
        className,
      )}
    />
  )
}
