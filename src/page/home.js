import React, { Component } from "react";
import Nav from "../components/nav";
import CarForm from "../components/carForm";
import { Card } from "antd";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Car Register"
            bordered={true}
            style={{ width: 600, textAlign: "center", margin: 100 }}
          >
            <CarForm></CarForm>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
