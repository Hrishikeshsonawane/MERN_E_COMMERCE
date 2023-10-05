import React,{useRef,useMemo,useState} from 'react'
import "./DashBoard.css"
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
 
const DashBoard = () => {
    const gridRef = useRef(null);
    

      const [rowData] = useState([
    {   "Sr_no": "1",
        "product_name": "Prescription Glasses",
        "category": "glassess",
        "company_name": "Warby Parker",
        "price": "$199.99",
        "ratings": "4.5",
        "description": "Customizable prescription glasses for clear vision",
        "image": "0000111100000111",
        "quantity" : 2
    } 
    
  ]);

  const columnDefs = useMemo(() => [
    {field:"Sr_no"},
    { field: 'category' },
  { field: "product_name"},
  { field: 'company_name' },
  { field: 'description' },
  { field: 'quantity' },
  { field: 'ratings' },
  {field:"Actions"}
], []);

const defaultColDef = useMemo(() => ({
  sortable: true,
}), []);


  return (
     
    <div className="ag-theme-alpine">
    <AgGridReact
      ref={gridRef}
      rowData={rowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
    //  frameworkComponents={frameworkComponents}

    />
    </div>
     

  )
}

export default DashBoard
