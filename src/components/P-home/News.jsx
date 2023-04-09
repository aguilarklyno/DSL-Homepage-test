import React from 'react'
import Link from 'next/link'
import ButtonFill from '@/components/atoms/ButtonFill'

export default function News({ news }) {
  return (
    <div className="w-4/5 space-y-2 text-black">
      <div className=" w-full flex flex-col p-2 space-y-4 rounded-lg">
        <ul>
          {news.map((item) => (
            <li
              key={item.id}
              className="border-l-2 text-gray-50 border-gray-500 my-3 p-1 rounded-r-lg transition-all duration-200 hover:bg-gray-500 hover:text-white"
            >
              <Link
                className="flex flex-col justify-start items-start pl-2 space-y-1 "
                href={`/blog/${item.id}`}
              >
                <div
                  className="flex justify-start items-center space-x-2
              [&_p]:text-black"
                >
                  <p className="bg-blue-300 p-1 rounded-lg text-xs">
                    {item.tag}
                  </p>
                  <div className="text-xs">{item.date}</div>
                </div>
                <div className="w-full text-xs sm:text-sm white-space-nowrap overflow-hidden overflow-ellipsis">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ButtonFill
          bg="border-2 border-yellow-300 bg-white text-black w-fit m-auto text-sm"
          link={'/news'}
          text="一覧をみる"
        />
      </div>
    </div>
  )
}
