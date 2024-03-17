import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export interface IconProps {
  icon: string | StaticImport
  alt: string
}

export const Icon: React.FC<IconProps> = ({ alt, icon }) => {
  return <Image src={icon} width={20} height={20} alt={alt} />
}
