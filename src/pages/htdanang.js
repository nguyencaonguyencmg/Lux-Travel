import React from 'react';
import Header from './header'
import Footer from './footer'
import Suggest from './suggest'
import Product from './product'

function HtDanang(){
    return(
        <React.Fragment>
            
            <div id="main">
                <Header />
                
            </div>  
            
            <Suggest />
            <div id="content" class="container">
                <div className="hotel-section">
                    <div className="hotel">
                        <h1 className="hotel-header">Điểm dừng chân tại Đà Nẵng</h1>
                    </div>
                <Product />
                </div>
            </div>  
            
        <Footer />
        </React.Fragment>
    );
};
export default HtDanang;

