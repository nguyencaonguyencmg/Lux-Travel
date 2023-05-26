import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function Checkout() {
    return (
      <React.Fragment>
          <div id="main">
              <Header />
              
          </div>
          <div id="content" className="container">
            <div className="order-summery-shipping-info">
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-md-6 order-summery-shipping-info-left">
                            <h2><b>Thanh toán đặt phòng</b> </h2>
                            <p>Đặt phòng nhanh chóng, tiện lợi.</p>
                            <p><b>Đảm bảo hoàn tiền trong vòng 24h</b></p>

                            <div className="shipping-form">
                                <form method="post" id="register-form">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">

                                            <input type="name" className="form-control" id="" placeholder="Họ và Tên"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <p>Vui lòng huyển khoản đến:</p>
                                            <input type="name" className="form-control" id="" defaultValue="CTTNHH LuxTravel"  readOnly/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p>Số tài khoản:</p>
                                        <input type="text"  className="form-control" id="" defaultValue="0538-1652-1624" readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <p>Mã thanh toán:</p>
                                        <input type="text" className="form-control" id="" defaultValue=""readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <p>Số tiền cần thanh toán:</p>
                                        <input type="text" className="form-control" id="" defaultValue=""readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" placeholder="Email"/>
                                    </div>

                                    <button>
                                        <Link to="/success" className="btn btn-primary btn-success-playboy-green btn-success-playboy-green-block">Thanh toán</Link>

                                    </button>

                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 order-summery-shipping-info-right-outer">

                            <div className="order-summery-shipping-info-right">
                                <div className="product-preview">

                                    <div className="row">
                                        <div className="col-md-7 product-preview-left">
                                            <h3>Neo-classNameic</h3>
                                        </div>
                                        <div className="col-md-5 product-preview-right">
                                            <img src="assets/img/homestay/ht1 (1).jpg" alt=""/>
                                        </div>
                                    </div>

                                </div>

                                <ul>
                                    <li>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="size">Từ ngày</label>
                                            <div className="date-item">
                                                <i className="far fa-calendar-alt"></i>
                                                <input id="myID" type="datetime-local" placeholder="Ngày đến" readOnly/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="color">Đến ngày</label>
                                            <div className="date-item">
                                                <i className="far fa-calendar-alt"></i>
                                                <input id="myID" type="datetime-local"  placeholder="Ngày đi" readOnly/>
                                            </div>
                                        </div>
                                    </div>
                                    </li>

                                    <li>
                                    <div className="product-count">
                                        <label htmlFor="size">Số khách</label>
                                        <form action="#" className="display-flex">
                                            <input type="text" name="quantity" defaultValue="1" className="qty" readOnly/>
                                        </form>
                                    </div>
                                    </li>

                                    <li >
                                        <span><b>Tổng tiền </b></span>
                                        <span><b>$59.95</b> </span>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
          <Footer />
      </React.Fragment>
    )
}

