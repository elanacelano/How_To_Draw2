import React, { Component } from "react";
import helpers from "./utils/helpers";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class homepg extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />

          <NavbarBrand href="/"> How To Draw </NavbarBrand>
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Tutorials</NavLink>
              </NavItem>
            </Collapse>          
          </Nav>
      </div>
    );
  }
}

export default homepg;