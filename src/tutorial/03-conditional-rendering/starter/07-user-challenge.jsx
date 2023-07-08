import { useState } from "react";

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const login = () => {
		setUser({ name: "Peter" });
	};

	return !user ? (
		<div>
			<h4>Please login</h4>
			<button className="btn" onClick={login}>
				Login
			</button>
		</div>
	) : (
		<div>
			<UserInfo user={user} />
			<button className="btn" onClick={() => setUser(null)}>
				logout
			</button>
		</div>
	);
};

const UserInfo = ({ user }) => {
	return (
		<div>
			<h4>
				Hello there <i>{user.name}</i>
			</h4>
		</div>
	);
};

export default UserChallenge;
