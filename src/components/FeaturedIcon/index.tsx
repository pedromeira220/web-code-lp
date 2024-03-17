import React from 'react'
import { Icon, IconProps } from '../Icon'

type FeaturedIconProps = IconProps

export const FeaturedIcon: React.FC<FeaturedIconProps> = ({ ...rest }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-[0.625rem] w-10 h-10">
      <Icon {...rest} />
    </div>
  )
}
