import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const SizeWrapper = forwardRef(({ size, children }, ref) => {
  const classesBySize = {
    large: 'px-2 py-2',
    middle: 'px-2 py-1',
    small: 'px-1',
  }

  return (
    <div
      ref={ref}
      className={`
        flex
        flex-1
        items-center
        w-auto
        min-w-0
        transition
        ${classesBySize[size]}
      `}
    >
      {children}
    </div>
  )
})

SizeWrapper.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
}

SizeWrapper.defaultProps = {
  children: undefined,
  size: 'middle',
}

export default SizeWrapper
