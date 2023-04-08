import React, { useState, useEffect, useCallback } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import SlideShow from './SlideShow'

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const globalStyles = css`
  .slide-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }

  .slide-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  .slide-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms, transform 500ms;
  }

  .slide-prev-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .slide-prev-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }

  .slide-prev-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  .slide-prev-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 500ms, transform 500ms;
  }
`

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query)
      setMatches(media.matches)

      const listener = () => setMatches(media.matches)
      media.addListener(listener)

      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}

export default function Hero({ hero }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // const images = hero.map((news) => news.image.url);

  const images2 = ['/hero/hero01.png', '/hero/hero02.png', '/hero/hero03.png']

  const [currentImage, setCurrentImage] = useState(0)
  const [reverse, setReverse] = useState(false)

  const goToNextImage = useCallback(() => {
    setCurrentImage(
      (prevCurrentImage) => (prevCurrentImage + 1) % images2.length
    )
    setReverse(false)
  }, [images2.length])

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextImage()
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [goToNextImage])

  return (
    <div className="text-white h-full w-full pt-32 mb-16 space-y-8">
      <h1 className="text-xl lg:text-3xl xl:text-4xl lg:mt-8 font-bold text-center p-2">
        Welcome to <br className="md:hidden" />
        <span className="text-3xl lg:text-5xl xl:text-6xl">
          Data Sciecne League
        </span>
      </h1>
      <div className="flex flex-col">
        <div>
          <Global styles={globalStyles} />
          <div className="w-full flex flex-col lg:flex-row lg:mt-24 justify-between items-center space-y-12 lg:space-y-0">
            <SlideShow />
            <div className="h-fit w-11/12 sm:w-10/12 lg:w-5/12 text-lg xl:text-2xl m-2 lg:m-6 p-4 rounded-2xl flex flex-col justify-center items-start font-semibold shadow-[20px_35px_60px_20px_rgba(0,0,0,0.3)] bg-white/20 lg:bg-blue-700/30">
              Data Science
              Leagueとはその名の通りデータサイエンスに特化した最大かつ最高の学生団体です。
              <br />
              <br />
              <span className="text-base xl:text-xl">
                Data Science League is, as the name implies, the largest and
                best student organization dedicated to data science.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
