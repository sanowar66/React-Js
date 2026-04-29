import { NavbarItem } from "./NavbarItem";

  export const Navbar = () => {
  return (
    <div class="nave-bar">
      <div>
        <p>Logo Here</p>
      </div>
      <div>
        <ul>
          <NavbarItem title="Login"/>
          <NavbarItem title="Contact"/>
          <NavbarItem title="Porduct"/>
          <NavbarItem title="Service"/>
          <NavbarItem title="Community"/>
        </ul>
      </div>
    </div>
  );
};


