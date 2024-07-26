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
import { IoMdNotifications } from "react-icons/io";
// import { FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';
// import NewOrder from '../NewOrder';
const SidebarLeft = () => {

  const [dashboard, setdashboard] = useState(false)
 const [manageStore, setmanageStore] = useState(false)
 const [manageOrder, setmanageOrder] = useState(false);
 
 
 const homeDashBoard=()=>{
   setdashboard((preve)=>!preve)
  setmanageOrder(false)
  setmanageStore(false)
 }
 const handlemanageStore=()=>{
  setmanageStore((preve)=>!preve)
  setmanageOrder(false)
  setdashboard(false)
 }
 const handlemanageOrder=()=>{
  setmanageOrder((preve)=>!preve)
  setmanageStore(false)
  setdashboard(false)
 }


  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="digital-clock text-white  " style={{background:"	#000080 ",width:"14rem"}}>
      <h4 className='text-white  pt-4 gap-3 clock'>
        <p> <LuClock8/></p>
      <p>  {formattedTime}</p>
    
      </h4>

    
<div className='m-auto sidebar'>
<div className=" mt-4 text-white ">
  <div style={{backgroundColor:""}} className=""  >
    <div className='dashboard' onClick={homeDashBoard}>
    <p className='text'><MdOutlineHome /></p>
    <p>Dashboard</p>
    </div>

   {dashboard && <div>
      <ul style={{listStyle:"circle"}}>

   
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="/home">Home</Link></li>
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="/setting">Setting</Link></li>
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="">Manage Country</Link></li>
    </ul>
    </div>}
    </div>
</div>
{/* welcome slidercnvsdjkvhbjdsgbhdsbv */}
 <div>
 <div className='dashboard'> 
  <p> <FaImage /> </p> 
  <p>  Welcome Sliders </p>
   </div> 

   <div className='dashboard'> 
  <p> <FaImage /> </p> 
  <p> Homepage Banners </p>
   </div> 


   <div className='dashboard'> 
  <p> <FaRegCreditCard /></p> 
  <p>  Subscription Plan </p>
   </div> 
   <div className='dashboard'> 
  <p> <FaMoneyBillAlt /></p> 
  <p>  Manage Finance </p>
   </div> 
   <div className='dashboard'> 
  <p> <FaImage /></p> 
  <p>  Homepage Banners</p>
   </div> 
   <div className='dashboard'> 
  <p><FaRegCreditCard /> </p> 
  <p>  Subscription Plan</p>
   </div> 
   <div className='dashboard'> 
  <p><FaMoneyBillAlt /> </p> 
  <p>  Manage Finance</p>
   </div> 


 
      
      
      
       
    
 </div>


 
    {/* manage store system */}

    <div>
      <div className='dashboard' onClick={handlemanageStore}>

      <p> <MdOutlineHome /> </p>
      <p> Manage Stores </p>
      </div>
{manageStore &&  <div>
<ul className="" style={{ listStyleType:"circle" }}>
<li><Link className="" to="/cate">Store Category</Link></li>
<li><Link className="" to="/store">Stores</Link></li>
</ul>
</div>}
    </div>


<div>
<div className='dashboard'>

<p> <FaFile /> </p>
<p> App Page Text </p>
</div>

<div className='dashboard'>

<p> <FaUser /> </p>
<p> Delivery Staff </p>
</div>
<div className='dashboard'>

<p> <FaRegCreditCard /> </p>
<p>   Manage Coupon </p>
</div>
<div className='dashboard'>

<p><LiaLanguageSolid /></p>
<p>   App Text </p>
</div>

        
       
     
</div>

{/* manage order fbdsjkghdsfjkv */}
 <div >
<div className='dashboard' onClick={handlemanageOrder}>
  <p>  <FaCartShopping /></p>
  <p>Manage Order</p>
</div>
{manageOrder && <div>
<ul className="" style={{ listStyleType:"circle" }}>
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="/orders">New Order</Link></li>
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="/runningorder">Running Orders</Link></li>
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="/completeorder">Completed Order</Link></li>
    <li><Link style={{textDecoration:"none", color:"white"}} className="" to="/cancleorder">Cancelled Orders</Link></li>
  </ul>
</div>}
 </div>




<div className='text-white '>
<Link to={'/notification'} style={{textDecoration:"none", color:"white"}} className='dashboard'>
  <p>  <IoMdNotifications /></p>
  <p>pushnotification</p>
</Link>
<div className='dashboard'>
  <p>   <FaUsers /></p>
  <p> App  Users</p>
</div>

<Link to={'/reporting'} style={{textDecoration:"none", color:"white"}} className='dashboard'>
  <p>  <FaFile /></p>
  <p>   Reporting</p>
</Link>
<div className='dashboard'>
  <p>  <LuLogOut /></p>
  <p>  Logout</p>
</div>  
 </div>

 </div>

    </div>
  );
};

export default SidebarLeft;
