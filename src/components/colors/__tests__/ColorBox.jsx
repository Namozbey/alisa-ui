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
  it('renders matching snapshot for color level 50', () => {
    const { wrapper } = setup({ color: 'teal-50' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 100', () => {
    const { wrapper } = setup({ color: 'teal-100' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 200', () => {
    const { wrapper } = setup({ color: 'teal-200' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 300', () => {
    const { wrapper } = setup({ color: 'teal-300' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 400', () => {
    const { wrapper } = setup({ color: 'teal-400' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 500', () => {
    const { wrapper } = setup({ color: 'teal-500' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 600', () => {
    const { wrapper } = setup({ color: 'teal-600' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 700', () => {
    const { wrapper } = setup({ color: 'teal-700' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 800', () => {
    const { wrapper } = setup({ color: 'teal-800' })

    expect(wrapper).toMatchSnapshot()
  })

  it('renders matching snapshot for color level 900', () => {
    const { wrapper } = setup({ color: 'teal-900' })

    expect(wrapper).toMatchSnapshot()
  })
})
