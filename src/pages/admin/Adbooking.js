import React from 'react';
import './css/admin.css'
import AdNav from './Adnav'
import AdHeader from './Adheader'
import AdTableRoom from './AdtableRoom'
import { Link } from 'react-router-dom';


export default function AdBooking(){
    return(
        <React.Fragment>
            <AdNav />
            <section className="page-content">
                <AdHeader />
                <AdTableRoom />
            </section>
            
        </React.Fragment>
    );
};


