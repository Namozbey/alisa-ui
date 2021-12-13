import React from 'react'
import PropTypes from 'prop-types'

export default function RingWrapper ({ children, color, ...props }) {
  const classByColor = color ? `focus-within:ring-${color}` : ''

  return (
    <div
      {...props}
      className={`
        focus-within:ring-2
        focus-within:outline-none
        ${classByColor}
        rounded-md
        transition
      `}
    >
      {children}
    </div>
  )
}

RingWrapper.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  // status: PropTypes.oneOf(['success', 'error', 'info', 'none']),
}

RingWrapper.defaultProps = {
  children: '',
  color: undefined,
  // status: 'none',
}
