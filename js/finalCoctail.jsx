import React from "react";
import ReactDOM from "react-dom";
import { CoctailList } from "./coctailList.jsx";

class FinalCoctail extends React.Component {
  render() {
    if (this.props.finalDrink === null) {
      return null;
    }
    console.log("finalcoctail" + this.props.finalDrink);

    const finalDrinkBlock = this.props.finalDrink.drinks.map((el, i) => {
      const indArr = [];
      for (let i = 1; i < 16; i++) {
        const name = `strIngredient${i}`;
        if (el[name]) {
          indArr.push(el[name]);
        }
      }
      const quantArr = [];
      for (let i = 1; i < 16; i++) {
        const nameQua = `strMeasure${i}`;
        if (el[nameQua]) {
          quantArr.push(el[nameQua]);
        }
      }
      console.log(quantArr);
      console.log(indArr);
      const indAndQuan = [];

      for (let i = 0; i < quantArr.length; i++) {
        const str = quantArr[i].trim();
        if (str !== "" && str !== " " && str !== null) {
          indAndQuan.push(
            <li>
              {indArr[i]}, {quantArr[i]}
            </li>
          );
        }
      }
      return (
        <div>
          <h4>Drink recipe:</h4>

          {/* <img src={el.strDrinkThumb} /> */}
          <p>
            Ingredients: <ul>{indAndQuan}</ul>
          </p>
          <p>Drink Name: {el.strDrink}</p>
          <p>Drink Category: {el.strAlcoholic}</p>
          <p>best Glass: {el.strGlass}</p>
          <p>Instructions: {el.strInstructions}</p>
        </div>
      );
    });

    return (
      <div>
        Your chosen drink:
        <div>{finalDrinkBlock}</div>
      </div>
    );
  }
}

export { FinalCoctail };
