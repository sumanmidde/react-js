import React from 'react';
import './table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableList() {
    const rows = [
        {
            id: "1214",
            product: "lab top",
            img: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3635&hei=2548&qlt=100,1&resMode=sharp2&size=3635,2548&chrss=full&imwidth=5000",
            customer: "rajesh",
            date: "01 may",
            amount: 45000,
            method: "cash on delivery",
            status: "approved"

        },
        {
            id: "2541",
            product: "mobile",
            img: "https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL320_.jpg",
            customer: "vikram",
            date: "12 jan",
            amount: 54782,
            method: "online payment",
            status: "pending"

        },
        {
            id: "1245",
            product: "tv",
            img: "https://m.media-amazon.com/images/I/71ecEh2Q4ZL._SL1500_.jpg",
            customer: "priya",
            date: "20 feb",
            amount: 58741,
            method: "online payment",
            status: "approved"

        }
    ];
    return (<div className="tableList">
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking Id</TableCell>
                        <TableCell className="tableCell">Product </TableCell>
                        {/* <TableCell className="tableCell">Image</TableCell> */}
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}

                        >
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="imgWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div></TableCell>
                            {/* <TableCell className="tableCell">{row.img}</TableCell> */}
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>);
}

export default TableList;