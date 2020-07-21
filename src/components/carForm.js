import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class CarForm extends Component {
  state = {};
  render() {
    return (
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Car Model and Name"
          ></input>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Car ID Number"
          ></input>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Owner Name"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default CarForm;
