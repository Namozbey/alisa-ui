import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import RingWrapper from '../wrappers/RingWrapper'
import colors from '../../assets/colors'

// const lightGray = colors.bordercolor

const stylesBySize = (size) => {
  switch (size) {
    case 'large': return { control: '8px', valueContainer: '-1px 8px', clearIndicator: '0 8px', dropdownIndicator: 8 }
    case 'middle': return { control: '4px 8px', valueContainer: '-1px 4px', clearIndicator: '0 8px', dropdownIndicator: 8 }
    case 'small': return { control: '0px 4px', valueContainer: '-1px 4px', clearIndicator: '0 4px', dropdownIndicator: 4 }
    default: return { control: '4px 8px', valueContainer: '-1px 4px', clearIndicator: '0 8px', dropdownIndicator: 8 }
  }
}

export default function Select ({
  status,
  size,
  color,
  searchable,
  clearable,
  multible,
  isRtl,
  loading,
  disabled,
  options,
  value,
  defaultValue,
  styles,
  onChange,
  className,
  classNamePrefix,
  style,
  autoFocus,
  backspaceRemovesValue,
  blurInputOnSelect,
  ...props
}) {
  const placeholderColor = colors.gray['400']
  const primaryColor = colors?.[color]?.['600'] ?? colors.primary
  const primaryLightColor = colors?.[color]?.['100'] ?? colors.blue['100']
  const borderColor = colors?.[color]?.[400] ?? colors.bordercolor

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#fff",
      borderRadius: 6,
      minHeight: 20,
      padding: stylesBySize(size).control,
      borderColor: state.isFocused ? primaryColor : borderColor,
      boxShadow: null,
      "&:hover": {
        borderColor: primaryColor
      }
    }),
    valueContainer: (base, state) => ({
      ...base,
      padding: 0,
      margin: stylesBySize(size).valueContainer,
      gap: 4
    }),
    singleValue: (base, state) => ({
      ...base,
      margin: 0,
    }),
    input: (base, state) => ({
      ...base,
      padding: 0,
      margin: 0
    }),
    multiValue: (base, state) => ({
      ...base,
      margin: 0
    }),
    multiValueLabel: (base, state) => ({
      ...base,
      padding: '0 6px',
      borderRight: state.isRtl ? 0 : '1px solid #333333',
      borderLeft: state.isRtl ? '1px solid #333333' : 0,
      borderTopRightRadius: state.isRtl ? 'auto' : 0,
      borderBottomRightRadius: state.isRtl ? 'auto' : 0,
      borderTopLeftRadius: state.isRtl ? 0 : 'auto',
      borderBottomLeftRadius: state.isRtl ? 0 : 'auto',
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      '&:hover': {
        color: '#000',
        backgroundColor: 'unset'
      }
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      margin: 0
    }),
    clearIndicator: (base, state) => ({
      ...base,
      padding: stylesBySize(size).clearIndicator,
      cursor: 'pointer',
      "&:hover": {
        color: '#000'
      }
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      padding: 0,
      margin: '-1px 2px',
      marginRight: state.isRtl ? stylesBySize(size).dropdownIndicator : 0,
      marginLeft: state.isRtl ? 0 : stylesBySize(size).dropdownIndicator,
      color: state.isFocused ? primaryColor : '#ccc',
      "&:hover": {
        color: primaryColor
      }
    }),
    placeholder: (base, state) => ({
      ...base,
      margin: 0,
      color: placeholderColor,
    }),
  };

  return (
    <div className={`alisa-select ${className}`} style={style}>
      <RingWrapper color={color}>
        <ReactSelect
          styles={{ ...customStyles, ...styles }}
          autoFocus={autoFocus}
          isSearchable={searchable}
          isClearable={clearable}
          isMulti={multible}
          isRtl={isRtl}
          blurInputOnSelect={blurInputOnSelect}
          isLoading={loading}
          isDisabled={disabled}
          value={value}
          defaultValue={defaultValue}
          options={options}
          onChange={onChange}
          classNamePrefix={classNamePrefix}
          backspaceRemovesValue={backspaceRemovesValue}
          onInputChange={onInputChange}
          {...props}
        />
      </RingWrapper>
    </div>
  )
}

Select.PropTypes = {
  autoFocus: PropTypes.bool,
  backspaceRemovesValue: PropTypes.bool,
  blurInputOnSelect: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  multible: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  isRtl: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
  styles: PropTypes.object,
  style: PropTypes.object,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  color: PropTypes.oneOf(['blueGray', 'gray', 'brown', 'deepOrange', 'orange', 'amber', 'yellow', 'lime', 'lightGreen', 'green', 'teal', 'cyan', 'lightBlue', 'blue', 'indigo', 'deepPurple', 'purple', 'pink', 'red', undefined]),
}

Select.defaultProps = {
  size: 'middle',
  styles: {},
  searchable: false
}
