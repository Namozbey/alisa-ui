import React from 'react'
import PropTypes from 'prop-types'

export default function SizeWrapper ({ size, children, ...props }) {
  const classesBySize = (size) => {
    switch (size) {
      case 'large': return 'px-2 py-2'
      case 'middle': return 'px-2 py-1'
      case 'small': return 'px-1'
      default: return 'px-2 py-1'
    }
  }

  return (
    <div
      {...props}
      className={`
        flex
        flex-1
        items-center
        w-auto
        min-w-0
        transition
        ${classesBySize(size)}
      `}
    >
      {children}
    </div>
  )
}

SizeWrapper.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
}

SizeWrapper.defaultProps = {
  children: undefined,
  size: 'middle',
}
