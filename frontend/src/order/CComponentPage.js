import React, {Component} from 'react';
import Header from './CComponentHeader';
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'
import { Link } from "react-router-dom";
import img from "../img/pizza.png";
import close from "../img/CloseOr.png";

class CComponentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: '+7 999 999-99-99',
            adres: 'ул. КИМа, д. 1, под. Последний, эт. Последний, кв. 22, код Домофон',
            time: 'побыстрее',
            name: 'С креветками и трюфелями',
            description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, ' +
                'трюфельное масло, черный перец, пармезан.350 г',
            price: 120,
            shouldShowAdres: false,
            shouldShowPlaced: false
        }

        this.handleChangeNum=this.handleChangeNum.bind(this)
        this.showAdres=this.showAdres.bind(this)
        this.notshowAdres=this.notshowAdres.bind(this)
        this.showPlaced=this.showPlaced.bind(this)
    }


    showAdres(){
        this.setState({
            shouldShowAdres: true,
        })
    }

    notshowAdres(){
        this.setState({
            shouldShowAdres: false,
        })
    }

    showPlaced(){
        this.setState({
            shouldShowPlaced: true,
        })
    }

    handleChangeNum(event) {
        this.setState({
            number: event.target.value,
        })
    }

    setAdres(){
        this.setState({
            adres: "Дом",
            shouldShowAdres: false,
        })
    }

    render() {



        return (
            <div className='Order-main'>
                <Header/>
                <div className='Order-div'>
                    <h1 className='Basket-title'>Заказ на доставку</h1>
                    <div className='Order-inline-input'>
                        <div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Имя</h2>
                                <input className='Order-input' value='Иван'/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Номер телефона</h2>
                                {/*<textarea onChange={this.handleChange} name='number' value={this.state.number} className='Order-input-cheng'/>*/}
                                <input onChange={this.handleChangeNum} name='number' value={this.state.number}
                                       className='Order-input-cheng'/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Адрес доставки</h2>
                                <textarea onClick={this.showAdres} name='number' value={this.state.adres} className='Order-input-cheng'/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Время доставки</h2>
                                <input name='number' value={this.state.time} className='Order-input-cheng'/>
                            </div>
                            <div className='Order-inline-input'>
                                <Link to={'/basket'}>
                                    <h2 className='Order-back'>Назад в корзину</h2>
                                </Link>
                                <button onClick={this.showPlaced} className='Order-button'>Оформить заказ</button>
                            </div>
                        </div>
                        <div className='Order-composition'>
                            <h2 className='Order-composition-title'>Состав заказа</h2>
                            <div className='Order-inline-input'>
                            <div>
                                    <h2 className='Order-composition-name'>{this.state.name}</h2>
                                    <h3 className='Order-composition-description'>{this.state.description}</h3>
                                </div>
                                <h2 className='Order-composition-price'>{this.state.price} P</h2>
                            </div>
                            <div className='Order-inline-input'>
                                <div>
                                    <h2 className='Order-composition-name'>{this.state.name}</h2>
                                    <h3 className='Order-composition-description'>{this.state.description}</h3>
                                </div>
                                <h2 className='Order-composition-price'>{this.state.price} P</h2>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Сумма заказа</h2>
                                <h1 className='Order-sum'>{this.state.price} P</h1>
                            </div>
                        </div>
                    </div>


                </div>

                {this.state.shouldShowAdres &&
                    <div className='Orders-map'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <h1 className='Orders-map-number'>Куда доставить?</h1>
                                <img onClick={this.notshowAdres} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <div className='Orders-inline'>
                                <button onClick={this.notshowAdres} className='Order-adres'>Дом</button>
                                <button className='Order-adres'>Родители</button>
                            </div>
                            <div className='Orders-inline'>
                                <button className='Order-adres'>Друзья</button>
                                <button className='Order-adres'>Сестра</button>
                            </div>
                        </div>
                    </div>
                }

                {this.state.shouldShowPlaced &&
                    <div className='Orders-map'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <h1 className='Orders-map-number'>Заказ оформлен</h1>
                            </div>
                            <Link to={'/authorized'}>
                                <button className='Order-button'>Назад в магазин</button>
                            </Link>
                        </div>
                    </div>
                }

                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;