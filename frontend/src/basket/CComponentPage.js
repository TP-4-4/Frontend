import React, {Component} from 'react';
import Footer from '../mainPage/CComponentMainPageFooter'
import Header from "./CComponentHeader";
import './CComponentPage.css'
import cat from '../img/catBasket.png'
import pizza from '../img/pizza.png'
import { Link } from "react-router-dom";
import close from '../img/Close.png'

class CComponentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: pizza,
            name: 'С креветками и трюфелями',
            description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, ' +
                'трюфельное масло, черный перец, пармезан.350 г',
            price: 120,
            number:1,
            basketList: []
        }

        this.getBacket=this.getBacket.bind(this)
        this.addPos=this.addPos.bind(this)
        this.delPos=this.addPos.bind(this)
    }

    componentDidMount() {
        this.getBacket()
    }

    getBacket(){
        console.log('Взяли корзину');

        fetch('http://127.0.0.1:8000/cart/api/')
            .then(response => response.json())
            .then(data =>
                console.log('Data:', data)
                // this.setState({
                //     basketList: data
                // })
            )
    }

    //добавление в корзину
    addPos(id){
        //fetch('http://127.0.0.1:8000/cart/api/add/'+id+'/')
    }

    //добавление в корзину
    delPos(id){
        //fetch('http://127.0.0.1:8000/cart/api/remove/'+id+'/')
    }

    render() {
        let position = []
        var  pos = this.state.basketList
        for (let i = 0; i <= 2; i++) {
            position.push(<div>
                    <div className='Basket-pos-inline'>
                        <img src={this.state.img} alt={this.state.img} className='Basket-pos-img'/>
                        <div>
                            <h1 className='Basket-pos-name'>{this.state.name}</h1>
                            <h2 className='Basket-pos-description'>{this.state.description}</h2>
                        </div>
                        <h1 className='Basket-pos-price'>{this.state.price} P</h1>
                        <div className='Basket-number'>
                            <h1 className='Basket-number-text'>+ |</h1>
                            <h1 className='Basket-number-text'>{this.state.number}</h1>
                            <h1 className='Basket-number-text'>| -</h1>
                        </div>
                        <img src={close} alt={close} className='Basket-close'/>
                    </div>
                    <div className='Basket-l'></div>
                </div>
            );
        }
        return (
            <div>
                <Header/>
                <div className='Basket-div'>
                    <h1 className='Basket-title'>Корзина</h1>
                    <div className='Basket-inline'>
                        <img src={cat} alt={cat}/>
                        <div>
                            {pos.map((p, id) => (
                                <div key={id}>
                                    <div className='Basket-pos-inline'>
                                        <img src={p.image} alt={p.image} className='Basket-pos-img'/>
                                        <div>
                                            <h1 className='Basket-pos-name'>{p.name}</h1>
                                            <h2 className='Basket-pos-description'>{p.description}</h2>
                                        </div>
                                        <h1 className='Basket-pos-price'>{p.price} P</h1>
                                        <div className='Basket-number'>
                                            <h1 className='Basket-number-text'>+ |</h1>
                                            <h1 className='Basket-number-text'>{p.number}</h1>
                                            <h1 className='Basket-number-text'>| -</h1>
                                        </div>
                                        <img src={close} alt={close} className='Basket-close'/>
                                    </div>
                                    <div className='Basket-l'></div>
                                </div>
                            ))}
                            {/*{position}*/}
                            <div className='Basket-inline'>
                                <Link to={'/authorized'}>
                                    <h2 className='Basket-back'>Вернуться в магазин</h2>
                                </Link>
                                <Link to={'/order'}>
                                    <button onClick={window.ym(97428582, 'reachGoal', 'PlaceOrderBascetButtonClick')}
                                            className='Basket-button'>Оформить заказ
                                    </button>
                                </Link>
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