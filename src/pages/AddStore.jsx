import React from 'react'

const AddStore = () => {
  return (
    <div>
     
     <div className="card border-primary " style={{}}>
  <div className="card-header">Add New store</div>
  <div className="card-body ">
    <h5 className="card-title">Add New store</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<div className="container">

    <form>
  <div id='formDiv1'>
    <div className="form-group col-md-6 ">
      <label htmlFor="inputEmail4">Select category</label>
      <input type="text" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Store Title</label>
      <input type="text" className="form-control" id="inputPassword4"  />
    </div>
  </div>
 
 
  <div id='formDiv1' >
  <div className="form-group col-md-3">
      <label htmlFor="inputState">Veg non-veg Filter</label>
      <select id="inputState" className="form-control">
        {/* <option selected>Choose...</option> */}
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputState">Do Delivery</label>
      <select id="inputState" className="form-control">
        {/* <option selected>Choose...</option> */}
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputState">Dinein</label>
      <select id="inputState" className="form-control">
        {/* <option selected>Choose...</option> */}
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    
  </div>

  <div id='formDiv1'>
    <div className="form-group col-md-6 ">
      <label htmlFor="inputEmail4">Store Address</label>
      <input type="text" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">WhatsApp no. with Country code</label>
      <input type="text" className="form-control" id="inputPassword4"  />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
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

export default AddStore
