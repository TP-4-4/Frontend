import React, {Component} from 'react';
import CComponentCategory from "./CComponentCategory";
import CComponentMainPageHeaderNot from "./CComponentMainPageHeaderNot";
import './CComponentMainPageNot.css'
import CComponentCatalog from "./CComponentCatalog";
import cat2 from '../img/cat2.png'
import cat3 from '../img/cat3.png'
import CComponentMainPageDeliveryPayment from './CComponentMainPageDeliveryPayment';
import CComponentMainPageFooter from "./CComponentMainPageFooter";
import { Link } from "react-router-dom";

class CComponentMainPageNot extends Component {
    render() {
        return (
            <div className='p'>
                <div className='center'>
                    <div className='c'>
                        <CComponentMainPageHeaderNot/>
                        <CComponentCatalog/>
                        <CComponentMainPageDeliveryPayment/>
                        <CComponentMainPageFooter/>
                    </div>
                </div>
                <img src={cat2} alt={cat2} className='cat1'/>
                <img src={cat3} alt={cat3} className='cat2'/>


            </div>
        )
    }
}

export default CComponentMainPageNot;