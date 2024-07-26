import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


const ManageStoreCategory = () => {
    const data = [
        {
          id: 1,
          imgSrc: "https://newpos.7yug.com/upload/cate/1661154196544.png",
          category: "Restaurants",
          status: "Active",
          editUrl: "https://newpos.7yug.com/cate/1/edit",
          deleteUrl: "https://newpos.7yug.com/cate/delete/1",
        },
        {
          id: 2,
          imgSrc: "https://newpos.7yug.com/upload/cate/1628325088660.png",
          category: "Fast Food",
          status: "Active",
          editUrl: "https://newpos.7yug.com/cate/2/edit",
          deleteUrl: "https://newpos.7yug.com/cate/delete/2",
        },
        
        
        
      ];
      
  return (
     <div className="row" >
        <div className="col-12">
          <div className="card">
            <div className="card-content">
            <div className="card-body titleHead">
                <h4 className="card-title">
                  Manage Store category
                  
                </h4>
                <Link to="/cate/add" className="btn btn-primary float-right">
                  Add New
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Image</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th className="text-right">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td width="10%">{item.id}</td>
                        <td width="15%">
                          <img src={item.imgSrc} height="60px" alt={item.category} />
                        </td>
                        <td width="25%">{item.category}</td>
                        <td width="25%">
                          <div className="chip chip-success">
                            <div className="chip-body">
                              <span className="chip-text">{item.status}</span>
                            </div>
                          </div>
                        </td>
                        <td width="25%" className="text-right">
                          <a
                            className="btn btn-icon btn-info"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="Edit Entry"
                            href={item.editUrl}
                          ><span class="material-symbols-outlined">
                          border_color
                          </span>
                            <i className="feather icon-edit"></i>
                          </a>
                          <a
                            type="button"
                            className="btn btn-icon btn-danger"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="Delete Entry"
                            // onClick={() => confirmAlert(item.deleteUrl)}
                          ><span class="material-symbols-outlined">
                          delete
                          </span>
                            <i className="feather icon-trash-2"></i>
                          </a>
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
};

export default ManageStoreCategory;
