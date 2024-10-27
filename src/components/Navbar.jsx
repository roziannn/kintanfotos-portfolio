import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded className="mt-3 mb-10 lg:mb-24">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-bold">K I N T A N F O T O S</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" className="text-lg">
          Home
        </NavbarLink>
        <NavbarLink href="/work" className="text-lg">
          Work Gallery
        </NavbarLink>
        <NavbarLink href="/about" className="text-lg">
          About
        </NavbarLink>
        <NavbarLink href="/business" className="text-lg">
          Business
        </NavbarLink>
        <NavbarLink href="/contact" className="text-lg">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
