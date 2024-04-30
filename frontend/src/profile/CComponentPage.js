import React, {Component} from 'react';
import Header from '../mainPage/CComponentMainPageHeader'
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'
import { Link } from "react-router-dom";

class CComponentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Иван',
            number: '+7 999 999-99-99',
            adres: 'ул. КИМа, д. 1, под. Последний, эт. Последний, кв. 22, код Домофон',
            email: 'dcu79kjnoi@ya.ru',
            bdate: new Date(3600 * 24 * 1000),
        }

        this.handleChangeNum=this.handleChangeNum.bind(this)
        this.handleChangeName=this.handleChangeName.bind(this)
        this.handleChangeBdate=this.handleChangeBdate.bind(this)
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

    handleChangeBdate(event) {
        this.setState({
            bdate: event.target.value,
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
                                <button className='Profile-button-gray'>Выйти</button>
                                <button className='Profile-button'>Заказы</button>
                            </div>
                        </div>
                        <div>
                            <h2 className='Profile-text-input'>Ваши адреса</h2>
                            <textarea className='Profile-input-a' value={this.state.adres}/>
                            <button className='Profile-button'>Добавить адрес</button>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;