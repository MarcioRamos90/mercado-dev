import React, { Component } from "react";
import HeaderHome from "./Header";
import AnuncioHome from "./AnuncioHome";
import Footer from "./Footer";
import LinkCategoria from "./LinkCategoria";
import base from "./base";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
      anuncios: []
    };

    base.bindToState("categorias", {
      context: this,
      state: "categorias"
    });
    base.bindToState("anuncios", {
      context: this,
      state: "anuncios",
      queries: {
        limitToLast: 3
      }
    });
  }

  render() {
    let index = 0;
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Últimos Anúncios</h3>
          <div className="row">
            {this.state.anuncios.map((anuncio, indice) => (
              <AnuncioHome anuncio={anuncio} key={indice} />
            ))}
          </div>
          <h1>Categorias</h1>
          <div className="row">
            {this.state.categorias.map((cat, indice) => [
              <LinkCategoria categoria={cat} ket={indice} />,
              ++index % 4 === 0 && <div ket={"c" + indice} className="w-100" />
            ])}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
