import React from 'react'
import { Navbar, NavDropdown, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>PRONTO-MED</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/pacientes">
                                <Nav.Link>
                                    <i className='fas fa-users'></i> Pacientes
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/agendamentos">
                                <Nav.Link>
                                    <i className='fas fa-calendar-alt'></i> Agendamentos
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Sidebar;
