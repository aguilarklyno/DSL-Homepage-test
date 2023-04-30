import React from 'react'

export default function Title(props) {
  return (
    <div className={`w-4/5 mt-8 m-auto text-gray-50 text-xl font-semibold border-l-4 border-gray-500 p-2`}>
      {props.text}
    </div>
  )
}