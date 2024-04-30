import React, {Component} from 'react';
import img from '../img/pizza.png';
import './CComponentPosition.css'
import './CComponentCategory.css'
import close from "../img/CloseOr.png";
import { Link } from "react-router-dom";

class CComponentPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Пицца с креветками",
            description: "Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан, 350 г.",
            price: "от 650 Р",
            img: img,
            // link: "https://drive.google.com/file/d/1OoTp0hIftDNHTDBJVjaMF2JYO9pGdeyg/view?usp=sharing"
            shouldShowElem: false
        }

        this.information = this.information.bind(this);
        this.notInformation = this.notInformation.bind(this);
    }

    information(){
        this.setState({
            shouldShowElem: true
        })
    }

    notInformation(){
        this.setState({
            shouldShowElem: false
        })
    }


    render() {
        return (
            <div className='Category'>
                <div className='Category-main'>
                    <div onClick={this.information} className="App-div">
                        <img src={img} alt={img} className="Position-img"/>
                        <h1 className="Position-name">{this.state.name}</h1>
                        <h3 className="Position-description">{this.state.description}</h3>
                        <div className="Position-inline-div">
                            <h2 className="Position-price">{this.state.price}</h2>
                            <button className="Position-button">В корзину</button>
                        </div>
                    </div>
                </div>

                {this.state.shouldShowElem &&
                    <div className='Category-info'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <img src={img} alt={img}/>
                                {/*<h1 className='Orders-map-number'>{this.state.number}</h1>*/}
                                <div>
                                    <div className='Orders-inline'>
                                        <div>
                                            <h1 className="Position-price">{this.state.name}</h1>
                                            <h2 className='Position-description'>{this.state.description}</h2>
                                        </div>
                                        <img onClick={this.notInformation} src={close} alt='close'
                                             className='Orders-map-close'/>
                                    </div>
                                    <button className="Position-button">В корзину</button>
                                </div>

                            </div>

                            {/*<h2 className='Orders-composition'>Курьер уже спешит к вам!</h2>*/}
                            {/*<img src={map} alt='mapK'/>*/}
                        </div>

                    </div>
                }

            </div>

        );
    }
}

export default CComponentPosition;