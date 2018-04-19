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
        <div style={{marginBottom: "30px"}}>
          <div className="classFinaleDrink">
            <p>
              Drink Name: {el.strDrink} <br />
              Drink Category: {el.strAlcoholic} <br /> <br/>
            </p>
            <h4>Drink recipe:</h4>
            <p>
              {/* Your chosen drink: <br /> */}

              Ingredients: {indAndQuan} <br />
              Best Glass: {el.strGlass} <br />
              Instructions: {el.strInstructions} <br />
            </p>
          </div>
          <div className="classFinaleDrink">
            <img
              style={{ height: "100%", paddingLeft: "30px" }}
              src={el.strDrinkThumb}
            />
          </div>
        </div>
      );
    });

    return (
      <div>

        <div>{finalDrinkBlock}</div>
      </div>
    );
  }
}

export { FinalCoctail };
