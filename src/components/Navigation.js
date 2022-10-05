// for navigation.js

import React from 'react';
import { Nav, NavLink} from 'reactstrap';

 
const Navigation = () => {
    return (
       
       <Nav>
        <NavLink href="/">Home</NavLink> 
        <NavLink href="/login">Login</NavLink> 
      </Nav>


    );
}
 
export default Navigation;