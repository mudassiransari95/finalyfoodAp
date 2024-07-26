
import React from 'react'
import { FaEye } from "react-icons/fa";
const NewOrder = () => {
  return (
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
<p class="mt-4 mb-3 " style={{fontWeight:"bold",color:"black"}}>App Users
   
</p>
    <tr className='tablehead'  style={{color:"red"}}>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Reg.Date</th>
      <th scope="col">Total  Amount</th>
      <th scope="col">Wallet</th>




    </tr>
  </thead>
  <tbody>
   
    <tr>
      <th scope="row" style={{fontSize:"14px",fontWeight:"lighter"}}></th>
      <td></td>
      <td className='d-flex gap-2'>  

      </td>


     

    </tr>
    {/* <tr
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
</div>


  </div>

  )
}

export default NewOrder
