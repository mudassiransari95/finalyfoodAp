import React, { useRef } from 'react'

const Putnotification = () => {
  let titleRef=useRef()
  let descriptionRef=useRef()
  let handlesubmit=(e)=>{
e.preventdefault()
let obj={
  title:titleRef.current.value,
  description:descriptionRef.current.value      
}
  }
  return (
    <div className='w-75   ' style={{marginLeft:"22rem",paddingLeft:"10rem",paddingTop:"2rem",background:"whitesmoke"}}> 


<div class="w-75 ms-5  " style={{marginTop:"5rem",width:"71rem",borderRadius:"10px"}}>
  <nav class="container navbar
   navbar-expand-lg pb-3 " style={{background:"#86E3AC ",borderRadius:"10px"}}>
    <a class="navbar-brand pb-2  " style={{color:"green",fontSize:"1rem",borderRadius:"10px",paddingLeft:"2rem",height:"1.5rem"}} href="#"> In demo You can not Add/Edit/Delete anything </a>
  </nav>
</div>

    <form className='w-75 mt-5 ms-5 p-3 notificationform' style={{background:"white"}}>
    <p style={{fontFamily:"arial",fontWeight:"bold",}}>
    Push Notification
    </p>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" ref={titleRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea type="text" ref={descriptionRef} className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" onClick={handlesubmit} className="btn " style={{background:""}}>Submit</button>
</form>

    </div>
  )
}

export default Putnotification
