import React, {Component} from 'react';
import Header from './CComponentHeader';
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'
import { Link } from "react-router-dom";
import getId from '../App'

class CComponentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Иван',
            email: 'dcu79kjnoi@ya.ru',
            secondName: 'Пупки',
            address:'ул. КИМа, д. 1, под. Последний, эт. Последний, кв. 22, код Домофон',

            time: 'побыстрее',
            namepos: 'С креветками и трюфелями',
            description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, ' +
                'трюфельное масло, черный перец, пармезан.350 г',
            price: 120,
            shouldShowPlaced: false
        }

        this.showPlaced=this.showPlaced.bind(this)
        //запросы
        this.getInfo=this.getInfo.bind(this)
        this.getBacket=this.getBacket.bind(this)
    }

    componentDidMount() {
        this.getInfo()
        this.getBacket()
    }

    getInfo(){
        console.log('Взяли инфо');

        fetch('http://127.0.0.1:8000/users/details/')
            .then(response => response.json())
            .then(data =>
                    console.log('Data:', data)
                // this.setState({
                //     categoriesList: data
                // })
            )
    }

    getBacket(){
        console.log('Взяли корзину');

        fetch('http://127.0.0.1:8000/cart/api/')
            .then(response => response.json())
            .then(data =>
                // console.log('Data:', data)
                this.setState({
                    basketList: data
                })
            )
    }



    showPlaced(){
        window.ym(97428582,'reachGoal','PlaceOrderButtonClick');
        this.setState({
            shouldShowPlaced: true,
        })
        console.log('попытка вязть id '+getId())
        //добавить пост запрос на офорление заказа
    }



    render() {
        let position = []
        for (let i = 0; i <= 2; i++) {
            position.push(<div className='Order-inline-input'>
                    <div>
                        <h2 className='Order-composition-name'>{this.state.namepos}</h2>
                        <h3 className='Order-composition-description'>{this.state.description}</h3>
                    </div>
                    <h2 className='Order-composition-price'>{this.state.price} P</h2>
                </div>
            );
        }


        return (
            <div className='Order-main'>
                <Header/>
                <div className='Order-div'>
                    <h1 className='Basket-title'>Заказ на доставку</h1>
                    <div className='Order-inline-input'>
                        <div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Имя</h2>
                                <input className='Order-input' value={this.state.name}/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Фамилия</h2>
                                <input className='Order-input' value={this.state.secondName}/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Email</h2>
                                <input className='Order-input' value={this.state.email}/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Адрес доставки</h2>
                                <textarea value={this.state.address}
                                          className='Order-input'/>
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
                            {position}
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Сумма заказа</h2>
                                <h1 className='Order-sum'>{this.state.price} P</h1>
                            </div>
                        </div>
                    </div>
                </div>


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