/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown"
    };
  }

  handleClick = () => {
    if (this.state.classes === "dropdown show-dropdown") {
      this.setState({ classes: "dropdown show-dropdown show" });
    } else {
      this.setState({ classes: "dropdown show-dropdown" });
    }
  };

  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.bgColor === "primary"
                      ? "badge filter badge-primary active"
                      : "badge filter badge-primary"
                  }
                  data-color="primary"
                  onClick={() => {
                    this.props.handleBgClick("primary");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-info active"
                      : "badge filter badge-info"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleBgClick("info");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-success active"
                      : "badge filter badge-success"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleBgClick("success");
                  }}
                />{" "}
              </div>
            </li>
            <li className="adjustments-line text-center color-change">
              <span className="color-label">LIGHT MODE</span>{" "}
              <span
                className="badge light-badge mr-2"
                onClick={() => this.props.handleDarkModeClick("light")}
              />{" "}
              <span
                className="badge dark-badge ml-2"
                onClick={() => this.props.handleDarkModeClick("dark")}
              />{" "}
              <span className="color-label">DARK MODE</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
