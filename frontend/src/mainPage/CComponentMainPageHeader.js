import React, {Component} from 'react';
import logo from '../img/logo.png';
// import img from "../img/pizza.png";
import cat1 from "../img/cat1.png";
import { Link } from "react-router-dom";
import './CComponentMainPageHeaderNot.css'
import getId from '../App.js'

class CComponentMainPageHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logo,
            basket: 1,
            categoriesList:[]

        }

        this.getCatigories=this.getCatigories.bind(this);
        this.basketAction=this.basketAction.bind(this);
    }

    componentDidMount() {
        this.getCatigories()
        this.getBasket()
        let id = getId();
        console.log('id: '+id);
    }

    basketAction(){
        window.ym(97428582,'reachGoal','BasketButtonClick')
        let id = getId();
        console.log('id: '+id);
    }

    getBasket(){
        console.log('Взяли количество в корзине');

        fetch('http://127.0.0.1:8000/shop/api/categories/')
            .then(response => response.json())
            .then(data =>
                // console.log('Data:', data)
                this.setState({
                    // basket: data
                    basket: '1'
                })
            )

    }

    getCatigories(){
        console.log('Взяли категории');

        fetch('http://localhost:8000/shop/api/categories/', {
            method: 'GET',
            credentials: 'include'})
            .then(response => response.json())
            .then(data =>
                // console.log('Data:', data)
                this.setState({
                    categoriesList: data
                })
            )
    }

    render() {
        var categories = this.state.categoriesList

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
                                {categories.map(function (category, id) {
                                    return (
                                        <div key={id}>
                                            <h2 className='Header-category'>{category.name}</h2>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </td>
                        <td>
                            <img src={cat1} alt={cat1}/>
                        </td>
                        <td>
                            <Link to={'/profile'}>
                                <h1 onClick={window.ym(97428582, 'reachGoal', 'ProfileButtonClick')}
                                    className='Header-h14'>Профиль</h1>
                            </Link>
                            <div className='Header-inline-c'>
                                <h2 className='Header-category'>Контакты</h2>
                                <Link to={'/'}>
                                    <h2 onClick={window.ym(97428582,'reachGoal','LogoutButtonClick')} className='Header-h13'>Выйти</h2>
                                </Link>

                                <Link to={'/basket'}>
                                    <button onClick={this.basketAction} className='Header-button'>Корзина | {this.state.basket}</button>
                                </Link>
                            </div>

                        </td>
                    </tr>
                </table>

            </div>


        );
    }
}

export default CComponentMainPageHeader;