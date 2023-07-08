import { useEffect, useState } from "react";

const CleanupFunction = () => {
	const [value, setValue] = useState(false);

	return (
		<div>
			<button className="btn" onClick={() => setValue(!value)}>
				toggle component
			</button>
			{value && <NewComponent />}
		</div>
	);
};

const NewComponent = () => {
	useEffect(() => {
		const someFunc = () => {};
		window.addEventListener("scroll", someFunc);
    return ()=> window.removeEventListener('scroll', someFunc)
	}, []);

	return <h4 className="alert alert-danger">Toggled</h4>;
};

export default CleanupFunction;
