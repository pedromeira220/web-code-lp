import { FeaturedIcon } from '@/components/FeaturedIcon'
import { heading } from '@/styles/tailwind-variants/Heading'
import { text } from '@/styles/tailwind-variants/Text'
import React from 'react'

export const BenefitsSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-25">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-5 max-w-3xl">
            <h2
              className={heading({
                size: { initial: 'sm', md: 'md' },
                weight: 'bold',
                className: 'text-center',
              })}
            >
              Transformando Estratégia em Tecnologia, e Tecnologia em Sucesso
            </h2>
            <p
              className={text({
                size: 'xl',
                className: 'text-gray-700 text-center',
              })}
            >
              Unimos estratégia sofisticada e tecnologia de ponta para criar
              soluções que não apenas resolvem problemas complexos, mas também
              impulsionam o crescimento sustentável, assegurando que você esteja
              sempre à frente da concorrência.
            </p>
          </div>

          <div className="flex flex-col gap-16 md:grid md:grid-cols-3">
            <div className="flex flex-col gap-5 items-center">
              <FeaturedIcon icon="/icons/mark.svg" alt="Mark" />
              <div className="flex flex-col gap-2">
                <p
                  className={text({
                    size: 'md',
                    weight: 'semibold',
                    className: 'text-center',
                  })}
                >
                  Estratégia Que Gera Resultados
                </p>
                <p
                  className={text({
                    size: 'md',
                    className: 'text-gray-700 text-center',
                  })}
                >
                  Nossa metodologia integra análise de mercado e insights do
                  cliente, garantindo soluções que realmente impulsionam seu
                  negócio.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <FeaturedIcon
                icon="/icons/server-03.svg"
                alt="Ícone com quadrado e um check dentro"
              />
              <div className="flex flex-col gap-2">
                <p
                  className={text({
                    size: 'md',
                    weight: 'semibold',
                    className: 'text-center',
                  })}
                >
                  Inovação Contínua
                </p>
                <p
                  className={text({
                    size: 'md',
                    className: 'text-gray-700 text-center',
                  })}
                >
                  Adotamos as últimas tecnologias para desenvolver soluções
                  robustas, preparando sua empresa para o futuro.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <FeaturedIcon
                icon="/icons/line-chart-up-02.svg"
                alt="Ícone de um gráfico subindo"
              />
              <div className="flex flex-col gap-2">
                <p
                  className={text({
                    size: 'md',
                    weight: 'semibold',
                    className: 'text-center',
                  })}
                >
                  Parceiros no Seu Sucesso
                </p>
                <p
                  className={text({
                    size: 'md',
                    className: 'text-gray-700 text-center',
                  })}
                >
                  Focamos em resultados duradouros, ajudando sua empresa a
                  crescer continuamente e manter a liderança de mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
