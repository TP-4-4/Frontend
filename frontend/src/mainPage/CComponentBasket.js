import React, {Component} from 'react';
import './CComponentBasket.css';
import img from '../img/pizza.png'
import close from '../img/Close.png'

class CComponentBasket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: img,
            name: 'С креветками и трюфелями',
            price: 120,
            number: 1
        }

        this.positions = [this.state, this.state]
    }


    // position(){
    //     const listItems = this.positions.map((pos) => (
    //         // <li>{this.pos.img}</li>
    //         <div className='Basket-position'>
    //             <img src={pos.img} alt={pos.img} className='Basket-img'/>
    //             <div>
    //                 <h1 className='Basket-name'>{pos.name}</h1>
    //                 <div className='Basket-naumber'>
    //                     <h1 className='Basket-naumber-text'>+</h1>
    //                     <h1 className='Basket-naumber-text'>{pos.number}</h1>
    //                     <h1 className='Basket-naumber-text'>-</h1>
    //                 </div>
    //             </div>
    //             <div>
    //                 <img src={close} alt={close}/>
    //                 <h2 className='Basket-price'>{pos.price} Р</h2>
    //             </div>
    //         </div>
    //     ));
    //     return <div>{listItems}</div>;
    // }

    render() {
        return (
            <div className='Basket-rectangle'>
                <div className='Basket-position'>
                    <img src={img} alt={img} className='Basket-img'/>
                    <div>
                        <h1 className='Basket-name'>{this.state.name}</h1>
                        <div className='Basket-naumber'>
                            <h1 className='Basket-naumber-text'>+</h1>
                            <h1 className='Basket-naumber-text'>{this.state.number}</h1>
                            <h1 className='Basket-naumber-text'>-</h1>
                        </div>
                    </div>
                    <div>
                        <img src={close} alt={close}/>
                        <h2 className='Basket-price'>{this.state.price} Р</h2>
                    </div>
                </div>
                {/*<script>position();</script>*/}
                <div className='Basket-line'></div>
                <div className='Basket-position'>
                    <h1 className='Basket-sum-text'>Сумма заказа</h1>
                    <h1 className='Basket-sum'>{this.state.price} Р</h1>
                </div>
            </div>
        );
    }
}

export default CComponentBasket;