import React from "react";
import ToDo from "./ToDo";

import Header from "./Header";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Add a todo item 😃</h2>
        <ToDo />
        <Footer />
      </div>
    );
  }
}
