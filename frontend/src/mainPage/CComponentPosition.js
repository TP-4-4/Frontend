import React, {Component} from 'react';
import img from '../img/pizza.png';
import './CComponentPosition.css'

class CComponentPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Пицца с креветками",
            description: "Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан, 350 г.",
            price: "от 650 Р",
            img: img,
            link: "https://drive.google.com/file/d/1OoTp0hIftDNHTDBJVjaMF2JYO9pGdeyg/view?usp=sharing"

        }
    }


    render() {
        return (
            <div className="App-div">
                {/*<img*/}
                {/*    src={this.state.link}*/}
                {/*    alt="new"*/}
                {/*    className="Position-img"*/}
                {/*/>*/}
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