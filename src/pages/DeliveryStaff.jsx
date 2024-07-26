import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

const DeliveryStaff = () => {
    const data = [
        {
          id: 1,
          name: 'Sush',
          phone: '90909090',
          password: 'google123',
          perDeliveryCharge: 'Rs.10',
          perKM: 'Rs.3',
          status: 'Active'
        }
        
      ];
      
      const handleDelete = (id) => {
        const confirmUrl = `https://newpos.7yug.com/delivery/delete/${id}`;
        if (window.confirm('Are you sure you want to delete this item?')) {
         
          console.log(`Deleting item with ID ${id}`);
        }
      };
    
      return (
        <div className="row" >
        <div className="col-12">
          <div className="card">
            <div className="card-content">
              <div className="card-body titleHead">
                <h4 className="card-title">
                  Manage Store 
                  
                </h4>
                <Link to="/delivery/add" className="btn btn-primary float-right">
                  Add New
                </Link>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Per Delivery Charge</th>
                <th>Per KM</th>
                <th>Status</th>
                <th className="text-right">Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>{item.perDeliveryCharge}</td>
                  <td>{item.perKM}</td>
                  <td>
                    {item.status === 'Active' && (
                      <div className="chip chip-success mr-1">
                        <div className="chip-body">
                          <span className="chip-text">Active</span>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="text-right">
                    <a
                      href={`https://newpos.7yug.com/delivery/${item.id}/edit`}
                      className="btn btn-icon btn-info mr-1 mb-1 waves-effect waves-light"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit Entry"
                    >
                      <i className="feather icon-edit"></i>
                    </a>
                    <button
                      type="button"
                      className="btn btn-icon btn-danger mr-1 mb-1 waves-effect waves-light"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete Entry"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="feather icon-trash-2"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
      </div>
      );
    
}

export default DeliveryStaff
