import React, {Component} from 'react';
import logo from "../img/logo.png";
import step from "../img/orderStep.png";
import '../mainPage/CComponentMainPageHeaderNot.css'
import { Link } from "react-router-dom";


class CComponentHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logo,
        }
    }

    render() {
        return (
            <div className='Header-inline-basket'>
                <img src={logo} alt={logo} className="Header-logo"/>
                <img src={step} alt={step}/>
            </div>
        );
    }
}

export default CComponentHeader;