import { heading } from '@/styles/tailwind-variants/Heading'
import { text } from '@/styles/tailwind-variants/Text'
import React from 'react'

export const AboutUsSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-6 max-w-[50rem]">
            <h2
              className={heading({
                size: {
                  initial: 'sm',
                  md: 'md',
                },
                weight: 'semibold',
                className: 'text-center',
              })}
            >
              Sobre a WebCode
            </h2>
            <p
              className={text({
                size: {
                  initial: 'lg',
                  md: 'xl',
                },
                className: 'text-center',
              })}
            >
              Na WebCode, nascemos no Colégio Técnico Bento Quirino, com a
              missão de desenvolver soluções digitais inovadoras que impulsionam
              o futuro dos negócios.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row justify-between md:gap-0">
            <div className="flex flex-col gap-8 py-9 px-6 md:p-12">
              <div className="flex flex-col gap-4">
                <h2
                  className={heading({
                    size: 'xs',
                    weight: 'semibold',
                    className: 'text-center',
                  })}
                >
                  Missão
                </h2>
                <p
                  className={text({
                    size: 'lg',
                    className: 'text-center text-gray-600',
                  })}
                >
                  Dedicamos a transformar necessidades em sistemas inovadores e
                  aplicativos que impulsionam o mercado com soluções ágeis e
                  inteligentes.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 py-9 px-6 md:p-12">
              <div className="flex flex-col gap-4">
                <h2
                  className={heading({
                    size: 'xs',
                    weight: 'semibold',
                    className: 'text-center',
                  })}
                >
                  Visão
                </h2>
                <p
                  className={text({
                    size: 'lg',
                    className: 'text-center text-gray-600',
                  })}
                >
                  Aspiramos a ser líderes em inovação e estratégia, convertendo
                  ideias em soluções tecnológicas avançadas que catalisam o
                  sucesso e crescimento contínuo de nossos clientes.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 py-9 px-6 md:p-12">
              <div className="flex flex-col gap-4">
                <h2
                  className={heading({
                    size: 'xs',
                    weight: 'semibold',
                    className: 'text-center',
                  })}
                >
                  Valores
                </h2>
                <p
                  className={text({
                    size: 'lg',
                    className: 'text-center text-gray-600',
                  })}
                >
                  Comprometidos com inovação, excelência, agilidade e a
                  satisfação do cliente, moldamos o futuro da tecnologia com
                  cada solução que entregamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
