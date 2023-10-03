import { spaceGrotesk, titilliumWeb } from '@/styles/global'
import React from 'react'
import { LeftSection } from './LeftSection'
import { Reveal } from '@/animations/Reveal'
import { techStack } from '@/config-main'

export const Section1 = () => {
  return (
    <section className="flex h-screen">
      <LeftSection />
      <div className="w-3/4 flex items-center lg:pl-5 pt-14">
        <div
          className={`${spaceGrotesk.className} text-7xl lg:text-9xl relative`}
        >
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            delay={0.8}
          >
            <p>Bima Saputra</p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={1.2}
          >
            <p
              className={`${titilliumWeb.className} text-2xl mt-4 ml-1 lg:ml-3`}
            >
              Frontend developer anthusias
            </p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={1.5}
            className={`${titilliumWeb.className} text-2xl mt-20 sm:mt-4 ml-1 lg:ml-2 w-fit sm:w-max sm:absolute -bottom-16 flex sm:flex-row flex-col gap-5 items-center`}
          >
            <p className={``}>Tech Stack</p>
            <hr className="bg-white sm:rotate-90 w-24 sm:w-6 sm:mr-4" />
            <div className="flex justify-center gap-5 flex-wrap">
              {techStack.map((logo, index) => {
                return (
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    key={index}
                    className="h-8 hover:scale-110"
                  />
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
