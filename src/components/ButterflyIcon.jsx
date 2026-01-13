import React from 'react'

const ButterflyIcon = ({ size = 40, className = '' }) => {
  return (
    <img
      src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f98b.gif"
      alt="animated butterfly emoji"
      width={size}
      height={size}
      className={className}
    />
  )
}

export default ButterflyIcon
