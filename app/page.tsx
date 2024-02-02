import { Comets } from '@/components/Decoration/Comets'
import { Footer } from '@/components/Footer/FooterProfil'
import { Header } from '@/components/Header/HeaderProfil'
import { LeftSection } from '@/components/Decoration/LeftSection'
import { Line } from '@/components/Decoration/Line'
import { Section1 } from '@/components/Section/Section1'
import { Section2 } from '@/components/Section/Section2'
import { Section3 } from '@/components/Section/Section3'
import { Section4 } from '@/components/Section/Section4'
import { Section5 } from '@/components/Section/Section5'
import { Stars } from '@/components/Decoration/Stars'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto w-full relative overflow-hidden">
        <LeftSection className="absolute top-[50vh] bottom-0">
          <Line />
        </LeftSection>
        <Section1 />
        {/* <Section2 /> */}
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </main>
      <Comets />
      <Stars />
    </>
  )
}
