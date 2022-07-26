import React from "react";
import Nav  from "react-bootstrap/Nav";
import {NavItem, NavItemLink, NavTop } from './navbartopStyled';
import Form from 'react-bootstrap/Form';
const Navbar = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="container">
      <NavTop>
      <Nav.Item as={NavItem}>
        <Nav.Link as={NavItemLink} href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as={NavItem}>
        <Nav.Link as={NavItemLink} eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as={NavItem}>
        <Nav.Link as={NavItemLink} eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as={NavItem}> 
        <Nav.Link as={NavItemLink} eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      <Form>
      <Form.Check  
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
    </Form>
      </NavTop>
      </div>
    </Nav>
 
  );
};

export default Navbar;
