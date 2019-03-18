import React from "react";
import { Navbar } from "react-bootstrap";

const NavBars = () => {
  return (
    <>
      <Navbar bg="light" expand="right">
        <Navbar.Brand href="/launchpad">Missions</Navbar.Brand>
        <Navbar.Brand href="/missions">Launchpad</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBars;
