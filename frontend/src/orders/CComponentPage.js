import React, {Component} from 'react';
import Header from '../mainPage/CComponentMainPageHeader'
import Footer from '../mainPage/CComponentMainPageFooter'
import './CComponentPage.css'

class CComponentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number:'165456',
            date: '24.04.2024',
            composition: 'Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан.350 г',
            price: 1020,
            statys: 'Принят'
        }
    }

    render() {
        return (
            <div className='Orders-main'>
                <Header/>
                <div className='Orders-div'>
                    <h1 className='Orders-title'>Заказы</h1>
                    <div className='Orders-inline'>
                        <h1 className='Orders-title'>{this.state.number}</h1>
                        <div>
                            <h2 className='Orders-date'>{this.state.date}</h2>
                            <h3 className='Orders-composition'>{this.state.composition}</h3>
                        </div>
                        <h2 className='Orders-price'>{this.state.price} P</h2>
                        <h2 className='Orders-state'>{this.state.statys}</h2>
                    </div>
                    <div className='Orders-inline'>
                        <h1 className='Orders-title'>{this.state.number}</h1>
                        <div>
                            <h2 className='Orders-date'>{this.state.date}</h2>
                            <h3 className='Orders-composition'>{this.state.composition}</h3>
                        </div>
                        <h2 className='Orders-price'>{this.state.price} P</h2>
                        <h2 className='Orders-state-completed'>Завершён</h2>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CComponentPage;