import React from "react";
import ReactDOM from "react-dom";

class RandomComp extends React.Component {
  state = {
    zmiennaState: null
  };
  handleClick = event => {
    console.log("random drink clik");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(data => {
        this.setState({
          zmiennaState: data
        });
      })
      .catch(err => console.log(err, "error!"));
  };
  render() {
    let randomDrink = null;
    console.log("render randomComp");
    console.log(this.state.zmiennaState);
    if (this.state.zmiennaState !== null) {
      randomDrink = this.state.zmiennaState.drinks.map((el, i) => {
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
        // console.log(quantArr);
        // console.log(indArr);
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
        console.log("el.strDrink" + el.strDrink);
        return (
          <div>
            <h1>Our Final Drink</h1>
            <p>
              Indigiends: <ul>{indAndQuan}</ul>{" "}
            </p>
            <img src={el.strDrinkThumb} />
            <p>Drink Name: {el.strDrink}</p>
            <p>Drink Category: {el.strAlcoholic}</p>
            <p>best Glass: {el.strGlass}</p>
            <p>Instructions: {el.strInstructions}</p>
          </div>
        );
      });
    }
    //   this.setState({
    //     zmiennaState: data.drinks
    //   });

    return (
      <div className="classPadding">
        <div onClick={this.handleClick}>
          RANDOM DRINK
          <div>{randomDrink}</div>
        </div>
      </div>
    );
  }
}

export { RandomComp };
