import React, { useState } from 'react'
import Image from 'next/image'
import { client } from 'libs/client'
import Title from '@/components/atoms/Title'
import PageTitle from '@/components/atoms/PageTitle'
import Members from '@/components/P-organization/Members'

export default function index({ members }) {

  return (
    <main className="flex flex-col items-center">
      <div className="w-[95%] sm:w-11/12 lg:w-4/5 m-auto base-layout rounded-t-3xl space-y-2 bg-blue-950/80 text-white mt-32">
        <PageTitle title="運営メンバー" subtitle="団体概要" />
        <div className="w-full flex flex-col space-y-8">
          {/* <Title text="組織図" /> */}
          <Title text="メンバー"/>
          <Members members={members}/>
          </div>
        </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'members',
  })

  return {
    props: {
      members: data.contents,
    },
  }
}
