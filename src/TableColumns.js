import React from 'react'
import ColumnFilter from './FilteringComponent'

export const Columns = [
  {Header: 'Username',
accessor: "Username"},

  {Header:'Address',
   accessor: "Address"},

  {Header:'PostCode',
    accessor:"PostCode",
  Filter: ColumnFilter },

  {Header:'Details',
  accessor: "Details"},


  {Header:'Date',
  accessor:"Date" },


  {Header:'Score',
  accessor:"Score"},

]
 export default Columns;
