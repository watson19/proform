import React from 'react'
export function Button({ className='', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center bg-teal-700 text-white hover:bg-teal-800 px-3 py-2 rounded-xl text-sm font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
