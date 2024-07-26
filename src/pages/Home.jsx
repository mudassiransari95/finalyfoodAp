import React from "react";
import OrdersTable from "./OrdersTable";
import "./Home.css";
const Home = () => {
  return (
    <div class="containerfluid my-4">

<div className="card-group my-5">
  <div className="card mx-2">
    <div className="card-body text-center">
      <h5 id="cardTitle" className="card-title">Total Store</h5>
      <div id="homeIcon1" className="circle-icon">
        <span className="material-symbols-outlined">person_add</span>
      </div>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card mx-2">
    <div id="cardBody" className="card-body text-center">
      <h5 id="cardTitle" className="card-title">App Users</h5>
      <div id="homeIcon2" className="circle-icon">
        <span className="material-symbols-outlined">smartphone</span>
      </div>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card mx-2">
    <div className="card-body text-center">
      <h5 id="cardTitle" className="card-title">Total Orders</h5>
      <div id="homeIcon3" className="circle-icon ">
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card mx-2">
    <div className="card-body text-center">
      <h5 id="cardTitle" className="card-title">Delivery Staff</h5>
      <div id="homeIcon4" className="circle-icon ">
        <span className="material-symbols-outlined">location_on</span>
      </div>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<div id="overallDiv" class="py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-center">
      <div >
        <div class="card widget-card border-light shadow-sm">
          <div class="card-body p-4">
            <div className="cardhead">
            <span class="card-title widget-card-title mb-4">Overall Order Data</span>
            <button type="button" class="btn btn-primary col-md-4">Get report</button>
            </div>
            <hr/>

            <div class="table-responsive">
              <table class="table table-borderless bsb-table-xl text-nowrap align-middle m-0">
              
                <tbody>
                  <tr>
                    <td>
                      <h6 class="mb-1"> Total order</h6>
                    </td>
                 
                    <td>495</td>
                    
                </tr>
                
                <tr>
                    <td>
                      <h6 class="mb-1"> Completed order</h6>
                    </td>
                 
                    <td>495</td>
                    
                </tr>  <tr>
                    <td>
                      <h6 class="mb-1"> Running order</h6>
                    </td>
                 
                    <td>495</td>
                    
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
   <div class="container">
    <div class="row justify-content-center">
      <div >
        <div class="card widget-card border-light shadow-sm">
          <div class="card-body p-4">
          <div className="cardhead">
            <span class="card-title widget-card-title mb-4">Most Orders by Store</span>
            <button type="button" class="btn btn-primary col-md-4">Get report</button>
            </div>
            <hr/>
            <div class="table-responsive">
            <table class="table table-borderless bsb-table-xl text-nowrap align-middle m-0">
              
              <tbody>
                <tr>
                  <td>
                    <h6 class="mb-1"> Store</h6>
                  </td>
               
                  <td>Completed order</td>
                  
              </tr>
              
              <tr>
                  <td>
                    <h6 class="mb-1"> Total order</h6>
                  </td>
               
                  <td>495</td>
                  
              </tr>  <tr>
                  <td>
                    <h6 class="mb-1"> Total order</h6>
                  </td>
               
                  <td>495</td>
                  
              </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <div className="container-fluid my-4">
    <div className="row">
        <div className="col-md-4">

            <ul class="list-group">
                <li class="list-group-item active"> <div id="liTitle">Get Report</div></li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        <div className="col-md-4">
            <ul class="list-group">
                <li class="list-group-item active">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>
</div> */}


<OrdersTable/>
    </div>
  );
};

export default Home;
