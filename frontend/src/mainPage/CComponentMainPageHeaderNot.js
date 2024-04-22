import React, {Component} from 'react';
import logo from '../img/logo.png';
import img from "../img/pizza.png";
import cat1 from "../img/cat1.png";
import './CComponentMainPageHeaderNot.css'
import './CComponentMainPageNot.css'

class CComponentMainPageHeaderNot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // name: "Пицца с креветками",
            // description: "Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан, 350 г.",
            // price: "от 650 Р",
            logo: logo,
            basket: 1

        }
    }

    render() {
        return (
            <div>
                <table className='Header-table'>
                    <tr>
                        <td>
                            <div className='Header-inline-div'>
                                <img src={logo} alt={logo} className="Header-logo"/>
                                <div className='Header-div'>
                                    <div className='Header-inline-div'>
                                        <h2 className='Header-h11'>Доставка пиццы</h2>
                                        <h2 className='Header-h12'>Воронеж</h2>
                                    </div>
                                    <h3 className='Header-h3'>Время доставки от 31 мин</h3>
                                </div>
                            </div>
                            <div className='Header-inline-categoty'>
                                <h2 className='Header-category'>Пицца</h2>
                                <h2 className='Header-category'>Роллы</h2>
                                <h2 className='Header-category'>Напитки</h2>
                            </div>
                        </td>
                        <td>
                            <img src={cat1} alt={cat1}/>
                        </td>
                        <td className='Header-inline-b'>
                            <h2 className='Header-category'>Контакты</h2>
                            <h2 className='Header-h13'>Войти</h2>
                            <button className='Header-button'>Корзина | {this.state.basket}</button>
                        </td>
                    </tr>
                </table>

            </div>


        );
    }
}

export default CComponentMainPageHeaderNot;