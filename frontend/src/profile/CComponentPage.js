import React, {Component} from 'react';
import Header from '../mainPage/CComponentMainPageHeader'
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'
import { Link } from "react-router-dom";
import img from "../img/pizza.png";
import close from "../img/CloseOr.png";
import axios from 'axios'

class CComponentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            secondName: '',
            address:'',
            street: 'Улица',
            house: 'Дом',
            entrance: 'Подъезд',
            floor: 'Этаж',
            apartment: 'Квартира',
            shouldShowNewAdres: false,
            show: false,
            info: []
        }

        fetch('http://localhost:8000/users/details/', {
            method: 'GET',
            credentials: 'include'})
            .then(response => response.json())
            .then(data =>
                this.setState({ info: data, address: data.address }, () => {
                    console.log('профиль ' + JSON.stringify(this.state.info));
                })
            )

        this.showAdres=this.showAdres.bind(this)
        this.notshowAdres=this.notshowAdres.bind(this)
        // this.getInfo=this.getInfo.bind(this)
        this.setAddress=this.setAddress.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount() {
        // this.getInfo()
    }

    // async getInfo() {
    //     // console.log('Взяли инфо');
    //     // let info = null;
    //     // fetch('http://localhost:8000/users/details/', {
    //     //     method: 'GET',
    //     //     credentials: 'include'})
    //     //     .then(response => response.json())
    //     //     .then(data =>
    //     //         this.setState({ info: data }, () => {
    //     //             console.log('профиль ' + JSON.stringify(this.state.info));
    //     //         })
    //     //     )
    //
    //     // console.log('профиль'+ info)
    // }

    handleChange= event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    async setAddress() {
        window.ym(97428582, 'reachGoal', 'AddAddressButtonClick');
        let address = 'Россия, Воронеж, Артамонова, 34/9'
        // let address = 'ул. ' + this.state.street + ', д. ' + this.state.house + ', под. ' + this.state.entrance + ', эт. ' + this.state.floor + ', кв. ' + this.state.apartment
        console.log('адрес ' + address)
        this.setState({
            address: address
        })

        const logData = new FormData()
        logData.set('address', this.state.address)
        let stat

        console.log(stat)
        const response = await fetch('http://localhost:8000/users/address/', {
            method: 'post',
            body: logData,
            credentials: 'include'
        }).then(function (response) {
            stat = response.status;
        })

        console.log('статус адреса '+stat)

        // fetch('http://localhost:8000/users/details/', {
        //     method: 'GET',
        //     credentials: 'include'})
        //     .then(response => response.json())
        //     .then(data =>
        //         this.setState({ info: data, address: data.address }, () => {
        //             console.log('профиль ' + JSON.stringify(this.state.info));
        //         })
        //     )
        this.notshowAdres()
    }

    showAdres(){
        window.ym(97428582,'reachGoal','AddAddressButtonClick');
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
        const {address, street, house, entrance, floor, apartment} = this.state
        var info = this.state.info

        // console.log('профиль render' + JSON.stringify(this.state.info));

        return (
            <div className='Profile-main'>
                <Header/>
                <div className='Profile-div'>
                    <h1 className='Profile-title'>Личные данные</h1>
                    <div className='Profile-inline-input'>
                        <div>

                            <div>
                                <h2 className='Profile-text-input'>Имя</h2>
                                <input className='Profile-input' value={info.first_name}/>
                            </div>
                            <div>
                                <h2 className='Profile-text-input'>Фамлия</h2>
                                <input className='Profile-input' value={info.last_name}/>
                            </div>
                            <div>
                                <h2 className='Profile-text-input'>Email</h2>
                                <input className='Profile-input' value={info.email}/>
                            </div>

                            <div className='Profile-inline-input'>
                                <Link to={'/'}>
                                    <button onClick={window.ym(97428582, 'reachGoal', 'LogoutButtonClick')}
                                            className='Profile-button-gray'>Выйти
                                    </button>
                                </Link>
                                <Link to={'/orders'}>
                                    <button onClick={window.ym(97428582, 'reachGoal', 'OrdersButtonClick')}
                                            className='Profile-button'>Заказы
                                    </button>
                                </Link>
                            </div>
                            <Link to={'/authorized'}>
                                <h2 className='Profile-text-input'>Назад в магазин</h2>
                            </Link>

                        </div>
                        <div>
                            <div>
                                <h2 className='Profile-text-input'>Адрес доставки</h2>
                                <textarea className='Profile-input' value={this.state.address}/>
                            </div>
                            <button onClick={this.showAdres} className='Profile-button'>Изменить адрес</button>

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
                                <input onChange={this.handleChange} className='Profile-input-ad' value={street} name={'street'}/>
                                <input onChange={this.handleChange} className='Profile-input-ad' value={house} name={'house'}/>
                            </div>
                            <div className='Profile-input-inline'>
                                <input onChange={this.handleChange} className='Profile-input-ad' value={entrance} name={'entrance'}/>
                                <input onChange={this.handleChange} className='Profile-input-ad' value={floor} name={'floor'}/>
                                <input onChange={this.handleChange} className='Profile-input-ad' value={apartment} name={'apartment'}/>
                            </div>

                            <button onClick={this.setAddress} className='Profile-button'>Изменить адрес</button>
                        </div>
                    </div>
                }

                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;