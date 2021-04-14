import React from 'react'

export default function MajgLogo({ className, size }) {
  return (
    <svg
      className={`fill-current ${className}`}
      width={size}
      height={size}
      viewBox="0 0 12 11"
    >
      <g
        transform="translate(0,-0.5) scale(1,1.09090909)"
        fill="#000000"
        stroke="none"
      >
        <path d="M0 0,L2 0,L6 8,L10 0,L12 0,L12 11,L10 11,L10 3,L6 11,L2 3,L2 11,L0 11,Z" />
        <path d="M3 7,L4 9,L3 9,Z" />
        <path d="M3 10,L4.5 10,L5 11,L3 11,Z" />
        <path d="M2.8 1,L8.5 1,L6 6,L5 4,L4.3 4,Z" />
        <path d="M9.7 9,L9 9,L9 10,L7.5 10,L9.7 5,Z" />
      </g>
    </svg>
  )
}
