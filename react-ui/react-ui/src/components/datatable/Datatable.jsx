import React, { useState } from 'react';
import "./datatable.css";
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatableSource";
import { Link } from "react-router-dom";
function Datatable() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const actionColumn = [{
        field: "action", headerName: "ACTIONS", width: 200, renderCell: (params) => {
            return <div className='cellWithAction'>
                <Link to="/single" >
                    <div className='viewButton'>VIEW</div>
                </Link>

                <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>DELETE</div>
            </div>
        }
    }];

    return (
        <div className="datatable">
            <div className="dataTableAdd">
                Add New User
                <Link to="/new" className='addNew'>
                    Add new
                </Link>
            </div>

            <DataGrid className='dataGrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />

        </div>
    );
}

export default Datatable;