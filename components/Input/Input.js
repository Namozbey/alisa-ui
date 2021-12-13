import React from 'react'
import PropTypes from 'prop-types'
import SizeWrapper from '../wrappers/SizeWrapper'
import RingWrapper from '../wrappers/RingWrapper'
import InputWrapper from '../wrappers/InputWrapper'

const inputClassBySize = size => {
  const initial = 'flex-1 min-w-0 outline-none -my-px bg-transparent '
  const sizes = {
    large: 'mx-2',
    middle: 'mx-1',
    small: 'mx-1',
  }

  return initial + sizes[size]
}

const colorsByStatus = (status) => {
  switch (status) {
    case 'success': return 'green-300'
    case 'error': return 'red-300'
    default: return ''
  }
}
export default function Input ({
  id,
  addonAfter,
  addonBefore,
  disabled,
  value,
  onChange,
  size,
  prefix,
  placeholder,
  suffix,
  status,
  type,
  width,
  ...props
}) {
  const prefSuffex = element =>
    element ? (
      <div className="bg-lightgray-5 px-4 flex items-center h-auto">
        <div className="text-midgray-2 text-base -my-px">{element}</div>
      </div>
    ) : (
      <></>
    )

  return (
    <div className="alisa-input">
      <RingWrapper color={colorsByStatus(status)}>
        <InputWrapper status={status} width={width}>
          {prefSuffex(prefix)}
          <SizeWrapper size={size}>
            {addonBefore}
            <input
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={inputClassBySize(size)}
              {...props}
            />
            {addonAfter}
          </SizeWrapper>
          {prefSuffex(suffix)}
          {disabled ? (
            <div className="absolute inset-0 bg-white opacity-60 cursor-not-allowed" />
          ) : (
            <></>
          )}
        </InputWrapper>
      </RingWrapper>
    </div>
  )
}

Input.propTypes = {
  addonAfter: PropTypes.node,
  addonBefore: PropTypes.node,
  // allowClear: PropTypes.bool,
  // bordered: PropTypes.bool,
  // defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  // maxLength: PropTypes.number,
  prefix: PropTypes.node,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  status: PropTypes.oneOf(['success', 'error', 'info', 'none']),
  suffix: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  // onPressEnter: PropTypes.func,
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
  addonAfter: undefined,
  addonBefore: undefined,
  prefix: undefined,
  suffix: undefined,
  placeholder: undefined,
  // allowClear: false,
  // bordered: true,
  disabled: false,
  id: undefined,
  size: 'middle',
  status: 'none',
  type: 'text',
  value: undefined,
  onChange: () => {},
  width: 'auto',
}
