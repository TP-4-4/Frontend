
import './App.css';
import CComponentPosition from "./mainPage/CComponentPosition";
import CComponentCategory from "./mainPage/CComponentCategory";
import CComponentCatalog from "./mainPage/CComponentCatalog";
import CComponentMainPage from "./mainPage/CComponentMainPage";
import CComponentBasket from "./basket/CComponentPage";
import CComponentMainPageNot from "./mainPage/CComponentMainPageNot";

function App() {
  return (
    <div className="App">
        <CComponentMainPage/>
        {/*<CComponentBasket/>*/}

    </div>
  );
}

export default App;
