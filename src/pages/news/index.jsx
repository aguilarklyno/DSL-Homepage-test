import React from 'react'
import Link from 'next/link'
import { client } from 'libs/client'
import PageTitle from '@/components/atoms/PageTitle'

function index({blog}) {
  return (
    <main  className='flex flex-col items-center'>
    <div className='text-gray-900 bg-blue-900/60 base-layout space-y-8 mt-40 pb-32 w-[95%] sm:w-11/12 lg:w-4/5 rounded-t-3xl border-[1px] border-gray-200 '>
      <PageTitle title="活動内容一覧" subtitle="Activities"/>

      <div className='w-full flex flex-col space-y-4'>
        {blog.map((blog) => {
          return (
            <Link
              className='w-full py-2 px-4 bg-white/80 flex flex-col justify-center items-start space-y-2 transition-bg duration-300 hover:text-white hover:bg-gray-300'

              key={blog.id}
              href={`/blog/${blog.id}`}
            >
              <div className='border-l-2 border-gray-500 pl-3 space-y-2'>
                <div className='flex justify-start items-center space-x-2 [&_p]:text-black'>
                  <p className='bg-blue-300 p-1 rounded-lg text-xs'>
                    {blog.tag}
                  </p>
                  <div className='text-xs'>
                    {blog.date}
                  </div>
                </div>
                <p className='text-xs sm:text-sm'>
                  {blog.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </main>
  )
}

export default index


export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: 10,
    },
  })

  return {
    props: {
      blog: data.contents,
    },
  }
}
