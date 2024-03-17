import Image from 'next/image'
import React from 'react'

interface LogoProps {
  width: number
  height: number
}

export const Logo: React.FC<LogoProps> = ({ height, width }) => {
  return (
    <Image
      src="/logo.png"
      priority
      quality={100}
      alt="Logo do MindTaskin - cérebro preto com um check dentro"
      width={width}
      height={height}
    />
  )
}
