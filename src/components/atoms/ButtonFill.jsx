import Link from 'next/link'
import React from 'react'

export default function ButtonFill(props) {
  return (
    <Link
      className={`${props.bg} px-3 py-1 rounded-full`}
      href={props.link}
    >
      {props.text}
    </Link>
  )
}