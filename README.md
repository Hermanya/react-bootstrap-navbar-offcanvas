React Bootstrap Off-canvas Navigation
---

[![Build Status](https://travis-ci.org/Hermanya/react-bootstrap-navbar-offcanvas.svg?branch=master)](https://travis-ci.org/Hermanya/react-bootstrap-navbar-offcanvas)
[![codecov](https://codecov.io/gh/Hermanya/react-bootstrap-navbar-offcanvas/branch/master/graph/badge.svg)](https://codecov.io/gh/Hermanya/react-bootstrap-navbar-offcanvas)
[![Greenkeeper badge](https://badges.greenkeeper.io/Hermanya/react-bootstrap-navbar-offcanvas.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/react-bootstrap-navbar-offcanvas.svg)](https://badge.fury.io/js/react-bootstrap-navbar-offcanvas)

![React Bootstrap Off-canvas Navigation demo](https://media.giphy.com/media/3o6fJgIj5Mb3b2hoBO/giphy.gif)

**[Demo](https://hermanya.github.io/react-bootstrap-navbar-offcanvas/)** | `npm install react-bootstrap-navbar-offcanvas`

[Inspiration](https://getbootstrap.com/docs/4.0/examples/offcanvas/)

[Awesome React Bootstrap components](https://github.com/Hermanya/awesome-react-bootstrap-components)

## Usage
```jsx
import NavbarOffcanvas from 'react-bootstrap-navbar-offcanvas'
import { /* everything else */ } from 'react-bootstrap'

<Navbar collapseOnSelect staticTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href={repo}>Off-canvas Navbar</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <NavbarOffcanvas side="left">
    <Nav>
      <NavItem active>Exhibit A</NavItem>
      <NavDropdown title="Github" id="basic-nav-dropdown">
        <MenuItem href={repo}>Code</MenuItem>
        <MenuItem href={repo + '/issues'}>Issues</MenuItem>
        <MenuItem>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Navbar.Text pullRight>
      I am responsive!
    </Navbar.Text>
    <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>
    </Navbar.Form>
  </NavbarOffcanvas>
</Navbar>
```
