import { spaceGrotesk, titilliumWeb } from '@/styles/global'
import React from 'react'
import { LeftSection } from '../Decoration/LeftSection'
import { Reveal } from '@/animations/Reveal'
import Link from 'next/link'

export const Section4 = () => {
  return (
    <section className="flex h-[850px]">
      <LeftSection />
      <div className="w-full lg:w-3/4 flex items-center sm:pl-5 pt-14">
        <div className={`${spaceGrotesk.className}`}>
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-7xl sm:text-8xl">Made with</p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={0.2}
          >
            <div
              className={`${titilliumWeb.className} text-2xl mt-4 ml-1 sm:ml-2 grid grid-cols-2`}
            >
              <ul className="flex flex-col gap-1">
                <li>Next JS</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Anime JS</li>
                <li>Photoshop</li>
              </ul>
              {/* <ul className="flex flex-col gap-1">
                <li>+62 cups of coffee</li>
                <li>Endless references</li>
                <li>2 easter eggs</li>
              </ul> */}
              <ul className="flex flex-col gap-1">
                <Link
                  target="_blank"
                  className="hover:underline transition-all ease-in-out"
                  href={
                    'https://open.spotify.com/track/4GfK1qOF3uBWidbPlTCQRL?si=403785948dc84fc9'
                  }
                >
                  Tulus
                </Link>
                <Link
                  target="_blank"
                  className="hover:underline transition-all ease-in-out"
                  href={
                    'https://open.spotify.com/track/0InJPuWIYp8fwlBGIQglLf?si=d4b6671f46b84678'
                  }
                >
                  Maudy Ayunda
                </Link>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
