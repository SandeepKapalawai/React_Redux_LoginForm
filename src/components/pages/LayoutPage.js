import React from "react";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ user, logout, fetch }) => (
  <Navbar fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>Welcome {user.fullName}</Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight>
      <NavDropdown id="logout-menu" title={user.fullName}>
        <MenuItem onClick={() => logout(user)}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

const Layout = ({ user, logout, fetch }) => {
  if (!user.role) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header user={user} logout={logout} fetch={fetch} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch({ type: "USER_LOGOUT_REQUESTED", user })
    // fetch: dispatcher(dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
