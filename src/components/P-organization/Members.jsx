import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Members({ members }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [activeMember, setActiveMember] = useState(null)

  const handleImageClick = (member) => {
    setActiveMember(member)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="w-full lg:w-4/5 flex-wrap-reverse m-auto flex flex-row-reverse justify-center items-center ">
      {members.map((member) => (
        <>
          <div
            key={member.id}
            className="w-1/2 sm:w-1/3 p-2 m-auto flex flex-col space-y-1 justify-start items-center"
          >
            <div
              key={member.id}
              className="relative w-full aspect-square cursor-pointer rounded-lg transition-all duration-200 hover:scale-105 hover:-translate-y-2"
              onClick={() => handleImageClick(member)}
              style={{
                backgroundImage: `url(${member.image.url})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="text-[0.5rem] sm:text-xs lg:text-sm font-extralight text-center px-2">
              {member.name}
            </div>
            <div
              key={member.id}
              className="text-[0.5rem] sm:text-xs lg:text-sm font-extralight text-center px-2"
            >
              {member.status}
            </div>
          </div>
        </>
      ))}

      {modalIsOpen && (
        <div
          className="fixed text-black z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="flex flex-col justify-center items-center w-4/5 sm:w-1/2 h-fit bg-white pb-6 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex flex-row-reverse">
              <button
                className="z-500 left-4 bottom-4 bg-blue-800 relative  text-xs text-white font-base px-2 py-2 rounded-full border-white border-2"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center w-auto">
              <Image
                className="rounded-md shadow-lg"
                key={activeMember.id}
                src={activeMember.image.url}
                alt={activeMember.name}
                width={150}
                height={150}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <h2 className="text-sm font-bold">{activeMember.name}</h2>
              <h2 className="text-xs font-thin">{activeMember.status}</h2>
            </div>
            <p className="text-xs w-4/5 my-4">{activeMember.caption}</p>
            <div className="flex justify-center items-center space-x-3">
              <Link
                className="bg-blue-800 text-xs text-white font-base px-4 py-2 rounded-md"
                href={`${activeMember.portfolioUrl}`}
              >
                ポートフォリオへ
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
