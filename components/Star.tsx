import { starsConfig } from '@/config-main'
import { getRandomNumber } from '@/features/getRandomNumber'
import anime from 'animejs'
import { useEffect } from 'react'
import 'animate.css'

const style: () => React.CSSProperties = () => {
  return {
    left: getRandomNumber(0, 100) + 'vw',
    top: getRandomNumber(0, 100) + 'vh',
    scale: getRandomNumber(0, 4),
    backgroundColor:
      starsConfig.colors[getRandomNumber(0, starsConfig.colors.length)],
  }
}

const GetStar = ({ id }: any) => {
  'use client'
  useEffect(() => {
    const element: HTMLElement | null = document.querySelector('#star-' + id)
    element?.style.setProperty(
      '--animate-duration',
      `${getRandomNumber(20, 100) / 20}s`,
    )
    // anime({
    //   targets: '#star-' + id,
    //   opacity: () => {
    //     return anime.random(0, 100) + '%'
    //   },
    //   easing: 'easeInOutQuad',
    //   direction: 'alternate',
    //   duration: anime.random(300, 4000),
    //   loop: true,
    // })
  }, [])
  return (
    <i
      id={'star-' + id}
      className={`absolute h-px w-px rounded-full animate__animated animate__flash animate__infinite	infinite animate__slow`}
      style={style()}
    >
      &nbsp;
    </i>
  )
}

export const Star = () => {
  const stars = []
  for (let star = 0; star < starsConfig.total; star++) {
    stars.push(<GetStar key={star} id={star} />)
  }
  return stars
}
