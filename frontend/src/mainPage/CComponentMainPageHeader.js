import React, {Component} from 'react';
import logo from '../img/logo.png';
import img from "../img/pizza.png";
import cat1 from "../img/cat1.png";
import { Link } from "react-router-dom";
import './CComponentMainPageHeaderNot.css'

class CComponentMainPageHeaderNot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logo,
            basket: 1

        }
    }

    basket(){
        window.location='../basket/CComponentPage.js'
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
                        <td>
                            <Link to={'/profile'}>
                                <h1 className='Header-h14'>Профиль</h1>
                            </Link>
                            <div className='Header-inline-c'>
                                <h2 className='Header-category'>Контакты</h2>
                                <Link to={'/'}>
                                    <h2 className='Header-h13'>Выйти</h2>
                                </Link>

                                <Link to={'/basket'}>
                                    <button className='Header-button'>Корзина | {this.state.basket}</button>
                                </Link>
                            </div>

                        </td>
                    </tr>
                </table>

            </div>


        );
    }
}

export default CComponentMainPageHeaderNot;