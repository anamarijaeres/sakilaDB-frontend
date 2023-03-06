import React from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements";



const Navbar = () => {
    return (
      <>
        <Nav >
          <NavMenu>
            <div>
              <NavLink to="/home" activeStyle>
                Home 
              </NavLink>
            </div>
            <div>
              <NavLink to="/actors" activeStyle>
                Actors
              </NavLink>
            </div>
            <div>
              <NavLink to="/films" activeStyle>
                Films
              </NavLink>
            </div>
          </NavMenu>
        </Nav>
      </>
    );
  };
    
  export default Navbar