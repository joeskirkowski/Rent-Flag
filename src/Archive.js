import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import Columns from './TableColumns'
import Data from './NewData'
import './App.css'
import GlobalFilter from './SearchBar'
import {Form, Row, Col, Button, FormControl, InputGroup, Nav, Navbar, Container, Card, ListGroup, NavDropdown, Offcanvas, Text} from 'react-bootstrap/'




export const FilteringTable = () => {


const columns = useMemo(()=> Columns, [])
const data = useMemo(()=> Data, [])

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter,} =  useTable({columns:columns,
            data: data}, useGlobalFilter)

const { globalFilter } = state

  return (
    <>

    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} className="Search"/>
<Card className="Home bg-dark">
  <table className="ArchiveTable" {...getTableProps}>
  <thead>
  {headerGroups.map((headerGroup) =>(
    <tr {...headerGroup.getHeaderGroupProps}>
    {headerGroup.headers.map(column => (
      <th className="TableHead" {...column.getHeaderProps()}>
      {column.render('Header')}</th>
    ))}

    </tr>
  ))}
  </thead>
  <tbody {...getTableBodyProps()}>
  {
    rows.map(row => {
      prepareRow(row)
      return(
        <tr {...row.getRowProps()}>
        {row.cells.map( cell => {
          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
        })}

        </tr>)
    })
  }
  </tbody>
  </table>
</Card>
  </>
  )
}
export default FilteringTable;
