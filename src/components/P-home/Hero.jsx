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
    <div className="text-black h-full w-full mt-24 mb-16 space-y-8">
      <h1 className="text-4xl font-bold text-center p-2">Welcome to Data Sciecne Leageu</h1>
      <div className="flex flex-col">
        <div>
          <Global styles={globalStyles} />
          <div className="relative w-11/12 sm:w-9/12 lg:w-7/12 h-full aspect-video m-auto section-bg-hero">
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
        </div>
      </div>
    </div>
  )
}
