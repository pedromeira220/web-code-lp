import { text } from '@/styles/tailwind-variants/Text'
import Image from 'next/image'
import { ServiceItem } from './components/ServiceItem'

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-14 md:gap-16">
          <ServiceItem
            title="OnDemand"
            headingText="Soluções Sob Medida"
            paragraph={
              <div className="flex flex-col">
                <p className={text()}>
                  Transformamos suas ideias em realidade digital, desenvolvendo
                  sistemas e aplicativos personalizados que se alinham
                  perfeitamente às suas necessidades, utilizando metodologias
                  ágeis para garantir entrega eficiente e dentro do prazo.
                </p>
              </div>
            }
            image={
              <Image
                src="/dev_productivity.svg"
                alt="Desenvolvedor trabalhando"
                width={460.31}
                height={501.48}
              />
            }
            buttonTitle="Contrate o OnDemand"
          />

          <ServiceItem
            imageFirst
            title="Squad as a Service"
            headingText="Equipe Dedicada de Inovação"
            paragraph={
              <div className="flex flex-col">
                <p className={text()}>
                  Acelere a criação e o aprimoramento do seu produto com nosso
                  serviço de Squad as a Service. Conte com equipes
                  especializadas de engenheiros e designers para garantir
                  desenvolvimento contínuo, inovação e suporte dedicado ao seu
                  projeto.
                </p>
              </div>
            }
            image={
              <Image
                src="/engineering_team.svg"
                alt="Uma equipe de engenheiros trabalhando juntos."
                width={477}
                height={452}
              />
            }
            buttonTitle="Contrate o Squad as a Service"
          />
        </div>
      </div>
    </section>
  )
}
