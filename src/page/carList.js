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
			.get("https://laagbe.com/car-info/api/post/read.php")
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
			return <li>{mycar.title}</li>;
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
