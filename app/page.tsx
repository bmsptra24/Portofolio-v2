import { Comet } from "@/components/Comet";
import { Header } from "@/components/Header";
import { LeftSection } from "@/components/LeftSection";
import { Line } from "@/components/Line";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto w-full relative overflow-x-hidden">
        <LeftSection className="absolute top-[50vh] bottom-0">
          <Line />
        </LeftSection>
        <Section1 />
        <Section2 />
        <Section1 />
      </main>
      <Comet />
    </>
  );
}
