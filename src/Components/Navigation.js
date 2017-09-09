import React from "react";

import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

class Navigation extends React.Component {
	render() {
		return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right/>
          <NavbarBrand href="/"><h1 className="logo"> How to Draw</h1></NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Drawings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Inspiration</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      )
	}
}

export default Navigation;