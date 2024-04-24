import React, {Component} from 'react';
import img from "../img/pizza.png";
import CComponentPosition from "./CComponentPosition";
import "./CComponentCategory.css"
import close from "../img/CloseOr.png";
import pizza from "../img/pizza.png";

class CComponentCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Пицца",
            items: [CComponentPosition, CComponentPosition, CComponentPosition, CComponentPosition],
            shouldShowElem: false
        }

        // this.information = this.information.bind(this);
        // this.notInformation = this.notInformation.bind(this);
    }

    // information(){
    //     this.setState({
    //         shouldShowElem: true
    //     })
    // }
    //
    // notInformation(){
    //     this.setState({
    //         shouldShowElem: false
    //     })
    // }

    render() {
        return (
            <div className='Category'>
                <div className='Category-main'>
                    <h1 className="Category-name">{this.state.name}</h1>
                    <table className='Category-table'>
                        <tr>
                            <td>
                                <CComponentPosition/>
                            </td>
                            <td>
                                <CComponentPosition/>
                            </td>
                            <td>
                                <CComponentPosition/>
                            </td>
                            <td>
                                <CComponentPosition/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CComponentPosition/>
                            </td>
                            <td>
                                <CComponentPosition/>
                            </td>
                            <td>
                                <CComponentPosition/>
                            </td>
                            <td>
                                <CComponentPosition/>
                            </td>
                        </tr>
                    </table>
                </div>

                {this.state.shouldShowElem &&
                    <div className='Category-info'>
                        <div className='Orders-map-div'>
                            <div className='Orders-inline'>
                                {/*<h1 className='Orders-map-number'>{this.state.number}</h1>*/}
                                <img onClick={this.mapNot} src={close} alt='close' className='Orders-map-close'/>
                            </div>
                            <h2 className='Orders-composition'>Курьер уже спешит к вам!</h2>
                            {/*<img src={map} alt='mapK'/>*/}
                        </div>

                    </div>
                }
            </div>
        );
    }
}

export default CComponentCategory;