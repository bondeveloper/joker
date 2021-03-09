import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


// import classes from '../header.css';


const Header: React.FC = () => {

    return (
        <header>
            <nav>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        Joker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/test'>Test</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </header>
    );
};

export default Header;