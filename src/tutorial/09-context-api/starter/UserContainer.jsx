const UserContainer = ({ user, handleLogout }) => {
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
