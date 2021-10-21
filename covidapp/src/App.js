import React from "react";
import Style from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchdata } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchData = await fetchdata();
    this.setState({ data: fetchData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={Style.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
