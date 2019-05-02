import React, { Component } from 'react';
import MenuKontak from "./page/MenuKontak";
import MenuProduct from "./page/MenuProduct";
import MenuTentangKami from "./page/MenuTentangKami";
import MenuUtama from "./page/MenuUtama";

const Header = () => {
  return (
    <h2>Ini Halaman Untuk Header</h2>
  );
}

const Footer = () => {
  return (
    <h2>Ini Halaman Untuk Footer</h2>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <ul>
            <MenuUtama/>
            <MenuProduct/>
            <MenuKontak/>
            <MenuTentangKami/>
          </ul>
        <Footer/>
      </div>
    );
  }
}

export default App;
