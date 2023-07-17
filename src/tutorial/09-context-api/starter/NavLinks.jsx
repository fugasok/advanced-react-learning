import UserContainer from "./UserContainer";

const NavLinks = ({ user, handleLogout }) => {
	return (
		<div className="nav-container">
         <ul className="nav-links">
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
         </ul>
			<UserContainer user={user} handleLogout={handleLogout} />
		</div>
	);
};
export default NavLinks;
