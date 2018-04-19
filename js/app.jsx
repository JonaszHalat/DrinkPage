import React from "react";
import ReactDOM from "react-dom";
import { CoctailList } from "./coctailList.jsx";
import { FinalCoctail } from "./finalCoctail.jsx";

class App extends React.Component {
  state = {
    zmiennaState: [],
    drinksFromData: null
  };
  render() {
    const ingList = this.state.zmiennaState.map((el, i) => {
      return (
        <li key={i} onClick={this.handleClick}>
          {el.strIngredient1}
        </li>
      );
    });

    // console.log(this.state.zmiennaState);
    return (
      <div>
        <div className="alcoList">
          <ul>{ingList}</ul>
        </div>
        <div>
          <CoctailList drinksFromData={this.state.drinksFromData} />
        </div>
      </div>
    );
  }

  handleClick = event => {
    let choosenIng = event.currentTarget.innerText;
    // console.log(event.target.innerText);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${choosenIng}`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(drinksFromData => {
        this.setState({
          drinksFromData: drinksFromData
        });
      })
      .catch(err => console.log(err, "error!"));
  };
  componentDidMount() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(data => {
        data.drinks.sort((a, b) => {
          a.strIngredient1.localeCompare(b.strIngredient1);
        });

        console.log(data.drinks);
        this.setState({
          zmiennaState: data.drinks.sort((a, b) =>
            a.strIngredient1.localeCompare(b.strIngredient1)
          )
        });
        // console.log(data);
        // console.log(data.drinks);
      })
      .catch(err => console.log(err, "error!"));
  }
}

export { App };
