import React from "react";
// node.js library that concatenates classes (strings)
// import classnames from "classnames";
// javascipt plugin for creating charts
// import Chart from "chart.js";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
// import {
//   chartOptions,
//   parseOptions,
//   chartExample1,
//   chartExample2,
// } from "variables/charts.js";

import Header from "components/Headers/Header.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
    };
    // if (window.Chart) {
      // parseOptions(Chart, chartOptions());
    // }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <div>
          Dashboard
        </div>
        </>
    );
  }
}

Dashboard.layout = Admin;

export default Dashboard;
