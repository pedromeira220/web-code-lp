import { text } from '@/styles/tailwind-variants/Text'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export const Button: React.FC<ButtonProps> = ({
  title,
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        'bg-gray-950 py-4 rounded-2xl px-6 disabled:bg-gray-600',
        className,
      )}
      {...rest}
    >
      <span
        className={text({
          weight: 'semibold',
          size: 'md',
          className: 'text-white',
        })}
      >
        {title}
      </span>
    </button>
  )
}
