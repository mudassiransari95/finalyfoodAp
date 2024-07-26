import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from './pages/Home'; 
import OrdersTable from './pages/OrdersTable'; 
import ManageStoreCategory from './pages/ManageStoreCategory';
import ManageStore from './pages/ManageStore';
import AddStoreCategory from './pages/AddStoreCategory';
import AddStore from './pages/AddStore';
import DeliveryStaff from './pages/DeliveryStaff';
import AddDeliveryStaff from './pages/AddDeliveryStaff';
import Left from './pages/Left';

import Reporting from './sidebar/Reporting';
import SidebarLeft from './sidebar/SidebarLeft';
import Login from './sidebar/Login';
import './App.css';
import SettingOne from './pages/SettingOne';
import Runningorder from './sidebar/Runningorder';
import CompletedOrder from './sidebar/CompletedOrder'
import CancelOrder from './sidebar/CancelOrder';
import Putnotification from './sidebar/Putnotification';

function App() {
  return (
    <Router>
    


            
          
          
       
         
            <Routes>
            
              <Route path='/' element={<Login/>}/>
              <Route path='/runningorder' element={<Runningorder/>}/>
              <Route path='/reporting' element={<Reporting/>}/>
              <Route path='/notification' element={<Putnotification/>}/>
          
              <Route path='/cancleorder' element={<CancelOrder/>}/>
              <Route path='/completeorder' element={<CompletedOrder/>}/>
              <Route path='/setting' element={<SettingOne/>}/>
              <Route path="/home" element={<Left/> } />
              <Route path="/orders" element={<OrdersTable />} />
              <Route  path="/cate" element={<ManageStoreCategory/>} />
              <Route path="/cate/add" element={<AddStoreCategory/>} />

              <Route exact path="/delivery" element={<DeliveryStaff/>} />
              <Route exact path="/delivery/add" element={<AddDeliveryStaff/>} />

              <Route exact path="/store" element={<ManageStore/>} />
              <Route exact path="/store/add" element={<AddStore/>} />

              {/* <Route path="/customers" element={<Left />} /> */}
              
            </Routes>
      
     
    
    </Router>
  );
}

export default App;
