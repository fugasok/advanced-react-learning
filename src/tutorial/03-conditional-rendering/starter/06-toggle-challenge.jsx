import { useState } from "react";

const ToggleChallenge = () => {
	const [value, setValue] = useState(false);

	// const clickHandler = () => {
	// 	if (value) {
	// 		setValue(false);
	// 	}
	// 	setValue(true);
	// };

	return (
		<div>
			<button className="btn" onClick={() => setValue(!value)}>Check value</button>
			{value && <ValueComponent />}
		</div>
	);
};

const ValueComponent = () => {
	return <div className="alert alert-danger">VALUE TRUE</div>;
};

export default ToggleChallenge;
