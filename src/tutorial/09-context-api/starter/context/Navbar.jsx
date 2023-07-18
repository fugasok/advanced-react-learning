import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => useContext(NavbarContext)


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
