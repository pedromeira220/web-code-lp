import { Button } from '@/components/Button'
import { heading } from '@/styles/tailwind-variants/Heading'
import { text } from '@/styles/tailwind-variants/Text'
import Image from 'next/image'
import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full pt-[7.5rem]">
      <div className="max-w-7xl mx-auto pb-16 pt-8 px-4 md:px-6">
        <div className="flex flex-col gap-10 md:justify-between md:grid md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-8 justify-center md:gap-16 md:items-start">
            <div className="flex flex-col gap-5 md:gap-6">
              <h1
                className={heading({
                  weight: 'bold',
                  size: {
                    initial: 'md',
                    md: 'lg',
                  },
                })}
              >
                Estratégia e Tecnologia Unidas: Moldando o Futuro dos Negócios
                Inovadores.
              </h1>
              <p
                className={text({
                  weight: 'regular',
                  size: {
                    initial: 'lg',
                    md: 'xl',
                  },
                })}
              >
                Conectamos metodologias ágeis e tecnologia para criar soluções
                que resolvem problemas reais, garantindo o alinhamento com as
                aspirações e o progresso do seu mercado.
              </p>
            </div>

            <Button title="Entre em contato" />
          </div>
          <div className="flex justify-center aspect-[560/640]">
            <Image
              src="/hero-image.svg"
              alt="Uma ilustração com uma print do aplicativo"
              width={560}
              height={640}
              className="aspect-[560/640] w-full"
              quality={100}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
