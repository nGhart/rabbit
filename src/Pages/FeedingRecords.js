import React from 'react';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

const FeedingRecords = () => {
  const feeding = [
    {
      date: '01/01/01',
      feed: 'mix',
      livestock: 20,
      serving: 50,
      leftover: 200,
      leftoverPer: 2,
      id: uuidv4(),
    },
    {
      date: '02/01/01',
      feed: 'mix',
      livestock: 20,
      serving: 60,
      leftover: 206,
      leftoverPer: 3,
      id: uuidv4(),
    },
  ];
  return (
    <>
      <h2>Feeding Records</h2>

      <Table bordered hover responsive="sm">
        <thead>
          <tr>
            <th>DATE</th>
            <th>FEED</th>
            <th>LIVESTOCK COUNT</th>
            <th>SERVING</th>
            <th>LEFTOVER</th>
            <th>AVERAGE</th>
          </tr>
        </thead>
        <tbody>
          {feeding.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
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

export default FeedingRecords;
