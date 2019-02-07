import React from "react";
import { Card, Image } from "semantic-ui-react";

const GifCard = props => {
	return (
		<Card>
			<Image src={props.gif.images.original.url} size="small" />
			<Card.Content>
				<Card.Header> Title: {props.gif.title}</Card.Header>
				<Card.Description>
					{" "}
					Image Height: {props.gif.images.original.height}px
				</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default GifCard;
