import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { defaultColors } from '../theme'

const ColorBox = forwardRef(({ color, children }) => {
  const [name, level] = color.split('-')
  const hex = level ? defaultColors[name][level] : defaultColors[name]

  return (
    <div style={{ width: 150 }}>
      <div
        style={{
          height: 50,
          width: '100%',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 5,
          justifyContent: 'center',
        }}
        className={`bg-${color}`}
      >
        {children}
      </div>
      <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
        <div className="text-xs font-medium text-gray-900">{color}</div>
        <div className="text-xs text-gray-500">{hex}</div>
      </div>
    </div>
  )
})

ColorBox.propTypes = {
  /** The color for the cube */
  color: PropTypes.string,
  /** Default empty string "" */
  children: PropTypes.node,
}

ColorBox.defaultProps = {
  color: 'teal-500',
  children: '',
}

export default ColorBox
