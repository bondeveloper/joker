import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import brand from '../../shared/assets/images/favicon-32x32.png';

const Header: React.FC = () => {

    return (
        <header>
            <nav>
                <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <Image
                            src={ brand }
                            width='30'
                            height='30'
                            className='d-inline-block aligh-top'
                            alt='Joker logo'
                            roundedCircle
                        />
                        &nbsp;
                        Joker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </header>
    );
};

export default Header;