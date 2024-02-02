'use client'
import { spaceGrotesk, titilliumWeb } from '@/styles/global'
import React, { useEffect } from 'react'
import { LeftSection } from '../Decoration/LeftSection'
import { Reveal } from '@/animations/Reveal'
import { variantReveal } from '@/animations/variant'
import { Meteor } from '../Decoration/Meteor'
import anime from 'animejs'
import { techStack } from '@/config-main'

export const Section2 = () => {
  useEffect(() => {
    const path = anime.path('#motion-path path')

    const animation = anime.timeline({
      targets: '.meteor',
      translateX: path('x'),
      translateY: path('y'),
      keyframes: [{ scale: '125%' }, { scale: '0%' }],
      easing: 'easeInOutSine',
      duration: 10000,
      loop: true,
      direction: 'reverse',
      delay: anime.stagger(580, { start: 0 }),
    })
    animation.add({
      targets: '.meteor',
      scale: '0%',
    })
  }, [])

  return (
    <section className="flex h-[710px]">
      <LeftSection />
      <div className="w-full flex items-center pl-5 pt-14 relative">
        <div
          className={`flex flex-col items-start lg:items-end absolute top-32 right-5 lg:right-28`}
        >
          <Reveal variant={variantReveal.t}>
            <p className={`${spaceGrotesk.className} text-8xl`}>Tech Stack</p>
          </Reveal>
          <Reveal variant={variantReveal.l}>
            <p className={`${titilliumWeb.className} text-2xl mt-4`}>
              Tools I using
            </p>
          </Reveal>
        </div>
        <div className="absolute left-0 lg:left-60 -bottom-10 lg:bottom-16 -z-10">
          {/* meteor */}
          {techStack.map((e, idx) => (
            <div className="meteor w-min absolute" key={idx}>
              <Meteor src={e}></Meteor>
            </div>
          ))}

          <svg
            id="motion-path"
            width="800"
            height="380"
            viewBox="0 0 867 488"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M859.196 340.02C845.681 399.704 786.579 444.013 700.113 466.652C613.838 489.242 501.312 489.924 383.058 463.145C264.804 436.366 163.55 387.274 95.423 329.72C27.1464 272.039 -7.10128 206.59 6.41407 146.907C19.9294 87.2235 79.0317 42.9145 165.497 20.2749C251.773 -2.31505 364.298 -2.99675 482.552 23.782C600.806 50.5607 702.06 99.6529 770.187 157.208C838.464 214.888 872.712 280.337 859.196 340.02Z"
              // stroke="#FFF"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
