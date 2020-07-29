import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Machanic Koi?
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Car From <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/carlist">
                  Car All
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
