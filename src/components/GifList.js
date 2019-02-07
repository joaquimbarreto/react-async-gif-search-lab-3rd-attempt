import React from "react";
import GifCard from "./GifCard";

const GifList = props => {
	return (
		<div>
			{props.gifs.map(gif => (
				<GifCard gif={gif} />
			))}
		</div>
	);
};

export default GifList;
