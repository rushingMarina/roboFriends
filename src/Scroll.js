import React from 'react';

const Scroll = (props) => {
	return (

		<div style={{overflow: 'hidden', overflowY: 'scroll', border: '5px solid pink', height: '525px'}}>
			{props.children}
		</div>

	);
};

export default Scroll;