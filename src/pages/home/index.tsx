import { Header } from '@/components/Header'
import Head from 'next/head'
import { AboutUsSection } from './components/AboutUsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { FooterSection } from './components/FooterSection'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>WebCode</title>
      </Head>
      <div className="bg-white">
        <Header />
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <AboutUsSection />
        <FooterSection />
      </div>
    </>
  )
}
