import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
import Set from './sidebar/Set';
import Reporting from './sidebar/Reporting';
import SidebarLeft from './sidebar/SidebarLeft';
import Login from './sidebar/Login';
import './App.css';


function App() {
  return (
    <Router>
      <Container fluid>
        <Row>

            
          
          
       
          <Col md={10} className="main-content">
            <Routes>
            
              <Route path='/' element={<Login/>}/>
              <Route path='/setting' element={<Set/>}/>
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
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
