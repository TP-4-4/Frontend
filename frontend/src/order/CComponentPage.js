import React, {Component} from 'react';
import Header from './CComponentHeader';
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'

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
        }

        this.handleChangeNum=this.handleChangeNum.bind(this)
    }

    handleChangeNum(event) {
        this.setState({
            number: event.target.value,
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
                                <textarea name='number' value={this.state.adres} className='Order-input-cheng'/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-text-input'>Время доставки</h2>
                                <input name='number' value={this.state.time} className='Order-input-cheng'/>
                            </div>
                            <div className='Order-inline-input'>
                                <h2 className='Order-back'>Назад в корзину</h2>
                                <button className='Order-button'>Оформить заказ</button>
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

                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;