/**
 *
 * MealtrackerNavbar
 *
 */

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MealtrackerNavbar({ fullName }) {
  return <div>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">MyMealtracker</NavbarBrand>
    <NavbarToggler onClick={() => {}} />
    <Collapse isOpen={true} navbar>
      <Nav className="ml-auto" navbar>
        {/* <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem> */}
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {fullName}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              My Profile
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
</div>;
}

MealtrackerNavbar.propTypes = {};

export default MealtrackerNavbar;
