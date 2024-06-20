import React, {Component} from 'react';
import logo from '../img/logo.png';
import cat1 from "../img/cat1.png";
import './CComponentMainPageHeaderNot.css'
import './CComponentMainPageNot.css'
import '../profile/CComponentPage.css'
import {Link} from 'react-router-dom'
import close from "../img/CloseOr.png";
import axios from 'axios'


class CComponentMainPageHeaderNot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logo,
            basket: 1,
            shouldShowLogin: false,
            shouldShowRegistration: false,
            shouldShowKod: false,
            email: '',
            password: '',
            name: '',
            secondName: '',
            address:'',
            kod: '1111',
            veryBed: false,
            linkLogin: '/',
            categoriesList:[]
        }

        this.login=this.login.bind(this);
        this.notlogin=this.notlogin.bind(this);
        this.registration=this.registration.bind(this);
        this.notregistration=this.notregistration.bind(this);
        this.showKod=this.showKod.bind(this);
        this.notshowKod=this.notshowKod.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.getCatigories=this.getCatigories.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
        this.changeHandlerLogin=this.changeHandlerLogin.bind(this);
        this.changeHandlerRegistration=this.changeHandlerRegistration.bind(this);
        this.checkRegistration=this.checkRegistration.bind(this);
    }



    componentDidMount() {
        this.getCatigories()
    }

    getCatigories(){
        console.log('Взяли категории');



        fetch('http://127.0.0.1:8000/shop/api/categories/')
            .then(response => response.json())
            .then(data =>
                // console.log('Data:', data)
                this.setState({
                    categoriesList: data
                })
            )
    }

    handleChange= event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    changeHandlerLogin = event =>{
        // event.preventDefault();
        window.ym(97428582,'reachGoal','LPButtonClick')
        // console.log(this.state);
        this.checkLogin()
    }

    checkLogin = async () =>{
        const logData = new FormData()
        logData.set('email', this.state.email)
        logData.set('password', this.state.password)
        let stat

        //axios.post('http://127.0.0.1:8000/users/login/', {
            //     'email': this.state.email,
            //     'password': this.state.password
            // }).then((res) => {
            //     // console.log(res.status)
            //     this.state.stat=res.status
            //
            //
            // })
        console.log(stat)
        const response = await fetch('http://127.0.0.1:8000/users/login/', {
            method: 'post',
            body: logData
        }).then(function (response) {
            stat = response.status;
        })
        console.log('statys '+stat);
        if (stat===200){
            this.setState({
                veryBed: false,
                linkLogin: '/authorized'
            })
        } else {
            this.setState({
                veryBed: true
            })
        }
    }

    changeHandlerRegistration = event =>{
        // event.preventDefault();
        window.ym(97428582,'reachGoal','RegistrationDoneButtonClick')
        // console.log(this.state);
        this.checkRegistration()
    }

    checkRegistration = async () =>{
        const logData = new FormData()
        logData.set('email', this.state.email)
        logData.set('password', this.state.password)
        logData.set('first_name', this.state.name)
        logData.set('last_name', this.state.secondName)
        logData.set('address', this.state.address)

        let stat
        const response = await fetch('http://127.0.0.1:8000/users/registration/', {
            method: 'post',
            body: logData
        }).then(function (response) {
            stat = response.status;
        })
        console.log('statys reg'+stat);
        if (stat===200){
            this.setState({
                veryBed: false,
                linkLogin: '/authorized'
            })
        } else {
            this.setState({
                veryBed: true
            })
        }

    }


    login() {
        window.ym(97428582,'reachGoal','LoginButtonClick');
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
        window.ym(97428582,'reachGoal','RegistrationButtonCkick');
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
        window.ym(97428582,'reachGoal','CodeRequestButtonClick');
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
        var categories = this.state.categoriesList
        const {email, password, name, secondName, address} = this.state
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
                                            <div key={id} >
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
                        <td className='Header-inline-b'>
                            <h2 className='Header-category'>Контакты</h2>
                            <h2  onClick={this.login} className='Header-h13'>Войти</h2>
                            {/*<button onClick={window.ym(97428582,'reachGoal','BasketButtonClick')} className='Header-button'>Корзина | {this.state.basket}</button>*/}
                            <Link to={'/basketNot'}>
                                <button onClick={window.ym(97428582,'reachGoal','BasketButtonClick')} className='Header-button'>Корзина | {this.state.basket}</button>
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
                                <input onChange={this.handleChange} name='email' className='Header-input' value={email}/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Пароль</h2>
                                <input onChange={this.handleChange} name='password' className='Header-input' value={password}/>
                            </div>
                            {this.state.veryBed &&
                                <h2 className='Orders-composition'>Данные не верны</h2>
                            }
                            <div className='Header-inline-div'>
                                <Link to={this.state.linkLogin} >
                                    <div>
                                        <button onClick={this.changeHandlerLogin} className='Header-button'>Вход</button>
                                    </div>
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
                                <img onClick={this.notregistration} src={close} alt='close'
                                     className='Orders-map-close'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Email</h2>
                                <input onChange={this.handleChange} name='email' value={email}
                                       className='Header-input'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Пароль</h2>
                                <input onChange={this.handleChange} name='password' value={password}
                                       className='Header-input'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Имя</h2>
                                <input onChange={this.handleChange} name='name' value={name}
                                       className='Header-input'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Фамилия</h2>
                                <input onChange={this.handleChange} name='secondName' value={secondName}
                                       className='Header-input'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Адрес</h2>
                                <input onChange={this.handleChange} name='address' value={address}
                                       className='Header-input'/>
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
                                <img onClick={this.notshowKod} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Email</h2>
                                <input onChange={this.handleChange} value={this.state.email} className='Header-input'/>
                            </div>
                            <div className='Orders-inline'>
                                <h2 className='Orders-composition'>Код</h2>
                                <input className='Header-input'/>
                            </div>
                            {this.state.veryBed &&
                                <h2 className='Orders-composition'>Пользователь существует</h2>
                            }
                            <div className='Orders-inline'>
                                <Link to={this.state.linkLogin}>
                                    <button onClick={this.changeHandlerRegistration} className='Header-button'>Регистрация</button>
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