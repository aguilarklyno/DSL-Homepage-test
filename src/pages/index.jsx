import Head from 'next/head'
import Hero from '@/components/P-home/Hero'
import { client } from 'libs/client'
import Schedule from '@/components/P-home/Schedule'
import BigNews from '@/components/P-home/BigNews'
import News from '@/components/P-home/News'
import Title from '@/components/atoms/Title'
import { useState, useEffect } from 'react'
import ButtonFill from '@/components/atoms/ButtonFill'

export default function Home({ news, hero, bigNews }) {
  const [scrolled, setScrolled] = useState(false)

  const scrollHandler = () => {
    const offset = window.scrollY
    const windowHeight = window.outerHeight

    if (offset > windowHeight / 2) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Data Science League</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main
        className={`
              overflow-hidden bg-cover bg-center transition-all duration-1000 bg-[url('/bg/bg07.jpg')]`}
      >
        <div className="h-fit bg-cover bg-center ">
          <Hero hero={hero} />
        </div>
        <div className="h-fit flex justify-center items-center bg-cover bg-center">
          <BigNews bigNews={bigNews} />
        </div>

        <div className="w-full h-fit mt-28">
          <div className="w-[95%] sm:w-11/12 lg:w-4/5 m-auto base-layout rounded-3xl space-y-2 bg-blue-950/80 text-white">
            <Title text={`最新情報 - What's New -`} />
            <News news={news} />
            <Title text={`活動 - Activities - `} />
            <Schedule />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: 5, // 5件取得
    },
  })

  const hero = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: 3, // 3件取得
    },
  })

  const bigNewsdata = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: 3, // 3件取得
    },
  })

  return {
    props: {
      news: data.contents,
      hero: hero.contents,
      bigNews: bigNewsdata.contents,
    },
  }
}
