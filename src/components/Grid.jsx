import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const style = {
    width: '100%',
    height: '100vh',
}


function Grid({ products }) {
    const filteredProduct = products.reduce((acc, product) => {
        console.log(product);
        acc.push({ title: product.title, price: product.price, brand: product.brand })
        return acc
    }, [])
    console.log(filteredProduct);
    const [rowData] = useState(filteredProduct  );

    const [columnDefs] = useState([
        { field: 'title',filter: 'agTextColumnFilter', },
        { field: 'price',filter: 'agNumberColumnFilter',  },
        { field: 'brand',filter: 'agTextColumnFilter', }
    ])
  return (
      <div>
          <div className="ag-theme-alpine" style={style}>
           <AgGridReact
               rowData={rowData}
                  columnDefs={columnDefs}
                  pagination={true}
                  paginationPageSize={10}
              >
           </AgGridReact>
       </div>
    </div>
  )
}

export default Grid