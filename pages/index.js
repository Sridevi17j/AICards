import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from '../components/Header'
import CardGrid from '../components/SampleCards'
import SamplePrompts from '../components/SamplePrompts'
import PlansAndPricing from '../components/PlansandPricing'

const DynamicHero = dynamic(() => import('../components/Hero'), { ssr: false })

export default function Home() {
  const cardGridRef = useRef(null)
  const promptsRef = useRef(null)
  const plansandpricingRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Head>
        <title>AICardify - AI-generated greeting cards</title>
        <meta name="description" content="AICards generates greeting cards for all your occasions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        scrollToCards={() => scrollToSection(cardGridRef)} 
        scrollToPrompts={() => scrollToSection(promptsRef)}
        scrollToPlansandPricing={() => scrollToSection(plansandpricingRef)}
      />
      <main>
        <DynamicHero />
        <div ref={cardGridRef}>
          <CardGrid />
        </div>
        <div ref={promptsRef}>
          <SamplePrompts />
        </div>
        <div ref={plansandpricingRef}>
          <PlansAndPricing />
        </div>
      </main>
    </div>
  )
}