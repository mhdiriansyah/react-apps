import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Ryan Pace</h1>
        <Footer/>
      </div>
    );
  }
}

export default App;
