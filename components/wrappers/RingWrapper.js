import React from 'react'
import PropTypes from 'prop-types'

const ringFocusColors = {
  blueGray: 'focus-within:ring-blue-gray-200',
  gray: 'focus-within:ring-gray-200',
  brown: 'focus-within:ring-brown-200',
  deepOrange: 'focus-within:ring-deep-orange-200',
  orange: 'focus-within:ring-orange-200',
  amber: 'focus-within:ring-amber-200',
  yellow: 'focus-within:ring-yellow-200',
  lime: 'focus-within:ring-lime-200',
  lightGreen: 'focus-within:ring-light-green-200',
  green: 'focus-within:ring-green-200',
  teal: 'focus-within:ring-teal-200',
  cyan: 'focus-within:ring-cyan-200',
  lightBlue: 'focus-within:ring-light-blue-200',
  blue: 'focus-within:ring-blue-200',
  indigo: 'focus-within:ring-indigo-200',
  deepPurple: 'focus-within:ring-deep-purple-200',
  purple: 'focus-within:ring-purple-200',
  pink: 'focus-within:ring-pink-200',
  red: 'focus-within:ring-red-200',
};
export default function RingWrapper ({ children, color, ...props }) {
  // const classByColor = color ? `focus-within:ring-${color}` : ''

  return (
    <div
      {...props}
      className={`
        focus-within:ring-2
        focus-within:outline-none
        ${ringFocusColors[color] ?? ''}
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
