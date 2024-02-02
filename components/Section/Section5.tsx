'use client'
import { spaceGrotesk, titilliumWeb } from '@/styles/global'
import React from 'react'
import { LeftSection } from '../Decoration/LeftSection'
import { Reveal } from '@/animations/Reveal'
import anime from 'animejs'
import Link from 'next/link'

export const Section5 = () => {
  return (
    <section className="flex h-screen items-center">
      <LeftSection />
      <div className="sm:w-3/4 flex items-center pl-5">
        <div
          className={`${spaceGrotesk.className} flex justify-center flex-col h-full`}
        >
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p
              className={`${titilliumWeb.className} text-2xl mt-4 ml-1 sm:ml-2`}
            >
              Need a frontend developer?
            </p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            delay={0.8}
          >
            <Link
              href="https://www.linkedin.com/in/bmsptra24/"
              className="text-7xl sm:text-8xl cursor-pointer transition-all mt-2 no-underline hover:underline ease-in-out"
            >{`Let’s work together`}</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
