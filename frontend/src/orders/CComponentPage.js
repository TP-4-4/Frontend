import React, {Component} from 'react';
import Header from '../mainPage/CComponentMainPageHeader'
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'
import '../profile/CComponentPage.css'
import close from "../img/CloseOr.png";
import axios from 'axios'
import map from "../img/mapK.png";
import { Link } from "react-router-dom";
import img from "../img/pizza.png";
import Map from './CComponentMap'


class CComponentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number:'165456',
            date: '24.04.2024',
            composition: 'Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан.350 г',
            price: 1020,
            shouldShowElem: false,
            statys: 'Принят',
            ordersList: []
        }

        this.map = this.map.bind(this);
        this.mapNot = this.mapNot.bind(this);
        this.getOrders= this.getOrders.bind(this);

    }

    componentDidMount() {
        this.getOrders()
    }

    getOrders(){
        console.log('Взяли заказы');

        fetch('http://127.0.0.1:8000/orders/api/userOrders/')
            .then(response => response.json())
            .then(data =>
                console.log('Data:', data)
                // this.setState({
                //     ordersList: data
                // })
            )
    }

    map(){
        window.ym(97428582,'reachGoal','MapButtonClick');
        this.setState({
            shouldShowElem: true,
        });
    }

    mapNot(){
        this.setState({
            shouldShowElem: false,
        });
    }

    render() {
        let arrOrder = [];

        for (let i = 1; i <= 6; i++) {
            arrOrder.push(<div className='Orders-inline'>
                <h1 onClick={this.map} className='Orders-title'>{this.state.number}</h1>
                <div>
                    <h2 className='Orders-date'>{this.state.date}</h2>
                    <h3 className='Orders-composition'>{this.state.composition}</h3>
                </div>
                <h2 className='Orders-price'>{this.state.price} P</h2>
                <h2 className='Orders-state'>{this.state.statys}</h2>
            </div>);
        }
        return (
            <div>
                <div className='Orders-main'>
                    <Header/>
                    <div className='Orders-div'>
                        <h1 className='Orders-title'>Заказы</h1>

                        <Link to={'/authorized'}>
                            <h2 className='Profile-text-input'>Назад в магазин</h2>
                        </Link>
                    </div>
                    <Footer/>
                </div>
                {this.state.shouldShowElem &&

                    <div className='Orders-map'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                <h1 className='Orders-map-number'>{this.state.number}</h1>
                                <img onClick={this.mapNot} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <h2 className='Orders-composition'>Курьер уже спешит к вам!</h2>
                            <Map/>
                        </div>

                    </div>
                }

            </div>

        );
    }
}

export default CComponentPage;