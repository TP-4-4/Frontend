import React, {Component} from 'react';
import img from './pizza.png';
import './CComponentPosition.css'

class CComponentPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Пицца с креветками",
            description: "Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан, 350 г.",
            price: "от 650 Р",
            img: img
        }
    }

    render() {
        return (
            <div className="App-div">
                <img src={img} alt={img} className="Position-img"/>
                <h1 className="Position-name">{this.state.name}</h1>
                <h3 className="Position-description">{this.state.description}</h3>
                <div className="Position-inline-div">
                    <h2 className="Position-price">{this.state.price}</h2>
                    <button className="Position-button">В корзину</button>
                </div>

            </div>
        );
    }
}

export default CComponentPosition;