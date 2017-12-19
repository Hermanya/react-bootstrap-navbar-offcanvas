import React from 'react'
import PropTypes from 'prop-types'

import Offcanvas from './Offcanvas.js'
import { prefix } from 'react-bootstrap/lib/utils/bootstrapUtils'

import './offcanvas.css'

const contextTypes = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
  }),
}

class NavbarOffcanvas extends React.Component {
  render() {
    const { children, ...props } = this.props
    const navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' }

    const bsClassName = prefix(navbarProps, 'offcanvas')

    return (
      <Offcanvas in={navbarProps.expanded} {...props}>
        <div className={bsClassName}>
          {children}
        </div>
      </Offcanvas>
    )
  }
}

NavbarOffcanvas.contextTypes = contextTypes

export default NavbarOffcanvas
