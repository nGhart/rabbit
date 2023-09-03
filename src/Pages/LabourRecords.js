import React from 'react';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';
const LabourRecords = () => {
  const workers = [
    {
      name: 'Kofi',
      role: 'secretary',
      department: 'hr',
      category: 'permanent',
      startDate: '03/05/2018',
      endDate: 'TBD',
      id: uuidv4(),
    },
    {
      name: 'Kwame',
      role: 'accountant',
      department: 'finance',
      category: 'permanent',
      startDate: '03/05/2018',
      endDate: 'TBD',
      id: uuidv4(),
    },
  ];
  return (
    <>
      <h2>Labour Records</h2>

      <Table bordered hover responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>CATEGORY</th>
            <th>START DATE</th>
            <th>END DATE</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.department}</td>
                <td>{item.category}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default LabourRecords;
