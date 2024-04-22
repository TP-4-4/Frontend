import React, {Component} from 'react';
import img from "../img/pizza.png";
import CComponentPosition from "./CComponentPosition";
import "./CComponentCategory.css"

class CComponentCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Пицца",
            items: [CComponentPosition, CComponentPosition, CComponentPosition, CComponentPosition]
        }
    }
    render() {
        return (
            <div>
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
        );
    }
}

export default CComponentCategory;