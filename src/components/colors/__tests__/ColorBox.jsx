import React from 'react'
import { shallow } from 'enzyme'

import { ColorBox } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)
  const { color, hex, children } = props
  const wrapper = shallow(
    <ColorBox color={color} hex={hex}>
      {children}
    </ColorBox>,
  )

  return {
    props,
    wrapper,
  }
}

describe('ColorBox', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ color: 'teal-500' })

    expect(wrapper).toMatchSnapshot()
  })
})
