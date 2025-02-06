"use client"
import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JoinCommunity } from '@/components/JoinCommunity'
import { Properties } from '@/components/Properties'
import { Services } from '@/components/Services'
import { TransitionPage } from '@/components/TransitionPage'
import dynamic from "next/dynamic"

const LocationMap = dynamic( // Importar el mapa de esta manera para evitar fallas al momento de carga
  () => import('../components/Location').then(module => module.Location),
  {
    ssr: false
  }
)

export default function Home() {

  return (
    <>
      <TransitionPage />
      <Header />
      <main>
        <Banner />
        <Properties />
        <div className="max-w-6xl mx-auto">
          <Services />
          <LocationMap />
          <About />
        </div>
        <JoinCommunity />
        <Footer />
      </main>
    </>
  )
}
