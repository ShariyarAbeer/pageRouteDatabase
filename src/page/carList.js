import React, { Component } from "react";
import axios from "axios";

class Carlist extends Component {
	constructor() {
		super();

		this.state = {
			mydata: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://restcountries.eu/rest/v2/all")
			.then((response) => {
				this.setState({ mydata: response.data });
			})
			.catch((error) => {
				console.log(error.data);
			});
	}

	render() {
		const mycar = this.state.mydata;
		const carModel = mycar.map((mycar) => {
			return <li>{mycar.name}</li>;
		});

		return (
			<div>
				<h1>Car List</h1>
				<ul>{carModel}</ul>
			</div>
		);
	}
}

export default Carlist;
