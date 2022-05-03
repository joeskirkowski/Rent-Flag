
import React,{useState,useEffect} from 'react';
import './App.css';
import { Data } from './NewData.js'

export const JsonReader = () => {
  return (
    <>
    <ArchiveHeader />
      <div className="data-container">Welcome to RF</div>
        {Data.map((data, key) => {
          return (
            <div key={key}>
            <JsonTable
            key = {key}
            Username = {data.Username}
            Address = {data.Address}
            PostCode = {data.PostCode}
            Details ={data.Details}
            Date ={data.Date}
            Score ={data.Score}
             />
             </div>
          );
        })}
    </>
  );
};

const ArchiveHeader = () => {
  return (
    <header className="ArchiveHeader">
      <h2>Rent Flag</h2>
    </header>
  );
};

const JsonTable= ({ Username, Address, PostCode, Details, Date, Score }) => {
  if (!Username) return <div />;
  return (
<table className="ArchiveTable">
<thead>
  <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Postcode</th>
        <th>Issue</th>
        <th>Date</th>
        <th>Score</th>
    </tr>
</thead>
      <tbody>

          <td>
            {Username}
          </td>
          <td>
            {Address}
          </td>
          <td>
            {PostCode}
          </td>
          <td>
          {Details}
          </td>
          <td>
          {Date}
          </td>
          <td>
            {Score}
          </td>

      </tbody>
    </table>
  );
};
export default JsonReader;
