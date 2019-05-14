import React from 'react';

//using destructuring inside the props breakets
const Card = ({name, email, id})  => {
	return (
		<div className="tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robot pic" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;