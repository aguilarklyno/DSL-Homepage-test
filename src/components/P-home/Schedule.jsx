import React from 'react'

export default function Schedule() {
  return (
    <div className='layout-contents'>
      <div className='flex flex-col justify-center items-center w-full bg-white rounded-2xl mb-16 space-y-4 py-4'>
      {/* <Tag
        bg="bg-yellow-300 my-8"
        text="EVENTS"
      /> */}
      <h1 className='text-3xl font-semibold'>
        イベント日程
      </h1>
        <div className='bg-gray-300 h-_Section-md w-11/12'>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showDate=1&showPrint=0&showTabs=0&showCalendars=1&showTz=0&hl=en&src=NTU4YWRmZjY2NDY3MmU5N2QxMjNhYzNiYjg0ZjVjN2NjOGU3YjMyZWE5ZDk5M2UxYTVmM2YzYzY1YzQyMmZjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
          className='w-full h-full'
          frameBorder="0">
        </iframe>
        </div>
      </div>
    </div>
  )
}