import React, {Component} from 'react';
import "./CComponentCatalog.css"
import "./CComponentCategory.css"
import './CComponentPosition.css'

import close from "../img/CloseOr.png";
import img from "../img/pizza.png";

class CComponentCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameCat: ["Пицца", "Роллы", "Напитки"],
            namep: "Пицца с креветками",
            description: "Домашнаяя паста феттуччине, сливочный соус, креветки,трюфельное масло, черный перец, пармезан, 350 г.",
            price: "от 650 Р",
            img: img,
            categoriesList:[],
            positionList:[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
            positionRollList:[],
            positionDrinkList:[],
            shouldShowElem: false
        }

        this.information = this.information.bind(this);
        this.notInformation = this.notInformation.bind(this);
        this.getCatigories=this.getCatigories.bind(this);
        this.getPosition=this.getPosition.bind(this);
    }

    componentDidMount() {
        this.getCatigories()
        for (let i=0; i<15; i++){
            this.getPosition(i)
        }
    }

    getCatigories(){
        console.log('Взяли категории');

        fetch('http://127.0.0.1:8000/shop/api/categories/')
            .then(response => response.json())
            .then(data =>
                // console.log('Data:', data)
                this.setState({
                    categoriesList: data
                })
            )


    }

    getPosition(id){

        fetch('http://127.0.0.1:8000/shop/api/categories/'+id+'/')
            .then(response => response.json())
            .then(data =>(
                this.state.positionList[id] = data
                )
            )
        console.log(this.state.positionList)
    }

    information(){
        window.ym(97428582,'reachGoal','PositionButtonClick');
        this.setState({
            shouldShowElem: true,
            // namep:pos.name,
            // description:pos.description,
            // price:pos.price,
            // img:pos.img
        })
    }

    notInformation(){
        this.setState({
            shouldShowElem: false
        })
    }

    addPos(id){
        window.ym(97428582, 'reachGoal', 'AddingPositinButtonClick')

        // fetch('http://127.0.0.1:8000/cart/api/add/'+id+'/')
    }

    render() {
      var categories = this.state.categoriesList
       return (
            <div className='all'>
                <div>
                    <div className='Category'>
                        {categories.map((category, id) => (
                            <div className='Category-main' key={id}>
                                <h1 className="Category-name">{category.name}</h1>
                                {/*<table className='Category-table'>*/}
                                {/*    {this.getPosition(category.id)}*/}
                                {/*    {console.log('категория '+category.id)}*/}
                                {/*    {console.log(this.state.positionList[category.id])}*/}
                                {/*    {this.state.positionList[category.id].map((position, id) => (*/}
                                {/*        <td>*/}
                                {/*            <div className='Category'>*/}
                                {/*                <div className='Category-main'>*/}
                                {/*                    <div key={id} onClick={this.information()} className="App-div">*/}
                                {/*                        <img src={position.image} alt={position.image} className="Position-img"/>*/}
                                {/*                        <h1 className="Position-name">{position.name}</h1>*/}
                                {/*                        <h3 className="Position-description">{position.description}</h3>*/}
                                {/*                        <div className="Position-inline-div">*/}
                                {/*                            <h2 className="Position-price">{position.price}</h2>*/}
                                {/*                            <button*/}
                                {/*                                onClick={this.addPos(position.id)}*/}
                                {/*                                className="Position-button">В корзину*/}
                                {/*                            </button>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </td>*/}
                                {/*    ))}*/}
                                {/*</table>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default CComponentCatalog;