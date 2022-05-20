import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <i className="fas fa-robot"></i> Gas Station Bot
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <a
                  href="https://ceypetco.gov.lk/marketing-sales/"
                  target="_blank"
                  className="mr-3 cursor-pointer">
                  <i className="fas fa-question-circle"></i> CEYPETCO
                </a>
                <a
                  href="https://www.lankaioc.com/price-list/"
                  target="_blank"
                  className="mr-3 cursor-pointer">
                  <i className="fas fa-question-circle"></i> LANKA IOC
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
