import React, { useState, useEffect } from "react";
import "./App.css";
import Papa from 'papaparse';


export default function Archive () {
    const [parsedCsvData, setParsedCsvData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("./RentFlagDB.csv");
            const reader = response.body.getReader();
            const result = await reader.read(); // raw array
            const decoder = new TextDecoder("utf-8");
            const csv = decoder.decode(result.value); // the csv text
            const results = Papa.parse(csv, { header: true, }); // object with { data, errors, meta }
            const rows = results.data; // array of objects
            setParsedCsvData(rows);
        }
        getData();
    }, []);
    return (
        <div className="Archive">
            <table className="ArchiveTable">
                <thead>
                    <tr className='ArchiveTable'>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Issue</th>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody className='ArchiveTable'>
                    {parsedCsvData &&
                        parsedCsvData.map((parsedData, index) => (
                            <tr key={index} className='ArchiveTable'>
                                <td>{parsedData.Name}</td>
                                <td>{parsedData.Address}</td>
                                <td>{parsedData.Postcode}</td>
                                <td>{parsedData.Issue}</td>
                                <td>{parsedData.Date}</td>
                                <td>{parsedData.Score}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
