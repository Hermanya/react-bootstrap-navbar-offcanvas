import React from 'react'
import ReactDOM from 'react-dom'
import NavbarOffcanvas from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavbarOffcanvas />, div)
})
