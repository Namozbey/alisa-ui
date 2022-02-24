import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Flex } from '../primitives'

const CardFooter = forwardRef(({ is, children, ...rest }, ref) => (
  <Flex is={is} reverse items="end" {...rest} ref={ref}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        rounded: 'none',
      }),
    )}
  </Flex>
))

CardFooter.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

CardFooter.defaultProps = {
  is: 'div',
  children: undefined,
}

export default CardFooter
