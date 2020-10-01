import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (results.length === 0) return;
    axios({ method: 'get', url: 'http://127.0.0.1:3005/api/file' })
    .then(({ data }) => {
      setResults([ ...results, ...data ]);
    })
  }, [count]);

  const [fileUpload, setFileUpload] = useState(null);
  const handleFileChange = (event) => {
    setFileUpload(event.target.files[0])
  }
  useEffect(() => {
    if (fileUpload === null) return;
    const formData = new FormData(); 
    formData.append( "file", fileUpload, fileUpload.name );
    axios({ method: 'post', url: 'http://127.0.0.1:3005/api/file', data: formData })
    .then(({ data }) => {
      setResults([ ...results, ...data ]);
    })
  }, [fileUpload]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Address Line 1',
        accessor: 'address1',
      },
      {
        Header: 'Address Line 2',
        accessor: 'address2',
      },
      {
        Header: 'County',
        accessor: 'county',
      },
      {
        Header: 'Sales',
        accessor: 'sales',
      }
    ],
    []
  )

  const tableInstance = useTable({ columns, data: results })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: results })

  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <input type="file" onChange={handleFileChange} /> 
        </div> 
      </header>
      {(results.length > 0) ? (
          <table className="App-table" {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>      
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
