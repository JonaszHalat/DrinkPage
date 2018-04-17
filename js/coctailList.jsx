import React from "react";
import ReactDOM from "react-dom";

class CoctailList extends React.Component {
  handleClickDrinkRecipe = event => {
    let drinkRecipeId = event.currentTarget.dataset.id;
    console.log(drinkRecipeId);
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
      })
      .catch(err => console.log(err, "error!"));
  };

  render() {
    if (this.props.drinksFromData === null) {
      return null;
    }
    console.log(this.props.drinksFromData);
    let drinksList = this.props.drinksFromData.drinks.map(el => {
      //   return console.log(el.strDrink);
      return (
        <div data-id={el.idDrink} onClick={this.handleClickDrinkRecipe}>
          <h2>{el.strDrink}</h2>
          <img src={el.strDrinkThumb} />
        </div>
      );
    });
    return <div>{drinksList}</div>;
  }
}

export { CoctailList };
