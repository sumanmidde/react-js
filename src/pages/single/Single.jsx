import React from 'react';
import "./single.css";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Chart from "../../components/charts/Chart";
import TableList from "../../components/table/Table";

function Single() {
    return (<div className="single">
        <SideBar />

        <div className="singleContainer">
            <NavBar />
            <div className="top">
                <div className="left">
                    <div className="editButton">Edti</div>
                    <h1 className="leftTitle">information</h1>
                    <div className="imgItem">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRCBPP2a020nqAeBgQwpEKKQ2oTbJrFe-ShtmKANG&s' alt="" className="itemImg" />
                        <div className="detalis">
                            <h1 className="itemTitle">Amar</h1>
                            <div className="titleDetalis">
                                <span className="detailsKey">Emali:</span>
                                <span className="detailsValue">amar@gmail.com</span>
                            </div>
                            <div className="titleDetalis">
                                <span className="detailsKey">Phone No:</span>
                                <span className="detailsValue">+91 9875485125</span>
                            </div>
                            <div className="titleDetalis">
                                <span className="detailsKey">Address:</span>
                                <span className="detailsValue">Elton 9th phase yd,new york</span>
                            </div>
                            <div className="titleDetalis">
                                <span className="detailsKey">Country:</span>
                                <span className="detailsValue">USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={3 / 1} title="last 6 months revenue" />
                </div>
            </div>
            <div className="buttom">
                <TableList />
            </div>
        </div>
    </div>);
}

export default Single;