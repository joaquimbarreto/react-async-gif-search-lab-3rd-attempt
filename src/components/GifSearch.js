import React from "react";

const GifSearch = props => {
	return (
		<div>
			<form onSubmit={props.searchedTerm}>
				<input
					type="text"
					placeholder="Find Gifs"
					onChange={props.handleChange}
				/>
			</form>{" "}
		</div>
	);
};

export default GifSearch;
