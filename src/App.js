
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext()

function App() {
const [loggedInUser , setLoggedInUser] = useState({})
console.log('loggedInUserhehehehe',loggedInUser)
  return (
    <userContext.Provider value={[loggedInUser ,setLoggedInUser ]}>
      <h3>email{loggedInUser.email}</h3>
      
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Shop/>}>
          </Route>
          <Route path="/shop" element={<Shop/>}>
          </Route>
          <Route path="/review" element={<Review/>}>     
          </Route>
          <Route path="/inventory" element={<Inventory/>}>
          </Route>
          <Route path="/shipment" element={<PrivateRoute> <Shipment/> </PrivateRoute> }>
          </Route>
          <Route path="/Login" element={<Login/>}>
          </Route>
          <Route path="/product/:productKey" element={<ProductDetail/>}>
          </Route>
          <Route path="*" element={<NoMatch/>}>
          </Route>
          </Routes>
      </Router>
    </userContext.Provider >
  );
}

export default App;
