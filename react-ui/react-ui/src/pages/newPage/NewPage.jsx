import React, { useState } from 'react';
import "./newPage.css";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
function NewPage() {
    const [file, setFile] = useState("");

    return (<div className="new">
        <SideBar />
        <div className="newContainer">
            <NavBar />
            <div className="top1">
                <h1>Add new user</h1>
            </div>
            <div className="bottom1">
                <div className="left1">
                    <img src={file ? URL.createObjectURL(file) :
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXo5z8G7uW-6LOy0KlcAkvhsHHVx9nb3mYt-dCQI4&s"} alt="" className="imgItem" />
                </div>
                <div className="right">
                    <form className='fields'>
                        <div className="formInputs">
                            <label htmlFor='file'> Image:<DriveFolderUploadIcon className='ic' /></label>
                            <input type="file" id='file' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <div className="formInputs">
                            <label>User name:</label>
                            <input type="text" placeholder="amar" />
                        </div>
                        <div className="formInputs">
                            <label>Name and surname:</label>
                            <input type="text" placeholder="amar" />
                        </div>
                        <div className="formInputs">
                            <label>Email:</label>
                            <input type="Email" placeholder="amar@gmail.com" />
                        </div>
                        <div className="formInputs">
                            <label>Phone no:</label>
                            <input type="Email" placeholder="+91 69874521" />
                        </div>
                        <div className="formInputs">
                            <label>Password:</label>
                            <input type="password" />
                        </div>
                        <div className="formInputs">
                            <label>Address:</label>
                            <input type="text" placeholder="elston 9 phase yd" />
                        </div>
                        <div className="formInputs">
                            <label>Country:</label>
                            <input type="text" placeholder="usa" />
                        </div>

                        {/* {inputs.map(input => {
                            <div className="formInputs" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.text} placeholder={input.placeholder} />
                            </div>
                        })} */}

                        <button>Save</button>


                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default NewPage;