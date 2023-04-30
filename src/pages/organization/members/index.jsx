import React, { useState } from 'react'
import { client } from 'libs/client'
import Title from '@/components/atoms/Title'
import PageTitle from '@/components/atoms/PageTitle'
import Members from '@/components/P-organization/Members'

export default function index({ members }) {

  return (
    <main className="flex flex-col items-center">
      <div className="text-gray-900 bg-gray-50 base-layout space-y-8 mt-20 pb-32 w-[90%] sm:w-11/12 lg:w-4/5 rounded-t-3xl border-[1px] border-gray-200 ">
        <PageTitle title="運営メンバー" subtitle="団体概要" />
        <div className="w-full flex flex-col space-y-8 pb-40 text-black">
          {/* <Title text="組織図" /> */}
          <p className='w-4/5 mt-8 m-auto text-black text-xl font-semibold border-l-4 border-gray-500 p-2'>Core Members</p>
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
