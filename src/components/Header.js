import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Header.defaultProps = {
  title: "DefaultTitle",
  dropdown: false,
  // render: true
};

Header.propTypes = {
  title: PropTypes.string,
  dropdown: PropTypes.bool,
};

// export default Header