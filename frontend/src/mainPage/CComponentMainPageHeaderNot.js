import React, {Component} from 'react';
import logo from '../img/logo.png';
import img from "../img/pizza.png";
import cat1 from "../img/cat1.png";
import './CComponentMainPageHeaderNot.css'
import './CComponentMainPageNot.css'
import './CComponentPosition.css'
import './CComponentCategory.css'
import '../profile/CComponentPage.css'
import { Link } from 'react-router-dom'
import CComponentPage from "../basket/CComponentPage";
import close from "../img/CloseOr.png";


class CComponentMainPageHeaderNot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logo,
            basket: 1,
            shouldShowLogin: false,
            shouldShowRegistration: false,
            shouldShowKod: false,
            email: 'kdunaev4@ya.ru',
            password: '1234',
            kod: '1111'
        }

        this.login=this.login.bind(this);
        this.notlogin=this.notlogin.bind(this);
        this.registration=this.registration.bind(this);
        this.notregistration=this.notregistration.bind(this);
        this.showKod=this.showKod.bind(this);
        this.notshowKod=this.notshowKod.bind(this);
    }

    login(){
        this.setState({
            shouldShowLogin: true,
        })
    }

    notlogin(){
        this.setState({
            shouldShowLogin: false,
        })
    }

    registration(){
        this.setState({
            shouldShowRegistration : true,
            shouldShowLogin: false
        })
    }

    notregistration(){
        this.setState({
            shouldShowRegistration : false,
        })
    }

    showKod(){
        this.setState({
            shouldShowKod: true,
            shouldShowRegistration : false,
        })
    }

    notshowKod(){
        this.setState({
            shouldShowKod: false,
        })
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
                            <h2  onClick={this.login} className='Header-h13'>Войти</h2>
                            <Link to={'/basket'}>
                                <button className='Header-button'>Корзина | {this.state.basket}</button>
                            </Link>
                        </td>
                    </tr>
                </table>

                {this.state.shouldShowLogin &&
                    <div className='Orders-map'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <h1 className='Orders-map-number'>Вход на сайт</h1>
                                <img onClick={this.notlogin} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Email</h2>
                                <input className='Profile-input-cheng'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Пароль</h2>
                                <input className='Profile-input-cheng'/>
                            </div>
                            <div className='Orders-inline'>
                                <Link to={'/authorized'}>
                                    <button className='Header-button'>Вход</button>
                                </Link>
                                <button onClick={this.registration} className='Header-button'>Регистрация</button>
                            </div>
                        </div>
                    </div>
                }

                {this.state.shouldShowRegistration &&
                    <div className='Orders-map'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <h1 className='Orders-map-number'>Вход на сайт</h1>
                                <img onClick={this.notregistration} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Email</h2>
                                <input className='Profile-input-cheng'/>
                            </div>
                            <div className='Orders-inline'>
                                <button onClick={this.showKod} className='Header-button'>Выслать код</button>
                            </div>
                        </div>
                    </div>
                }

                {this.state.shouldShowKod &&
                    <div className='Orders-map'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <h1 className='Orders-map-number'>Вход на сайт</h1>
                                <img onClick={this.notshow} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Email</h2>
                                <input className='Profile-input-cheng'/>
                            </div>
                            <div className='Orders-inline'>
                                <Link to={'/authorized'}>
                                    <button className='Header-button'>Регистрация</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }


            </div>


        );
    }
}

export default CComponentMainPageHeaderNot;