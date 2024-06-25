import React, {Component} from 'react';
import Footer from '../mainPage/CComponentMainPageFooter'
import Header from "./CComponentHeader";
import './CComponentPage.css'
import cat from '../img/catBasket.png'
import pizza from '../img/pizza.png'
import { Link } from "react-router-dom";
import close from '../img/Close.png'

class CComponentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: pizza,
            name: 'С креветками и трюфелями',
            description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, ' +
                'трюфельное масло, черный перец, пармезан.350 г',
            price: 120,
            number:1
        }
    }
    render() {
        let position = []
        for (let i = 0; i <= 2; i++) {
            position.push(<div>
                    <div className='Basket-pos-inline'>
                        <img src={this.state.img} alt={this.state.img} className='Basket-pos-img'/>
                        <div>
                            <h1 className='Basket-pos-name'>{this.state.name}</h1>
                            <h2 className='Basket-pos-description'>{this.state.description}</h2>
                        </div>
                        <h1 className='Basket-pos-price'>{this.state.price} P</h1>
                        <div className='Basket-number'>
                            <h1 className='Basket-number-text'>+ |</h1>
                            <h1 className='Basket-number-text'>{this.state.number}</h1>
                            <h1 className='Basket-number-text'>| -</h1>
                        </div>
                        <img src={close} alt={close} className='Basket-close'/>
                    </div>
                    <div className='Basket-l'></div>
                </div>
            );
        }
        return (
            <div>
                <Header/>
                <div className='Basket-div'>
                    <h1 className='Basket-title'>Корзина</h1>
                    <div className='Basket-inline'>
                        <img src={cat} alt={cat}/>
                        <div>
                            {position}
                            <div className='Basket-inline'>
                                <Link to={'/'}>
                                    <h2 className='Basket-back'>Вернуться в магазин</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <h1 className='Basket-pos-name'>Для оформления заказа вам необходимо
                                           войти в профиль или зарегистрироваться</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;