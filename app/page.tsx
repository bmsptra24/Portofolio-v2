import { Comets } from "@/components/Comets";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeftSection } from "@/components/LeftSection";
import { Line } from "@/components/Line";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Stars } from "@/components/Stars";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto w-full relative overflow-hidden">
        <LeftSection className="absolute top-[50vh] bottom-0">
          <Line />
        </LeftSection>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </main>
      <Comets />
      <Stars />
    </>
  );
}
