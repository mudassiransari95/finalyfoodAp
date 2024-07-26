import React from 'react'
import { Link } from 'react-router-dom'

const AddDeliveryStaff = () => {
  return (
    <div>
        <div className="card border-primary " style={{}}>
  <div  className="card-header">  
    <Link id='addStoreNewbtn' to="/delivery/add" className="btn btn-primary float-right">
                  Add New
                </Link></div>
  <div className="card-body ">
    <h5 className="card-title">Add New Delivery Staff</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<div className="container">

    <form>
  <div id='formDiv1'>
    <div className="form-group col-md-6 ">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Phone</label>
      <input type="text" className="form-control" id="inputPassword4"  />
    </div>
  </div>
 
  <div id='formDiv1'>
    <div className="form-group col-md-3 ">
      <label htmlFor="inputEmail4">Per Delivery Charge</label>
      <input type="text" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Per KM Charge</label>
      <input type="text" className="form-control" id="inputPassword4"  />
    </div>
    <div className="form-group col-md-5">
      <label htmlFor="inputPassword4">Password</label>
      <input type="text" className="form-control" id="inputPassword4"  />
    </div>
  </div>
 
  <div id='formDiv1' >
  <div className="form-group col-md-4">
      <label htmlFor="inputState">Status</label>
      <select id="inputState" className="form-control">
        {/* <option selected>Choose...</option> */}
        <option>Active</option>
        <option>Disabled</option>
      </select>
    </div>
  </div>

  
 
  <button type="submit" className="btn btn-primary">Save</button>
</form>
</div>

  </div>
</div>
      
    </div>
  )
}

export default AddDeliveryStaff
