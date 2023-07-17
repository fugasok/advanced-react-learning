import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
	const [user, setUser] = useState({ name: "Juhn" });

   const handleLogout = () => {
      setUser(null)
   }

	return (
		<nav className="navbar">
         <h5>Context Api</h5>
			<NavLinks user={user} handleLogout={handleLogout}/>
		</nav>
	);
};
export default Navbar;
