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

        console.log('Взяли заказы');

        fetch('http://localhost:8000/orders/api/userOrders/', {
            method: 'GET',
            credentials: 'include'})
            .then(response => response.json())
            .then(data =>
                    // console.log('Data:', data)
                this.setState({
                    ordersList: data
                }, () => {
                    console.log('заказы ' + JSON.stringify(this.state.ordersList));
                })

            )

        this.map = this.map.bind(this);
        this.mapNot = this.mapNot.bind(this);
        this.getOrders= this.getOrders.bind(this);
        this.date=this.date.bind(this)


    }

    componentDidMount() {
        // this.getOrders()
    }

    getOrders(){
        console.log('Взяли заказы');

        fetch('http://localhost:8000/orders/api/userOrders/', {
            method: 'GET',
            credentials: 'include'})
            .then(response => response.json())
            .then(data =>
                    console.log('Data:', data)
                // this.setState({
                //     ordersList: data
                // })
            )
    }

    date(isoDateString){
        // const isoDateString = '2024-06-25T09:10:29.249563Z';
        const date = new Date(isoDateString);

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        };

        const formattedDate = date.toLocaleString('ru-RU', options);
        console.log(formattedDate);
        return formattedDate
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
        // let arrOrder = [];
        //
        // for (let i = 1; i <= 6; i++) {
        //     arrOrder.push(<div className='Orders-inline'>
        //         <h1 onClick={this.map} className='Orders-title'>{this.state.number}</h1>
        //         <div>
        //             <h2 className='Orders-date'>{this.state.date}</h2>
        //             <h3 className='Orders-composition'>{this.state.composition}</h3>
        //         </div>
        //         <h2 className='Orders-price'>{this.state.price} P</h2>
        //         <h2 className='Orders-state'>{this.state.statys}</h2>
        //     </div>);
        // }

        function getOrderStatusClass(status) {
            switch (status) {
                case 'NOT_ACCEPTED':
                    return 'order-status-not-accepted';
                case 'ACCEPTED':
                    return 'order-status-accepted';
                default:
                    return '';
            }
        }

        function getOrderStatus(status) {
            switch (status) {
                case 'NOT_ACCEPTED':
                    return 'Не принят';
                case 'ACCEPTED':
                    return 'Принят';
                default:
                    return 'Неизвестный статус';
            }
        }

        var orders = this.state.ordersList
        orders.map((order,id) => {
            console.log(order.id +' '+order)
        })
        // console.log(orders)
        return (
            <div>
                <div className='Orders-main'>
                    <Header/>
                    <div className='Orders-div'>
                        <h1 className='Orders-title'>Заказы</h1>
                        {/*{arrOrder}*/}
                        {orders.map((order, id) => (
                            <div className='Orders-inline' key={id}>
                                <h1 onClick={this.map} className='Orders-title'>{order.id}</h1>
                                <h2 className='Orders-date'>{this.date(order.created)}</h2>
                                {/*<div>*/}

                                {/*    /!*<h3 className='Orders-composition'>{this.state.composition}</h3>*!/*/}
                                {/*</div>*/}
                                <h2 className='Orders-price'>{order.total_cost} P</h2>
                                {/*<h2 className='Orders-state'>{order.status}</h2>*/}
                                <h2 className={'Orders-state ' + getOrderStatusClass(order.status)}>{getOrderStatus(order.status)}</h2>
                            </div>
                        ))}
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
                            {/*<img src={map} alt='map' />*/}
                        </div>

                    </div>
                }

            </div>

        );
    }
}

export default CComponentPage;