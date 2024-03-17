import { text } from '@/styles/tailwind-variants/Text'
import React from 'react'

interface FeatureItemProps {
  title: string
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title }) => {
  return (
    <div className="flex gap-3 items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="#1B52BD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className={text({ size: 'lg' })}>{title}</p>
    </div>
  )
}
