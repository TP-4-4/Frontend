import './App.css';
import CComponentMainPage from "./CComponentMainPage";
import CComponentBasket from "./basket/CComponentPage";
import CComponentMainPageNot from "./mainPage/CComponentMainPageNot";
import CComponentOrder from "./order/CComponentPage"
import CComponentProfile from './profile/CComponentPage'
import CComponentOrders from './orders/CComponentPage'

function MainPage() {
    return (
        <div className="App">
            <CComponentMainPage/>
            {/*<CComponentBasket/>*/}
            {/*<CComponentOrder/>*/}
            {/*/!*<CComponentProfile/>*!/*/}
            {/*<CComponentOrders/>*/}
        </div>
    );
}

export default MainPage;