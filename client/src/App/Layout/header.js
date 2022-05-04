import React from 'react';
import {Nav}from "react-bootstrap";

function Header (){

    return (
        <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Pokedex</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Sign Up/Login</Nav.Link>
        </Nav.Item>
      </Nav>
    )

}

export default Header;