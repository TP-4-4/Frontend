import React, {Component} from 'react';
import CComponentMainPageHeader from "./CComponentMainPageHeader";
import './CComponentMainPageNot.css'
import CComponentCatalog from "./CComponentCatalog";
import cat2 from '../img/cat2.png'
import CComponentMainPageDeliveryPayment from './CComponentMainPageDeliveryPayment';
import CComponentMainPageFooter from "./CComponentMainPageFooter";
import CComponentBasket from "./CComponentBasket";

class CComponentMainPage extends Component {
    render() {
        return (
            <div className='p'>
                <div className='center'>
                    <div className='c'>
                        <div className='hed'>
                            <CComponentMainPageHeader/>
                        </div>
                        <CComponentCatalog/>
                        <CComponentMainPageDeliveryPayment/>
                        <CComponentMainPageFooter/>
                        <div className='basket'>
                            <CComponentBasket/>
                        </div>
                    </div>
                </div>
                <img src={cat2} alt={cat2} className='cat1'/>
                {/*<img src={cat3} alt={cat3} className='cat2'/>*/}


            </div>
        );
    }
}

export default CComponentMainPage;