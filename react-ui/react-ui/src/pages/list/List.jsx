import React from 'react';
import "./list.css";
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import Datatable from '../../components/datatable/Datatable';
function List() {
  return (<div className="list">
    <SideBar />
    <div className="listContainer">
      <NavBar />
      <Datatable />

    </div>
  </div>);
}

export default List;