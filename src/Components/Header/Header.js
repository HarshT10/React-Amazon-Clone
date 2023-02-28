import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Navbar bg="dark" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchRoundedIcon className="header__searchIcon" />
          </div>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={!user && "/login"} className="header__link">
                <div
                  onClick={handleAuthentication}
                  className="header__optionUser"
                >
                  <span className="header__optionUserLineOne">
                    Hello, {user ? user.email : "Guest"}
                  </span>
                  <span className="header__optionUserLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={!user ? "/login" : "/orders"} className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span>
                </div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <Link className="header__link" to="/checkout">
                <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__basketCount">{cart?.length}</span>
                </div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
