import { Person } from "./Person";
import { useState } from "react";
import { people } from "../../../data";

const List = () => {
	const [users, setUsers] = useState(people);

	return (
		<section className="container">
			<ul className="users">
				{users.map((person) => {
					console.log(person);
					return <Person key={person.id} {...person} />;
				})}
			</ul>
		</section>
	);
};
export default List;
