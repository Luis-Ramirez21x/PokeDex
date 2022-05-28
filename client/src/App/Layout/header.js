import React from 'react';
import {Nav, Row}from "react-bootstrap";
import './header.css'

function Header (){

    return (
      <>
      <Row>
        <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/pokemonList">Pokedex</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Sign Up/Login</Nav.Link>
          </Nav.Item>
          <Nav.item>
              <Nav.Link href='/stared-pokemon'>My pokemon</Nav.Link>
          </Nav.item>
        </Nav>
      </Row>
      </>
    )

}

export default Header;