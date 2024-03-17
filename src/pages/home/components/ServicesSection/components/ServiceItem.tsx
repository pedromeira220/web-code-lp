import { Button } from '@/components/Button'
import { heading } from '@/styles/tailwind-variants/Heading'
import { text } from '@/styles/tailwind-variants/Text'
import React, { ReactNode } from 'react'

export interface BenefitWithFeatureItemProps {
  title: string
  headingText: string
  paragraph: ReactNode
  image: ReactNode
  imageFirst?: boolean
  buttonTitle: string
}

export const ServiceItem: React.FC<BenefitWithFeatureItemProps> = ({
  headingText,
  image,
  paragraph,
  title,
  imageFirst = false,
  buttonTitle,
}) => {
  const renderContent = () => {
    return (
      <div className="flex flex-col gap-9 md:items-start">
        <p
          className={text({
            size: 'sm',
            weight: 'semibold',
            className: 'text-brand-500',
          })}
        >
          {title}
        </p>
        <h2 className={heading({ size: 'sm', weight: 'semibold' })}>
          {headingText}
        </h2>
        {paragraph}
        <Button title={buttonTitle} />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 items-center md:grid md:grid-cols-2">
      <div
        data-image-first={imageFirst}
        className="order-1 md:data-[image-first=true]:order-2"
      >
        {renderContent()}
      </div>
      <div
        data-image-first={imageFirst}
        className="order-2 md:data-[image-first=true]:order-1"
      >
        {image}
      </div>
    </div>
  )
}
