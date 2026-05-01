import { NavbarItem } from "./NavbarItem";
import './Navbar.css'
  export const Navbar = () => {
    const isAuthenticated=true;
  return (
    <div class="nave-bar">
      <div>
        <p>Logo Here</p>
      </div>
      <div>
        <ul className="menu-item">
          <NavbarItem title="Contact"/>
          <NavbarItem title="Porduct"/>
          <NavbarItem title="Service"/>
          <NavbarItem title="Community"/>
         {isAuthenticated ? <NavbarItem title="Logout" />  : <NavbarItem title="Login" />
  }
        </ul>
      </div>
    </div>
  );
};


