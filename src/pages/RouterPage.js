import React from 'react';
import {BrowserRouter as Switch } from "react-router-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home'
import HotelHomestay from './hotelhomestay';
import HtDanang from './htdanang';
import HtNhatrang from './htnhatrang';
import HtVungtau from './htvungtau';
import HtHalong from './hthalong';
import HtPhanthiet from './htphanthiet'; 
import HtSapa from './htsapa'; 
import HtDalat from './htdalat'; 
import Uudai from './cs-ud';
import SignIn from './signin';
import Contact from './contact';
import Chitiet from './chitiet';
import Checkout from './checkout';
import Success from './success';
import AdHome from './admin/Adhome';
import AdUser from './admin/Aduser';
import AdBooking from './admin/Adbooking';
import AdLocation from './admin/Adlocation';

export default function RouterPage(){
    return (
        <div>
            <Router>
                <Switch>
                    <Route path = "/" exact component = {Home}/>
                    <Route path = "/hotelhomestay" exact component = {HotelHomestay}/>
                    <Route path = "/htdanang" exact component = {HtDanang}/>
                    <Route path = "/htnhatrang" exact component = {HtNhatrang}/>
                    <Route path = "/htvungtau" exact component = {HtVungtau}/>
                    <Route path = "/hthalong" exact component = {HtHalong}/>
                    <Route path = "/htphanthiet" exact component = {HtPhanthiet}/>
                    <Route path = "/htdalat" exact component = {HtDalat}/>
                    <Route path = "/htsapa" exact component = {HtSapa}/>
                    <Route path = "/uudai" exact component = {Uudai}/>
                    <Route path = "/signin" exact component = {SignIn}/>
                    <Route path = "/contact" exact component = {Contact}/>
                    <Route path = "/chitiet" exact component = {Chitiet}/>
                    <Route path = "/checkout" exact component = {Checkout}/>
                    <Route path = "/success" exact component = {Success}/>
                    <Route path = "/admin" exact component = {AdHome}/>
                    <Route path = "/aduser" exact component = {AdUser}/>
                    <Route path = "/adbooking" exact component = {AdBooking}/>
                    <Route path = "/adlocation" exact component = {AdLocation}/>
                </Switch>
            </Router>
        </div>
    )
}