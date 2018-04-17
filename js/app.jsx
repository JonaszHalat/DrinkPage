import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        state = {
            zmiennaState: [],
        }
        render() {
            const ingList = this.state.zmiennaState.map((el, i) => {
                return <li key={i} onClick={this.handleClick}>{el.strIngredient1}</li>;
            })

            // console.log(this.state.zmiennaState);
            return (
                <div>{ingList}</div>
            )
        }
        handleClick = (event) => {
            let choosenIng = event.target.innerText;
            // console.log(event.target.innerText);
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${choosenIng}`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                        console.log('text');
                    } else {
                        throw new Error('Błąd sieci!');
                    }
                })
                .then(drinksFromData => {
                    console.log(drinksFromData);
                })
                .catch(err => console.log(err, 'error!'));

        }
        componentDidMount() {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                        console.log('text');
                    } else {
                        throw new Error('Błąd sieci!');
                    }
                })
                .then(data => {
                    this.setState({
                        zmiennaState: data.drinks,
                    })
                    // console.log(data);
                    // console.log(data.drinks);
                })
                .catch(err => console.log(err, 'error!'));
        }
    }
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById('app')
    );
});