import React, {Component} from 'react';
import Header from '../mainPage/CComponentMainPageHeader'
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'
import { Link } from "react-router-dom";
import img from "../img/pizza.png";
import close from "../img/CloseOr.png";

class CComponentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Иван',
            number: '+7 999 999-99-99',
            adres: 'ул. КИМа, д. 1, под. Последний, эт. Последний, кв. 22, код Домофон',
            email: 'dcu79kjnoi@ya.ru',
            bdate: new Date(3600 * 24 * 1000),
            shouldShowNewAdres: false,
            show: false
        }

        this.handleChangeNum=this.handleChangeNum.bind(this)
        this.handleChangeName=this.handleChangeName.bind(this)
        this.handleChangeBdate=this.handleChangeBdate.bind(this)
        this.showAdres=this.showAdres.bind(this)
        this.notshowAdres=this.notshowAdres.bind(this)
        this.sHow=this.sHow.bind(this)
    }



    handleChangeNum(event) {
        this.setState({
            number: event.target.value,
        })
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        })
    }

    sHow(){
        this.setState({
            show: true,
            shouldShowAdres: false,
        })
    }

    handleChangeBdate(event) {
        this.setState({
            bdate: event.target.value,
        })
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


    render() {
        return (
            <div className='Profile-main'>
                <Header/>
                <div className='Profile-div'>
                    <h1 className='Profile-title'>Личные данные</h1>
                    <div className='Profile-inline-input'>
                        <div>
                            <div>
                                <h2 className='Profile-text-input'>Имя</h2>
                                <input onChange={this.handleChangeName} className='Profile-input-cheng'
                                       value={this.state.name}/>
                            </div>
                            <div>
                                <h2 className='Profile-text-input'>Email</h2>
                                <input className='Profile-input' value={this.state.email}/>
                            </div>
                            <div>
                                <h2 className='Profile-text-input'>День рождения</h2>
                                <input onChange={this.handleChangeBdate} className='Profile-input-cheng'
                                       value={this.state.bdate} type='date'/>
                            </div>
                            <div>
                                <h2 className='Profile-text-input'>Номер телефона</h2>
                                <input onChange={this.handleChangeNum} className='Profile-input-cheng'
                                       value={this.state.number} type="tel"
                                       required
                                       pattern="[9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}"/>
                            </div>
                            <div className='Profile-inline-input'>
                                <Link to={'/'}>
                                    <button className='Profile-button-gray'>Выйти</button>
                                </Link>
                                <Link to={'/orders'}>
                                    <button className='Profile-button'>Заказы</button>
                                </Link>
                            </div>
                            <Link to={'/authorized'}>
                                <h2 className='Profile-text-input'>Назад в магазин</h2>
                            </Link>

                        </div>
                        <div>
                            <h2 className='Profile-text-input'>Ваши адреса</h2>
                            <textarea className='Profile-input-a' value={this.state.adres}/>
                            {this.state.show &&
                                <textarea className='Profile-input-a' value='Улица, Дом, Подъезд, Этаж, Квартира'/>
                            }
                            <button onClick={this.showAdres} className='Profile-button'>Добавить адрес</button>

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
                            <div className='Profile-input-inline'>
                                <input className='Profile-input-ad' value='Улица'/>
                                <input className='Profile-input-ad' value='Дом'/>
                            </div>
                            <div className='Profile-input-inline'>
                                <input className='Profile-input-ad' value='Подъезд'/>
                                <input className='Profile-input-ad' value='Этаж'/>
                                <input className='Profile-input-ad' value='Квартира'/>
                            </div>
                            <input className='Profile-input-ad' value='Название адреса'/>
                            <button onClick={this.sHow} className='Profile-button'>Добавить адрес</button>
                        </div>
                    </div>
                }

                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;