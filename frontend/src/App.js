
import './App.css';
import CComponentMainPage from "./mainPage/CComponentMainPage";
import CComponentBasket from "./basket/CComponentPage";
import CComponentMainPageNot from "./mainPage/CComponentMainPageNot";
import CComponentOrder from "./order/CComponentPage"
import CComponentProfile from './profile/CComponentPage'
import CComponentOrders from './orders/CComponentPage'

function App() {
  return (
    <div className="App">
        <CComponentMainPageNot/>
        {/*<CComponentMainPage/>*/}
        {/*<CComponentBasket/>*/}
        {/*<CComponentOrder/>*/}
        {/*/!*<CComponentProfile/>*!/*/}
        {/*<CComponentOrders/>*/}
    </div>
  );
}

export default App;
