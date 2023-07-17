import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
	const { user, handleLogout } = useContext(NavbarContext);
	return (
		<div className="user-container">
			{user ? (
				<>
					<p>Hello {user.name.toUpperCase()}</p>
					<button className="btn" type="button" onClick={handleLogout}>
						Logout
					</button>
				</>
			) : (
				<p>Please Login</p>
			)}
		</div>
	);
};
export default UserContainer;
