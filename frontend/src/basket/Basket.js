import './App.css';
import CComponentMainPage from "./CComponentMainPage";
import CComponentBasket from "./CComponentPage";
import CComponentMainPageNot from "./mainPage/CComponentMainPageNot";
import CComponentOrder from "./order/CComponentPage"
import CComponentProfile from './profile/CComponentPage'
import CComponentOrders from './orders/CComponentPage'

function Basket() {
    return (
        <div className="App">
            <CComponentBasket/>
            {/*<CComponentOrder/>*/}
            {/*/!*<CComponentProfile/>*!/*/}
            {/*<CComponentOrders/>*/}
        </div>
    );
}

export default Basket;