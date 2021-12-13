import React from 'react'
import PropTypes from 'prop-types'

export default function InputWrapper ({ status, width, children, ...props }) {
  const classesByStatus = (status) => {
    switch (status) {
      case 'success': return 'border-success'
      case 'error': return 'border-danger'
      case 'info': return 'border-info'
      default: return 'border-bordercolor focus-within:border-primary hover:border-primary'
    }
  }

  return (
    <div
      {...props}
      className={`
        flex
        w-full
        border
        relative
        bg-white
        transition
        rounded-md
        overflow-hidden
        ${classesByStatus(status)}
      `}
      style={{ width }}
    >
      {children}
    </div>
  )
}

InputWrapper.propTypes = {
  children: PropTypes.node,
  status: PropTypes.oneOf(['success', 'error', 'info']),
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

InputWrapper.defaultProps = {
  children: undefined,
  status: undefined,
  width: 'auto',
}
