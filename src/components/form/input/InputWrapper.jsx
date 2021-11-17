import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const InputWrapper = forwardRef(({ status, width, children }, ref) => {
  const classesByStatus = {
    success: 'border-success',
    error: 'border-danger',
    info: 'border-info',
    none: 'border-bordercolor focus-within:border-primary hover:border-primary',
  }

  return (
    <div
      ref={ref}
      className={`
        bg-white
        flex
        relative
        overflow-hidden	
        rounded-md
        w-full
        border-2
        transition
        ${classesByStatus[status]}
      `}
      style={{ width }}
    >
      {children}
    </div>
  )
})

InputWrapper.propTypes = {
  children: PropTypes.node,
  status: PropTypes.oneOf(['success', 'error', 'info', 'none']),
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

InputWrapper.defaultProps = {
  children: undefined,
  status: 'none',
  width: 'auto',
}

export default InputWrapper
