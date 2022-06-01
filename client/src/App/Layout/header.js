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
            <Nav.Link href="/login">Sign Up/Login</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
              <Nav.Link href='/stared-pokemon'>My pokemon</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      </>
    )

}

export default Header;