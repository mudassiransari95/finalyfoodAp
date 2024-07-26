import React from 'react';
import { Link } from 'react-router-dom';

const ManageStore = () => {
  const data = [
    {
      id: 34,
      name: 'benim dukkan',
      username: '123456789',
      password: '12345',
      status: 'Disabled',
      subscription: 'Payment Pending',
      type: ['Delivery', 'Dinein']
    }
    // Add more items as needed
  ];

  const handleStatusChange = (id) => {
    const confirmUrl = `https://newpos.7yug.com/storeAction?action=status&id=${id}`;
    if (window.confirm('Are you sure you want to change the status?')) {
      console.log(`Changing status for item with ID ${id}`);
    }
  };

  const handleMakeTrending = (id) => {
    const confirmUrl = `https://newpos.7yug.com/storeAction?action=trend&id=${id}`;
    if (window.confirm('Are you sure you want to make this store trending?')) {
      console.log(`Making store with ID ${id} trending`);
    }
  };

  const handleOpenStore = (id) => {
    const confirmUrl = `https://newpos.7yug.com/storeAction?action=open&id=${id}`;
    if (window.confirm('Are you sure you want to open this store now?')) {
      console.log(`Opening store with ID ${id}`);
    }
  };

  const handleDelete = (deleteUrl) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      console.log(`Deleting entry: ${deleteUrl}`);
    }
  };

  return (
    <div className="table-responsive">

<div id='addStoreNewbtn' ><Link to="/store/add" className="btn btn-primary float-right">
                  Add New
                </Link></div>

      <table className="table mb-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Logins</th>
            <th>Status & Subscription Plan</th>
            <th>Type</th>
            <th className="text-right">Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td width="5%">{item.id}</td>
              <td width="5%"></td>
              <td width="12%">
                {item.name}
                <br />
                <small style={{ color: 'red' }}>From App</small>
              </td>
              <td width="12%">
                Username: {item.username}
                <br />
                <small>Password: {item.password}</small>
              </td>
              <td width="10%">
                <a
                  href={`https://newpos.7yug.com/storeAction?action=status&id=${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleStatusChange(item.id); }}
                >
                  {item.status === 'Disabled' && (
                    <div className="chip chip-danger mr-1">
                      <div className="chip-body">
                        <span className="chip-text">Disabled</span>
                      </div>
                    </div>
                  )}
                </a>
                <a
                
                >
                  {item.subscription === 'Payment Pending' && (
                    <div className="chip chip-warning mr-1">
                      <div className="chip-body">
                        <span className="chip-text">Payment Pending</span>
                      </div>
                    </div>
                  )}
                </a>
              </td>
              <td width="10%">
                {item.type.map((type, index) => (
                  <p key={index} style={{ color: type === 'Dinein' ? 'green' : 'inherit' }}>{type}</p>
                ))}
              </td>
              <td width="28%" className="text-right">
              
              
                <a
                  href={`https://newpos.7yug.com/store/${item.id}/edit`}
                  className="btn btn-info mr-1 mb-1 waves-effect waves-light"
                  title="Edit Entry"
                >Edit
                  <i className="feather icon-edit"></i>
                </a>
                <button
                  type="button"
                  className="btn btn-danger mr-1 mb-1 waves-effect waves-light"
                  title="Delete Entry"
                  onClick={() => handleDelete(`https://newpos.7yug.com/store/delete/${item.id}`)}
                ><span class="material-symbols-outlined">
                delete
                </span>
                  <i className="feather icon-trash-2"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStore;
