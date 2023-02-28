import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../state/store";
import { Button, Navbar } from "react-bootstrap";
import { appLogout } from "../state/slices/auth.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import DarkLight from "./DarkLight/DarkLight";
import Logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Weather from "./Weather";

function AppNavbar() {
  const navi = useNavigate();
  const dispatch = useAppDispatch();
  const doLogout = () => {
    dispatch(appLogout("user-secret"));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Weather />
            <Nav className="me-auto">
              <NavLink
                className="navBtn p-2 m-3 border border-white rounded-3"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="navBtn p-2 m-3 border border-white rounded-3"
                to="avukatlar"
              >
                Avukatlar
              </NavLink>

              <NavLink
                className="navBtn p-2 m-3 border border-white rounded-3 "
                to="contact"
              >
                iletişim
              </NavLink>
              <NavLink
                className="navBtn p-2 m-3 border border-white rounded-3 "
                to="chat"
              >
                Chat{" "}
              </NavLink>

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                  Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="m-3"
                  aria-label="Search"
                />
                <Button className="mb-3 mt-3" variant="outline-success">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
              <NavLink
                className="navBtn p-2 m-3 border border-white rounded-3"
                to="profil"
              >
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
              {/* <NavLink to={-1}>Back</NavLink> */}
              <Button
                className="m-3"
                variant="dark"
                onClick={async () => {
                  doLogout();
                  await navi("/");
                }}
              >
                Cikis Yap
              </Button>
              <div className="m-3">
                <DarkLight />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default AppNavbar;

// }
// <button onClick={appLogout}>Çıkış Yap</button>;

{
  /* <img src={Logo} alt="logo" /> */
}

//   const dispatch = useAppDispatch();
//   const doLogout = () => {
//     dispatch(appLogout());
//   };
//   return (
//     <div></div>
//   )
// }
