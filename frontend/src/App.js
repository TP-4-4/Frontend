
import './App.css';
import CComponentMainPage from "./mainPage/CComponentMainPage";
import CComponentBasket from "./basket/CComponentPage";
import CComponentMainPageNot from "./mainPage/CComponentMainPageNot";
import CComponentOrder from "./order/CComponentPage"
import CComponentProfile from './profile/CComponentPage'

function App() {
  return (
    <div className="App">
        {/*<CComponentMainPage/>*/}
        {/*<CComponentBasket/>*/}
        {/*<CComponentOrder/>*/}
        <CComponentProfile/>

    </div>
  );
}

export default App;
