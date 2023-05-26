import React from 'react';
import './css/admin.css'
import { Link } from 'react-router-dom';


function AdNav(){
    return(
        <React.Fragment>
            <header className="page-header">
                <nav>
                    <Link to="/admin">
                        <img className="logo" src="../assets/img/logo.png" alt="Valentine logo"/>
                    </Link>
                    <ul className="admin-menu">
                        <li className="menu-heading">
                            <h3>Admin</h3>
                        </li>
                        <li >
                            <Link to="/admin" className="fa fa-bed">
                                <i> Rooms</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/aduser" className="fa fa-user-circle">
                            <i> Users</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adlocation" className="fa fa-building">
                            <i> Location</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adbooking" className="fa fa-calendar-check">
                            <i> Booking</i>
                            </Link>
                        </li>
                        <li className="menu-heading">
                            <h3>Settings</h3>
                        </li>
                        <li>
                            <Link to="" className="fa fa-cogs">
                            <i> Settings</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="fa fa-wrench">
                            <i> Options</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="">
                            
                            <img src="https://img.icons8.com/ios-glyphs/25/000000/logout-rounded-left.png"/>
                            <i> Logout</i>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="collapse-btn" aria-expanded="true" aria-label="collapse menu">
                            <i className="fa fa-chevron-left"> Back</i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
};
export default AdNav;

