import { Logo } from '@/components/Logo'
import { text } from '@/styles/tailwind-variants/Text'
import React from 'react'

export const FooterSection: React.FC = () => {
  return (
    <section className="w-full border-t border-gray-50">
      <div className="max-w-7xl mx-auto py-6 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <Logo width={226} height={43} />
          <p
            className={text({
              size: 'md',
              className: 'text-gray-400 text-center',
            })}
          >
            © 2024 WebCode. Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  )
}
