import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-overlays/lib/Transition'

import createChainedFunction from 'react-bootstrap/lib/utils/createChainedFunction'

const propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  in: PropTypes.bool,

  /**
   * The side used when collapsing, or a function that returns the
   * side
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  side: PropTypes.oneOfType([
    PropTypes.oneOf(['left', 'right']),
    PropTypes.func,
  ])
}

const defaultProps = {
  in: false,

  side: 'right',
}

class Collapse extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleEnter = this.handleEnter.bind(this)
    this.handleExit = this.handleExit.bind(this)
  }

  _side() {
    return typeof this.props.side === 'function'
      ? this.props.side()
      : this.props.side
  }

  /* -- Expanding -- */
  handleEnter(elem) {
    elem.style[this._side()] = '0'
    elem.style.opacity = 1
  }

  /* -- Collapsing -- */
  handleExit(elem) {
    elem.style[this._side()] = '-100px'
    elem.style.opacity = 0
  }

  render() {
    const {
      onEnter, onExit, className, ...props
    } = this.props

    delete props.side

    const handleEnter =
      createChainedFunction(this.handleEnter, onEnter)
    const handleExit =
      createChainedFunction(this.handleExit, onExit)

    const classes = {
      'navbar-offcanvas-left': this._side() === 'left',
      'navbar-offcanvas-right': this._side() === 'right',
    }

    return (
      <Transition
        {...props}
        aria-expanded={props.role ? props.in : null}
        className={classNames(className, classes)}
        enteredClassName="in"
        onEnter={handleEnter}
        onExit={handleExit}
      />
    )
  }
}

Collapse.propTypes = propTypes
Collapse.defaultProps = defaultProps

export default Collapse
