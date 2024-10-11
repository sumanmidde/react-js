
export const userRows = [
    {
        id: "54",
        username: "rajesh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "active ",
        email: "re@gmail.com",
        age: "25"
    },
    {
        id: "55",
        username: "rajesh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "pending ",
        email: "re@gmail.com",
        age: "25"
    },
    {
        id: "56",
        username: "rajesh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "passive ",
        email: "re@gmail.com",
        age: "25"
    },
    {
        id: "53",
        username: "rajesh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "pending ",
        email: "re@gmail.com",
        age: "25"
    },
    {
        id: "58",
        username: "rajesh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "passive ",
        email: "re@gmail.com",
        age: "25"
    },
    {
        id: "50",
        username: "rajesh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        status: "active ",
        email: "re@gmail.com",
        age: "25"
    },
];
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'username', headerName: 'UserName', width: 200, renderCell: (params) => {
            return <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt=" avatar" />
                {params.row.username}


            </div>
        }
    },
    {
        field: 'email',
        headerName: 'EMAIL',
        type: 'number',
        width: 90,
    },
    { field: 'age', headerName: 'AGE', width: 200 },

    {
        field: 'status', headerName: 'STATUS', width: 200,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        }
    }

];