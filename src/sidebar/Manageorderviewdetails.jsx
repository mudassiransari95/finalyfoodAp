import React from 'react'

const Manageorderviewdetails = () => {
  return (
    <div className='bg-white m-auto w-100' style={{}}>
<p className=' ms-3 p-2 pt-2 ' style={{border:"2px solid black" ,width:"7rem",height:"3rem",borderRadius:"0.5rem"}}>
    Print Receipt
</p>


{/* heading */}
<h3 className='' style={{fontWeight:"bold",marginLeft:"40rem"}}>Order No.#1220</h3>
<div class="" style={{height:"",background:"white"}}>
<div class="grid-container">
  <div className='item'>2</div>
  <div className='item'>2</div>
 
</div>
</div>   

{/* order items
 */}
<div className='mt-1' style={{}}>
    <p className='' style={{fontWeight:"bold",marginLeft:"20rem",fontFamily:"sans-serif"}}>Order Items</p>
<div class="container-one "style={{fontSize:"10px"}}>
  <div className='' style={{fontSize:"1.1rem",fontWeight:"bold",fontFamily:"sans-serif",}}>SerialNo.</div>
  <div className='item2'  style={{fontSize:"1.1rem",fontWeight:"bold",fontFamily:"sans-serif"}}>Item</div>
  <div className='' style={{fontSize:"1.1rem",fontWeight:"bold",fontFamily:"sans-serif",}}>Price</div>
  <div className='item2'  style={{fontSize:"1.1rem",fontWeight:"bold",fontFamily:"sans-serif",}}>Qty</div>
  <div className='' style={{fontSize:"1.1rem",fontWeight:"bold",fontFamily:"sans-serif"}}>Total</div>
 
</div>
</div>
    </div>
  )
}

export default Manageorderviewdetails
