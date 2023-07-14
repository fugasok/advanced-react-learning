import avatar from '../../../assets/default-avatar.svg'
import React from "react";
export function Person({ name, nickName='default ', images }) {
	const img = images?.[0]?.small?.url || avatar;
	return (
		<li>
			<img src={img} alt={name} />
			<h4>{name}</h4>
			<span>Nickname: {nickName}</span>
		</li>
	);
}
