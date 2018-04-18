import React from "react";
import ReactDOM from "react-dom";
import { FinalCoctail } from "./finalCoctail.jsx";

class CoctailList extends React.Component {
  state = {
    finalCoctail: null
  };

  handleClickDrinkRecipe = event => {
    let drinkRecipeId = event.currentTarget.dataset.id;
    // console.log(drinkRecipeId);
    // console.log(event.target.innerText);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkRecipeId}`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(data => {
        console.log(data);
        this.setState({
          finalCoctail: data
        });
      })
      .catch(err => console.log(err, "error!"));
  };

  render() {
    if (this.props.drinksFromData === null) {
      return null;
    }
    // console.log(this.props.drinksFromData);
    let drinksList = this.props.drinksFromData.drinks.map(el => {
      //   return console.log(el.strDrink);
      return (
        <div
          style={{ width: "100px", height: "100px", 
          backgroundImage: `url(${el.strDrinkThumb})`, 
          backgroundSize: "contain",
          textAlign: "auto"}}
          className="floatLeft imageMargin"
          data-id={el.idDrink}
          onClick={this.handleClickDrinkRecipe}

        >
          <p >{el.strDrink}</p>
          {/* <img className="width" src={el.strDrinkThumb} /> */}
        </div>
      );
    });
    return (
      <div>
        <FinalCoctail finalDrink={this.state.finalCoctail} />
        <div>{drinksList}</div>
      </div>
    );
  }
}

export { CoctailList };
