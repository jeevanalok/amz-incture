import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import { Search, ShoppingCart, User, Sun, Moon, Menu } from "react-feather";

import logo from "../assets/logo.png";
import darklogo from "../assets/dark-logo.png";

function AppNavbar() {
  const { cart, cartQuantity } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();

    // Close the offcanvas menu
    handleCloseOffcanvas();

    // Navigate to search results page
    navigate("/search", {
      state: {
        searchTerm,
      },
    });
  };

  // Handle input change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        expand="lg"
        className="amazon-navbar fixed-top mb-2 py-2"
      >
        <Container fluid>
          {/* Mobile Menu Toggle */}
          <button
            className="d-lg-none btn btn-outline-light me-2"
            onClick={handleShowOffcanvas}
          >
            <Menu color={theme==="light"?"black":"white"} />
          </button>

          {/* Logo */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="logo d-flex align-items-center me-auto me-lg-3"
          >
            <img
              src={theme === "light" ? logo : darklogo}
              alt="logo"
              className="d-inline-block align-top logo-image"
              style={{
                maxWidth: "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>

          {/* Search Bar (Responsive) */}
          <Form
            className="d-flex search-bar flex-grow-1 mx-3 d-none d-lg-flex"
            onSubmit={handleSearch}
          >
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button className="search-btn" type="submit">
              <Search />
            </button>
          </Form>

          {/* Right Side Navigation */}
          <Nav className="ms-auto align-items-center d-none d-lg-flex">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="account-dropdown"
                className="nav-link"
              >
                <User /> Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">
                  Sign In
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/cart" className="cart-link">
              <div className="cart-icon-container">
                <ShoppingCart />
                <span className="cart-count">{cartQuantity()}</span>
              </div>
              Cart
            </Nav.Link>

            <Nav.Link onClick={() => toggleTheme()} className="theme-toggle">
              {theme === "light" ? <Moon /> : <Sun />}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        className={`mobile-menu ${theme}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Mobile Search */}
          <Form className="d-flex search-bar mb-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button className="search-btn" type="submit">
              <Search />
            </button>
          </Form>

          {/* Mobile Navigation Links */}
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={handleCloseOffcanvas}>
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" onClick={handleCloseOffcanvas}>
              Cart ({cartQuantity()} items)
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                toggleTheme();
                handleCloseOffcanvas();
              }}
            >
              {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppNavbar;
