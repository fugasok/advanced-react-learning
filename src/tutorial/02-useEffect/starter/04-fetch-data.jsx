import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const users = await response.json();
				setUsers(users);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<h1>Fetch data example</h1>
			<h3>Github users</h3>
			<ul className="users">
				{users.map((user) => {

					return (
						<li key={user.id}>
							<img src={user.avatar_url} alt={user.login} />
							<span>
								<h4>{user.login}</h4>
								<a href={user.html_url}>Profile</a>
							</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};
export default FetchData;
