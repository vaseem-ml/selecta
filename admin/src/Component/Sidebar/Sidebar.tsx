import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <a className="simple-text logo-normal">
          Selecta
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="material-icons">bubble_chart</i>
              <p>General</p>
            </Link>
          </li>
          <li className="nav-item   ">
            <Link className="nav-link" to="/data">
              <i className="material-icons">dashboard</i>
              <p>Data</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/statistics">
              <i className="material-icons">person</i>
              <p>Statistics</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/targetting">
              <i className="material-icons">content_paste</i>
              <p>Targeting</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/brokering">
              <i className="material-icons">library_books</i>
              <p>Brokering</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/compare">
              <i className="material-icons">bubble_chart</i>
              <p>Compare</p>
            </Link>
          </li>

        </ul>
      </div>

    </>
  );
}

export default Sidebar;