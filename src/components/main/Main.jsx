import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'

const Main = forwardRef(({ children, is, id, ...rest }, ref) => (
  <Box ref={ref} is={is} id={id} role="main" {...rest}>
    {children}
  </Box>
))

Main.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Main.defaultProps = {
  children: undefined,
  id: 'main',
  is: 'main',
}

export default Main
