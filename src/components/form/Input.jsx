import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SizeWrapper from './input/SizeWrapper'
import RingWrapper from './input/RingWrapper'
import InputWrapper from './input/InputWrapper'

const inputClassBySize = size => {
  const initial = 'flex-1 min-w-0 outline-none -my-0.5 bg-transparent '
  const sizes = {
    large: 'mx-2',
    middle: 'mx-1',
    small: 'mx-1',
  }

  return initial + sizes[size]
}

const colorsByStatus = {
  success: 'green-300',
  error: 'red-300',
}

// const search = (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
//       fill="#B0BABF"
//     />
//   </svg>
// )

// const close = (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
//       fill="#B0BABF"
//     />
//   </svg>
// )

class Input extends PureComponent {
  render() {
    const {
      id,
      addonAfter,
      addonBefore,
      value,
      onChange,
      size,
      prefix,
      placeholder,
      suffix,
      status,
      type,
      width,
    } = this.props

    const prefSuffex = element =>
      element ? (
        <div className="bg-lightgray-5 px-4 flex items-center h-auto">
          <div className="text-midgray-2 text-base -my-0.5">{element}</div>
        </div>
      ) : (
        <></>
      )

    return (
      <div className="alisa-input">
        <RingWrapper color={colorsByStatus[status]}>
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
              />
              {addonAfter}
            </SizeWrapper>
            {prefSuffex(suffix)}
          </InputWrapper>
        </RingWrapper>
      </div>
    )
  }
}

Input.propTypes = {
  addonAfter: PropTypes.node,
  addonBefore: PropTypes.node,
  // allowClear: PropTypes.bool,
  // bordered: PropTypes.bool,
  // defaultValue: PropTypes.string,
  // disabled: PropTypes.bool,
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
  // disabled: false,
  id: undefined,
  size: 'middle',
  status: 'none',
  type: 'text',
  value: undefined,
  onChange: () => {},
  width: 'auto',
}

export default Input
