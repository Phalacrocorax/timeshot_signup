import React from "react";

// layout for this page
import Admin from "layouts/Admin.js";

class Item extends React.Component {
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
        {/* Page content */}
        <div>
            Item
        </div>
        </>
    );
  }
}

Item.layout = Admin;

export default Item;
