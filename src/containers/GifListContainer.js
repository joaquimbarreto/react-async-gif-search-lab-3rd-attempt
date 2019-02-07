import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
	state = {
		searchedTerm: "",
		gifs: []
	};

	handleSearchedTerm = event => {
		this.setState({ searchTerm: event.target.value });
	};

	fetchGifs = event => {
		event.preventDefault();
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${
				this.state.searchTerm
			}&api_key=dc6zaTOxFJmzC&rating=g`
		)
			.then(response => response.json())
			.then(data =>
				this.setState({
					gifs: data.data.slice(0, 3)
				})
			);
		console.log(this.state.gifs);
	};

	render() {
		return (
			<div>
				<GifSearch
					searchedTerm={this.fetchGifs}
					handleChange={this.handleSearchedTerm}
				/>
				<GifList gifs={this.state.gifs} />
			</div>
		);
	}
}
