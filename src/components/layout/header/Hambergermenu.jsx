import Link from "next/link";
import { useState } from "react"; // import state
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



export default function Hambergermenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex sm:text-black">
      <nav>
        <section className="MOBILE-MENU text-white mr-2 sm:mr-1 lg:mr-3">
          <button
            className="absolute top-0 right-0 mr-2 sm:mr-1 lg:mr-3 mt-8"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-10 h-10">
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className={`text-white absolute bg-cover bg-[url('/bg/bg05.jpg')] ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}> 
            <button
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>


            <ul className="MENU-LINK-MOBILE-OPEN mt-24 flex flex-col justify-center w-full items-center">
            <li
                className="flex justify-center items-center  w-full">
                <Link
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  className="w-4/5 border-b-2 py-4 border-gray-400"
                  href="/"
                >
                  ホーム<span className="pl-4 text-xs">-Home-</span>
                </Link>
              </li>
              <li
                className="flex justify-center items-center  w-full">
                <div
                  className="w-4/5 border-b-2 py-4 border-gray-400"
                  // href="/contacts/organization"
                >
                  <Organization setIsNavOpen={setIsNavOpen} />
                </div>
              </li>
              <li
                className="flex justify-center items-center  w-full">
                <Link
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  className="w-4/5 border-b-2 py-4 border-gray-400"
                  href="/news"
                >
                  活動内容<span className="pl-4 text-xs">-Activities-</span>
                </Link>
              </li>
              <li
                className="flex justify-center items-center  w-full">
                <Link
                  className="w-4/5 border-b-2 py-4 border-gray-400"
                  href="/"
                >
                  <Contract setIsNavOpen={setIsNavOpen}/>
                </Link>
              </li>
            </ul>
          </div>
        </section>

      </nav>
      <style>{`
.hideMenuNav {
  display: block;
  height: 100vh;
  opacity: 0;
  transform: translateX(100%);
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

.showMenuNav {
  display: block;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  // background: white;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  opacity: 1;
  transform: translateX(0%);
  transition-property: transform, opacity;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

    `}</style>
    </div>
  );
}




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Organization({ setIsNavOpen }) {

  return (
    <Menu as="div" classNamspacee="w-full relative inline-block text-left">
      <div className="flex justify-around w-full">
        <Menu.Button className="flex w-full justify-between">
          <p>
            団体について<span className="pl-4 text-xs">-About DSL-</span>
          </p>
          <ChevronDownIcon
            className="block mr-4 h-5 w-5" aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >

        <Menu.Items className=" right-0 mt-2 origin-top-right focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  href="/organization/about"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  団体概要<span className="pl-4 text-xs">-About us-</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  href="/organization/members"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  運営メンバー<span className="pl-4 text-xs">-Core members-</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export function Contract({ setIsNavOpen }) {
  return (
    <Menu as="div" classNamspacee="w-full relative inline-block text-left">
      <div className="flex justify-around w-full">
        <Menu.Button className="flex w-full justify-between">
          <p>
            お問合せ<span className="pl-4 text-xs">-Contacts-</span>
          </p>
          <ChevronDownIcon
            className="block mr-4 h-5 w-5" aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >

        <Menu.Items className=" right-0 mt-2 origin-top-right focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  href="/contacts/register"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  入会申請<span className="pl-4 text-xs">-Register to DSL-</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}