import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
	const [user, setUser] = useState({ name: "Juhn" });

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<NavbarContext.Provider value={{ user, handleLogout }}>
			<nav className="navbar">
				<h5>Context Api</h5>
				<NavLinks />
			</nav>
		</NavbarContext.Provider>
	);
};
export default Navbar;
