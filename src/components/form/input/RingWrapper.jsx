import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const RingWrapper = forwardRef(({ children, color }) => {
  const classByColor = color ? `focus-within:ring-${color}` : ''

  return (
    <div
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
})

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

export default RingWrapper
