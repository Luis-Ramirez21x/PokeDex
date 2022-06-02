import React from 'react';
import {Nav, Row}from "react-bootstrap";
import './header.css'
import Auth from '../Util/auth'

function Header (){
  const token = Auth.loggedIn()


    return (
      <>
      <Row>
        <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/pokemonList">Pokedex</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            {token? (
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
          ) : (
            <Nav.Link href="/login">Login/Signup</Nav.Link>
          )}
            
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