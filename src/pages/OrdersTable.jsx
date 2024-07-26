import React from 'react';
import { Container, Table } from 'react-bootstrap';

const OrdersTable = () => {
 
  const orders = [
    {
      id: 1,
      orderId: 'ORD-001',
      store: 'Store A',
      user: 'John Doe',
      phone: '123-456-7890',
      address: '123 Main St, City, Country',
      totalAmount: 150.75,
      options: 'View / Edit'
    },
    {
      id: 2,
      orderId: 'ORD-002',
      store: 'Store B',
      user: 'Jane Smith',
      phone: '987-654-3210',
      address: '456 Elm St, Town, Country',
      totalAmount: 200.25,
      options:[ <button type="button" class="btn btn-danger">Delete</button>,
        <button type="button" class="btn btn-info">Edit</button>
      ]
    },
    
  ];

  return (
    <Container className="my-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Store</th>
            <th>User</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Total Amount</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.store}</td>
              <td>{order.user}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                {/* {order.options} */}
              <button type="button" class="btn btn-success"><span class="material-symbols-outlined">
visibility
</span></button>
              <button type="button" class="btn btn-info"><span class="material-symbols-outlined">
check
</span></button>
              <button type="button" class="btn btn-danger"><span class="material-symbols-outlined">
close
</span></button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrdersTable;
