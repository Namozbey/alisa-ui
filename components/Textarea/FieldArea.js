import InputWrapper from "../wrappers/InputWrapper";
import RingWrapper from "../wrappers/RingWrapper";
import PropTypes from 'prop-types'

export default function FieldArea ({
  placeholder,
  disabled,
  id,
  size,
  status,
  type,
  value,
  onChange,
  width,
  ...props
}) {

  return (
    <RingWrapper>
      <InputWrapper>
        <textarea
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='outline-none w-full px-2 py-1'
          style={{ height: size * 25 }}
          {...props}
        />
        {disabled ? (
          <div className="absolute inset-0 bg-white opacity-60 cursor-not-allowed" />
        ) : (
          <></>
        )}
      </InputWrapper>
    </RingWrapper>
  )
}

FieldArea.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  size: PropTypes.number,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['success', 'error', 'info', 'none']),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

FieldArea.defaultProps = {
  placeholder: undefined,
  size: 3,
  disabled: false,
  id: undefined,
  status: 'none',
  type: 'text',
  value: undefined,
  onChange: () => {},
  width: 'auto',
}
