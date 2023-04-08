import Link from 'next/link'
import React from 'react'

export default function ButtonFill(props) {
  return (
    <Link
      className={`${props.bg} px-4 py-2 rounded-full `}
      href={props.link}
    >
      {props.text}
    </Link>
  )
}