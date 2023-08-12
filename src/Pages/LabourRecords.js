import React from 'react';
import Table from 'react-bootstrap/Table';
const LabourRecords = () => {
  return (
    <>
      <h2>LabourRecords</h2>

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
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>1</td>
            {/* {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))} */}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default LabourRecords;
