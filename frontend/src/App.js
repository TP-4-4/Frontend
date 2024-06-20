
import './App.css';
import CComponentMainPage from "./mainPage/CComponentMainPage";
import CComponentBasket from "./basket/CComponentPage";
import CComponentBasketNot from "./basket/CComponentPageNot";
import CComponentMainPageNot from "./mainPage/CComponentMainPageNot";
import CComponentOrder from "./order/CComponentPage"
import CComponentProfile from './profile/CComponentPage'
import CComponentOrders from './orders/CComponentPage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import logo from "./img/logo.png";
import {useState} from "react";

function App()
{
//     // const [id, setid] = useState(0);
//     //
//     // const idWork = id => {
//     //     setid(current=>id)
//     //     console.log('argument from Child: ', id)
//     }
  return (
      <>
          <Router>
              <Routes>
                  <Route
                    exact
                    path='/'
                    element={<CComponentMainPageNot/>}
                  />
                  <Route
                      path='/authorized'
                      element={<CComponentMainPage/>}
                  />
                  <Route
                      path='/basket'
                      element={<CComponentBasket/>}
                  />
                  <Route
                      path='/basketNot'
                      element={<CComponentBasketNot/>}
                  />
                  <Route
                      path='/order'
                      element={<CComponentOrder/>}
                  />
                  <Route
                      path='/orders'
                      element={<CComponentOrders/>}
                  />
                  <Route
                      path='/profile'
                      element={<CComponentProfile/>}
                  />


              </Routes>
          </Router>
      </>

  );
}

export default App;
