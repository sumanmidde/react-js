import React from 'react';
import "./home.css";
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/charts/Chart';
import TableList from '../../components/table/Table';

function Home() {
    return (<div className='home'>
        <SideBar />
        <div className="homecontainer">
            <NavBar />
            <div className="widgets">
                <Widget type="user" />
                <Widget />
                <Widget />
                <Widget />
            </div>
            <div className="charts">
                <Featured />
                <Chart aspect={2 / 1} title="Total six months revenue" />
            </div>
            <div className="listContainer">
                <div className="listTitle">
                    Latest Transactions
                </div>
                <TableList />
            </div>
        </div>
    </div>);
}

export default Home;