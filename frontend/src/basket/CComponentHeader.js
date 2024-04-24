import React, {Component} from 'react';
import logo from "../img/logo.png";
import step from "../img/basketStep.png";
import '../mainPage/CComponentMainPageHeaderNot.css'

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