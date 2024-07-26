import React from 'react'

const AddStoreCategory = () => {
  return (
    <div>
       <div className="card border-primary " style={{}}>
  <div className="card-header">Add Store category</div>
  <div className="card-body ">
    <h5 className="card-title">Add Store category</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<div className="container">

    <form>
  <div id='formDiv1'>
    <div className="form-group col-md-6 ">
      <label htmlFor="inputEmail4">Category name</label>
      <input type="text" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Sort Order</label>
      <input type="text" className="form-control" id="inputPassword4"  />
    </div>
  </div>
 
 
  <div id='formDiv1' >
  <div className="form-group col-md-6">
      <label htmlFor="inputState">choose</label>
      <select id="inputState" className="form-control">
        {/* <option selected>Choose...</option> */}
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div className="form-group col-md-6">
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

export default AddStoreCategory
