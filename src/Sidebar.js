import React, { useState, useEffect } from 'react';
import { LuClock8 } from "react-icons/lu";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaFile } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';
// import NewOrder from '../NewOrder';
const SidebarLeft = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="digital-clock  " style={{background:"	#000080 ",width:"14rem"}}>
      <h4 className='text-white ps-5 pt-3'><LuClock8/>{formattedTime}</h4>

    

<div className="dropdown mt-4 ms-5">
  <button style={{backgroundColor:"d"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <MdOutlineHome /> Dashboard
  </button>
  <ul className="dropdown-menu" style={{ listStyleType:"circle" }}>
    <li><Link className="dropdown-item" to="/home">Home</Link></li>
    <li><Link className="dropdown-item" to="/setting">Setting</Link></li>
    <li><Link className="dropdown-item" to="/store">Manage Country</Link></li>
  </ul>
</div>
 
 <div className='text-white mt-3'>
    <ul>
        <li className='gap-5'>  <FaImage />   Welcome Sliders</li> 
        <li><FaImage />   Homepage Banners</li> 
        <li><FaRegCreditCard />  Subscription Plan</li> 
        <li><FaMoneyBillAlt />  Manage Finance</li> 
    </ul>
 </div>


 <div className="dropdown mt-4 ms-4">
  <button style={{backgroundColor:"d"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <MdOutlineHome />  Manage Stores
  </button>
  <ul className="dropdown-menu" style={{ listStyleType:"circle" }}>
    <li><Link className="dropdown-item" to="/cate">Store Category</Link></li>
    <li><Link className="dropdown-item" to="">Stores</Link></li>
  </ul>
</div>


<div className='text-white mt-3'>
    <ul>
        <li className='gap-5'><FaFile /> App Page Text</li>
        <li><FaUser /> Delivery Staff</li>
        <li><FaRegCreditCard />  Manage Coupon</li> 
        <li><LiaLanguageSolid />  App Text</li> 
    </ul>
 </div>

 <div className="dropdown mt-2 ms-4">
  <button style={{backgroundColor:"d"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaCartShopping /> Manage Order
  </button>
  <ul className="dropdown-menu" style={{ listStyleType:"circle" }}>
    <li><Link className="dropdown-item" to="/neworder">New Order</Link></li>
    <li><Link className="dropdown-item" to="runningorder">Running Orders</Link></li>
    <li><Link className="dropdown-item" to="/completeorder">Completed Order</Link></li>
    <li><Link className="dropdown-item" href="/cancleorder">Cancelled Orders</Link></li>
  </ul>
</div>

<div className='text-white mt-3'>
    <ul>
        <li className='gap-5'>   <Link to='/pushnotification'>pushnotification</Link></li>
        <li><Link to='/appuser'>  <FaUsers />   App  Users </Link> </li>
         <li><FaFile />  Reporting</li> 
    
     
        <li> <LuLogOut /> Logout</li> 
    </ul>
 </div>



    </div>
  );
};

export default SidebarLeft;
