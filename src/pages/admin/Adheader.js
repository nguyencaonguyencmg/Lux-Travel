import React from 'react';
import './css/admin.css'
import { Link } from 'react-router-dom';


function AdHeader(){
    return(
        <React.Fragment>
            <section className="search-and-user">
                <form>
                    <input type="search" placeholder="Search..."/>
                    <button type="submit" className="fa fa-search" aria-label="submit form">
                    </button>
                </form>
                <div className="admin-profile">
                    <span className="greeting">Welcome admin</span>
                    <div className="notifications fa fa-user-circle">
                    
                    </div>
                </div>
                </section>
                <section>
                <div className='site-info'>

                    <div id="quick-info" className='all-quick-info'>

                        <div className='info-icon'><i className="fa fa-bed"></i></div>

                        <div className='text-right'>
                            <div className='info-numbers'><span>1,324</span></div>
                            <div>Rooms</div>
                        </div>

                        <div className='info-box-footer'>

                            <a href='#' className='user-href'><span className="pull-left">View Details</span>

                            <span className='pull-right'><i className="fa fa-arrow-circle-right"></i></span></a>

                        </div>

                    </div>

                    <div id="quick-info2"  className='all-quick-info'>

                    <div className='info-icon'> <i className="fa">&#xf0c0;</i></div>

                    <div className='text-right'>
                        <div className='info-numbers'><span>2</span></div>
                        <div>Users</div>
                    </div>

                    <div className='info-box-footer'>

                        <a href='#' className='user-href' ><span className="pull-left">View Details</span>

                        <span className='pull-right'><i className="fa fa-arrow-circle-right"></i></span></a>

                    </div>

                    </div>

                    <div  className='all-quick-info'>

                    <div className='info-icon'> <i className="fa fa-building"></i></div>

                    <div className='text-right'>
                        <div className='info-numbers'><span>12</span></div>
                        <div>Location</div>
                    </div>

                    <div className='info-box-footer'>

                        <a href='#' className='user-href' ><span className="pull-left">View Details</span>

                        <span className='pull-right'><i className="fa fa-arrow-circle-right"></i></span></a>

                    </div>

                    </div>

                    <div className='all-quick-info'>

                    <div className='info-icon'><i className="fa fa-calendar-check"></i></div>

                    <div className='text-right'>
                        <div className='info-numbers'><span>150</span></div>
                        <div>Bookings</div>
                    </div>

                    <div className='info-box-footer'>

                        <a href='#' className='user-href'><span className="pull-left">View Details</span>

                        <span className='pull-right'><i className="fa fa-arrow-circle-right"></i></span></a>

                    </div>
                    </div>
                </div>
                
            </section>
        </React.Fragment>
    );
};
export default AdHeader;

