import React from 'react';
import './css/admin.css'
import AdNav from './Adnav'
import AdHeader from './Adheader'
import TableLocation from './Tablelocation'
import { Link } from 'react-router-dom';


export default function AdLocation(){
    return(
        <React.Fragment>
            <AdNav />
            <section className="page-content">
                <AdHeader />
                <TableLocation />
            </section>
            
        </React.Fragment>
    );
};

