import React from 'react'
import { FaEye } from "react-icons/fa";
const CancelOrder = () => {
  return (
    // <div>
       <div className='  p-1  w-75 bg-#D3D3D3  ' style={{backgroundColor:"lightgrey",marginLeft:"17rem",height:"100vh"}}>
        <div className='bg-warning mt-5'>

        </div>


<div class="container " style={{marginTop:"5rem",width:"71rem",marginTop:"10px"}}>
  <nav class="container navbar navbar-expand-lg " style={{background:"#86E3AC "}}>
    <div class="container   " style={{borderRadius:"10px",height:"2rem"}}>
    <a class="navbar-brand " style={{color:"green",fontSize:"1rem"}} href="#"> In demo You can not Add/Edit/Delete anything </a>
    </div>
  </nav>
</div>
<div className=' bg-white mt-5  p-3 m-auto Newordertable'  style={{width:"70rem"}}>      
<table class="table " style={{color:"grey"}} >
  <thead style={{color:"grey"}}>
<p class="mt-4 mb-3 " style={{fontWeight:"bold"}}>Cancel Orders
   
</p>
    <tr className='tablehead'  style={{color:"red"}}>
      <th scope="col">Order Id</th>
      <th scope="col">Store</th>
      <th scope="col">User</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Total  Amount</th>
      <th scope="col">Options</th>




    </tr>
  </thead>
  <tbody>
   
    <tr>
      <th scope="row" style={{fontSize:"14px",fontWeight:"lighter"}}>1220</th>
      <td>Bliss Food <br/>Make New Order</td>
      <td>@Sush Code</td>
      <td>  6546546546</td>
      <td>     tubiba<br/>
      23-Jul-2024 06:03:PM
      </td>
      <td>   Rs.25855</td>
      <td className='d-flex gap-2'>  
<div className=' text-white' style={{width:"2rem",background:"blue",height:"2rem",paddingLeft:"0.2rem"}}>
<FaEye className='ps-1 fs-4' />
</div>
<svg className='' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" style={{background:"red",height:"2rem",width:"2rem"}}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" style={{background:"green",height:"2rem",width:"2rem"}}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"  /></svg>
      </td>


     

    </tr>
   
  </tbody>
</table>
</div>


  </div>

  )
}

export default CancelOrder
