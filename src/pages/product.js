import React from 'react';
import { Link } from 'react-router-dom'

export default function Product(){
    return(
        <React.Fragment>
            
                <div className="hotel-list">
                    <div className="hotel-item">
                        <Link to = "/chitiet">
                            <img className="hotel-img"  src="assets/img/homestay/ks (5).jfif" alt=" FLC Nha Trang"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> FLC Nha Trang</h5>
                                <p className="hotel-number ">2.299.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/ht (10).jpg" alt=" Ốc house"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Ốc house</h5>
                                <p className="hotel-number ">800.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/onenight.jfif" alt=" One-Night Hotel"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> One-Night Hotel</h5>
                                <p className="hotel-number ">1.980.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/X51_zZST6MzWzPgMTsZ7ANJI.jfif" alt=" Mường Thanh Nha Trang"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Mường Thanh Nha Trang</h5>
                                <p className="hotel-number ">980.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/ks (7).jpg" alt="Sầm Sơn"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> FLC Sầm Sơn</h5>
                                <p className="hotel-number ">1.400.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/ks (3).jfif" alt="Vinpearl Nha Trang Bay"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Vinpearl Nha Trang Bay</h5>
                                <p className="hotel-number ">1.800.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/ks (4).jfif" alt="Lotte Hà Nội"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Lotte Hà Nội</h5>
                                <p className="hotel-number ">999.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/ks (4).jfif" alt="Lotte Hà Nội"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Lotte Hà Nội</h5>
                                <p className="hotel-number ">999.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/vinqb.jpg" alt="Vinpearl Quảng Bình"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Vinpearl Quảng Bình</h5>
                                <p className="hotel-number ">1.320.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                    <div className="hotel-item">
                        <Link to = "">
                            <img className="hotel-img" src="assets/img/homestay/vinqb.jpg" alt="Vinpearl Quảng Bình"/>
                            <div className="hotel-body">
                                <h5 className="hotel-heading"> Vinpearl Quảng Bình</h5>
                                <p className="hotel-number ">1.320.000vnđ/đêm</p>
                                <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                            </div>
                        </Link>
                    </div>
                        
                </div>
        </React.Fragment>
    )
}