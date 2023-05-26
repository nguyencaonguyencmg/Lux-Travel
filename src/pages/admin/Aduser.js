import React from 'react';
import './css/admin.css'
import AdNav from './Adnav'
import AdHeader from './Adheader'
import TableUser from './Tableuser'
import { Link } from 'react-router-dom';


export default function AdUser(){
    return(
        <React.Fragment>
            <AdNav />
            <section className="page-content">
                <AdHeader />
                <TableUser />
            </section>
            
        </React.Fragment>
    );
};

