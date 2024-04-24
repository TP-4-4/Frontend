import React, {Component} from 'react';
import './CComponentPage.css'
import close from '../img/CloseOr.png'
import map from '../img/mapK.png'

class CComponentMap extends Component {

    render() {
        return (
            <div className='Orders-map-div'>
                <div className='Orders-inline'>
                    <h1 className='Orders-map-number'>{this.props.number}</h1>
                    <img src={close} alt='close' className='Orders-map-close'/>
                </div>
                <h2 className='Orders-composition'>Курьер уже спешит к вам!</h2>
                <img src={map} alt='mapK' />
            </div>
        );
    }
}

export default CComponentMap;