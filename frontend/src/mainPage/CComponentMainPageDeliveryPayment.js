import React, {Component} from 'react';
import './CComponentMainPageDeliveryPayment.css'
import delivery from '../img/delivery.png'
import pay from '../img/pay.png'
import map from '../img/map.png'

class CComponentMainPageDeliveryPayment extends Component {
    render() {
        return (
            <div className='DeliveryPayment-rectangle'>
                <h1 className='h'>Доставка и оплата</h1>
                <div className='center'>
                    <div className="inline">
                        <img src={pay} alt={pay} className='imgD'/>
                        <img src={delivery} alt={delivery} className='imgD'/>
                    </div>
                </div>

                <img src={map} alt={map} className='map'/>
            </div>
        );
    }
}

export default CComponentMainPageDeliveryPayment;