import React from 'react'

const Analytics = ({card}) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="text-blue-500 w-12 text-xl h-12 mb-3 inline-block"
      viewBox="0 0 24 24"
    >
      {card.icon}
      </svg>
      <h2 className="title-font font-medium text-3xl text-gray-900">{card.value}</h2>
      <p className="leading-relaxed">{card.label}</p>
    </div>
  </div>
  )
}

export default Analytics