import React from 'react'
import Link from 'next/link'

export default function BigNews({bigNews}) {
  const images = [
    {
      src: '/hero/conference02.jpg',
      alt: "Image01",
    },
    {
      src: '/bigNews/bigNews02.jpg',
      alt: "Image02",
    },
    {
      src: '/bigNews/bigNews03.jpg',
      alt: "Image03",
    }
  ]

  return (
    <div className="layout-contents space-y-8">
    <div className="w-full flex flex-col sm:flex-row justify-center items-center">
    {bigNews.map((item, index) => {
          const image = images[index % images.length];
          return (
            <>
              <Link
                key={index}
                href={`/blog/${item.id}`}
                className="w-full m-1 h-_Section-2xs sm:h-_Section-xs lg:h-_Section-sm 2xl:h-_Section-md bg-yellow-300 rounded-md object-cover transition transform hover:-translate-y-2 hover:scale-105 shadow-xl"
              >
                  <div
                      key={index}
                      className="w-full h-full flex items-center rounded-md overflow-hidden"
                      style={{
                        backgroundImage: `url(
                          ${item.image && item.image.url ? item.image.url : image.src})`,
                        backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    >
                  <div
                    key={index}
                    className='flex justify-center items-center w-full bg-white/80 font-semibold text-xs sm:text-md p-4'
                  >
                    {item.title}
                  </div>
                </div>
              </Link>
            </>
          )
        })}
    </div>
  </div>  )
}
