import React, { useState, useEffect, useCallback } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export default function SlideShow() {
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
    <div className="relative m-2 w-11/12 sm:w-10/12 lg:w-7/12 h-full aspect-video  section-bg-hero">
    <TransitionGroup>
      <CSSTransition
        key={currentImage}
        classNames={reverse ? 'slide-prev' : 'slide'}
        timeout={500}
      >
        <Slide>
          {images2.map((image, index) => {
            if (index === currentImage) {
              return (
                <div
                  key={index}
                  className="w-full aspect-video bg-cover"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              )
            }
            return null
          })}
        </Slide>
      </CSSTransition>
    </TransitionGroup>
  </div>
  )
}
