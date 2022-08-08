import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar>
      <React.Fragment key=".0">
        <Navbar.Brand href="">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            AFV
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="/customers">
            Customers
          </Navbar.Link>
          <Navbar.Link href="/funds">Funds</Navbar.Link>
          <Navbar.Link href="/history">Trade History</Navbar.Link>
        </Navbar.Collapse>
      </React.Fragment>
    </Navbar>
  );
};

export default Header;
