import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class CarForm extends Component {
	constructor() {
		super();
		this.state = {
			postData: "",
			postResult: "",
		};
	}

	onChangeHandler = (event) => {
		var myData = event.target.value;
		this.setState({ postData: myData });
	};

	onClickHandler = () => {
		axios
			.post("", this.state.postData)
			.then((response) => {
				this.setState({ postResult: response.data });
				alert(this.state.postResult);
			})
			.catch((error) => {
				alert("Something went wrong");
			});
	};

	render() {
		return (
			// <form>
			//   <div class="form-group">
			//     <input
			//       type="text"
			//       class="form-control"
			//       id="exampleInputEmail1"
			//       placeholder="Car Model and Name"
			//     ></input>
			//   </div>
			//   <div class="form-group">
			//     <input
			//       type="text"
			//       class="form-control"
			//       id="exampleInputEmail1"
			//       placeholder="Car ID Number"
			//     ></input>
			//   </div>
			//   <div class="form-group">
			//     <input
			//       type="text"
			//       class="form-control"
			//       id="exampleInputEmail1"
			//       placeholder="Owner Name"
			//     ></input>
			//   </div>
			//   <button type="submit" class="btn btn-primary">
			//     Submit
			//   </button>
			// </form>

			<div>
				<input onChange={this.onChangeHandler} type="text" />
				<button onClick={this.onClickHandler}>Send</button>
			</div>
		);
	}
}

export default CarForm;
