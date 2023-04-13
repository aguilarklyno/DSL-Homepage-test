import React from 'react'
import Link from 'next/link'

export default function BigNews({ bigNews }) {
  const images = [
    {
      src: '/hero/conference02.jpg',
      alt: 'Image01',
    },
    {
      src: '/bigNews/bigNews02.jpg',
      alt: 'Image02',
    },
    {
      src: '/bigNews/bigNews03.jpg',
      alt: 'Image03',
    },
  ]

  return (
    <div className="flex flex-col h-fit w-11/12 space-y-8">
      <div className="w-11/12 sm:w-3/4 m-auto ">
        <h1 className='w-1/3 text-white text-5xl border-b-4 border-white'>News</h1>
      </div>
      <div className="relative w-full flex flex-col sm:flex-row justify-center items-center space-y-12 sm:space-y-0 sm:space-x-8">
        {bigNews.map((item, index) => {
          const image = images[index % images.length]
          return (
            <>
              <Link
                key={index}
                href={`/blog/${item.id}`}
                className="w-11/12 sm:w-1/4 m-1 text-xs h-[10rem] sm:h-[15rem] lg:h-[20rem] 2xl:h-[25rem] bg-white/50 rounded-md object-covershadow-xl"
              >
                <div className="mt-2 mb-1 pl-4 text-white">{item.date}</div>
                <div
                  key={index}
                  className="relative left-2 w-full h-full flex items-center rounded-md overflow-hidden transition transform hover:-translate-y-2 hover:scale-105 "
                  style={{
                    backgroundImage: `url(
                          ${
                            item.image && item.image.url
                              ? item.image.url
                              : image.src
                          })`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    key={index}
                    className="flex justify-center items-center w-full bg-white/90 font-semibold text-[0.6rem] p-4"
                  >
                    {item.title}
                  </div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}
