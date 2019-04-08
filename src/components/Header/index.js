import React from 'react';
import {Link} from 'react-router-dom'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


const Header = ({user, logout}) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <Link to="/" className="navbar-brand">
            <img
              src="http://static1.squarespace.com/static/5515baf4e4b096a00145f536/t/57546b9b7da24f3644866b44/1526064075531/"
              alt=""
              height="50"
            />
          </Link>
          <NavbarToggler/>
          <Collapse isOpen navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              {!user.id &&
                <NavItem>
                  <Link className="nav-link" to="/register">Sign up</Link>
                </NavItem>
              }
              <NavItem>
                {user.id ? <Link className="nav-link" to="/profile">Profile</Link> :
                  <Link className="nav-link" to="/login">Login</Link>}
              </NavItem>
              {user.id && <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => logout()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
