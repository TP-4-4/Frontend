import React, {Component} from 'react';
import CComponentCategory from "./CComponentCategory";
import "./CComponentCatalog.css"
import cat from '../img/cat2.png'
import { Link } from "react-router-dom";

class CComponentCatalog extends Component {
    render() {
        return (
            <div className='all'>
                <div>
                    <CComponentCategory/>
                    <CComponentCategory/>
                    <CComponentCategory/>
                </div>
            </div>

        );
    }
}

export default CComponentCatalog;