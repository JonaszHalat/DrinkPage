import React from "react";
import ReactDOM from "react-dom";
import { CoctailList } from "./coctailList.jsx";

class FinalCoctail extends React.Component {

    render() {
        if (this.props.finalDrink === null) {
            return null;
        }
        console.log('finalcoctail' + this.props.finalDrink);
       
        

        const finalDrinkBlock = this.props.finalDrink.drinks.map((el, i) => {
            const indArr = [];
            for (let i=1; i<16; i++){
                const name = `strIngredient${i}`;
                if(el[name]){
                    indArr.push(el[name])
                }
                
            }
            console.log(indArr);
            return (
                <div> 
                    <h1>Our Final Drink</h1>
                    <p>Indigiends: {}</p>
                    <img src={el.strDrinkThumb}/>
                    <p>Drink Name: {el.strDrink}</p>
                    <p>Drink Category: {el.strAlcoholic}</p>
                    <p>best Glass: {el.strGlass}</p>
                    <p>Instructions: {el.strInstructions}</p>
                </div>
            )
        });


        return (
            <div>FINAL COCTAIL
                <div>{ finalDrinkBlock }</div>
            </div>
        )
    }
}

export { FinalCoctail };