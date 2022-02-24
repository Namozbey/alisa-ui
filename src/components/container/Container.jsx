import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

const Container = forwardRef(
  ({ theme, is, children, leftAlign, padding, ...rest }, ref) => (
    <Box
      ref={ref}
      is={is}
      m={!leftAlign ? { x: 'auto' } : undefined}
      p={padding ? { x: theme.spacing.md } : undefined}
      container
      {...rest}
    >
      {children}
    </Box>
  ),
)

Container.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  leftAlign: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

Container.defaultProps = {
  is: 'div',
  children: undefined,
  leftAlign: false,
  padding: false,
}

export { Container as component }
export default withTheme(Container)
