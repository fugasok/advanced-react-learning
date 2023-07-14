import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
	const [name, setName] = useState("");
	const [users, setUsers] = useState(data);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) return;
		const newUser = { id: users.length + 1, name };
		const updatedUsers = [...users, newUser];
		setUsers(updatedUsers);
		setName("");
		console.log(updatedUsers);
	};

	const removeUser = (id) => {
		const updatedUsers = users.filter((user) => user.id !== id);
		setUsers(updatedUsers);
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<h4>Add User</h4>
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						name
					</label>
					<input
						type="text"
						className="form-input"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-block">
					submit
				</button>
			</form>
			<div
				className="container"
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				{users.map((person) => {
					return (
						<div className="person" key={person.id}>
							<h4>{person.name}</h4>
							<button
								type="button"
								onClick={() => removeUser(person.id)}
							>
								Remove
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default UserChallenge;
