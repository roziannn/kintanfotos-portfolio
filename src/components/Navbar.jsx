import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded className="mt-5 mb-16">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-bold">K I N T A N F O T O S</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-lg">
          Work Gallery
        </NavbarLink>
        <NavbarLink href="#" className="text-lg">
          About
        </NavbarLink>
        <NavbarLink href="#" className="text-lg">
          Business
        </NavbarLink>
        <NavbarLink href="#" className="text-lg">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
