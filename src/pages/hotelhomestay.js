import React from 'react'
import Header from './header'
import Footer from './footer'

export default function HotelHomestay(){
    return (
        <React.Fragment>
            <div id="main" >
                <Header />
            </div>  
            <div id="content" class="container">
                <div className="hotel-section">
                    <div className="hotel">
                        <h3 className="hotel-header">Khách sạn hàng đầu</h3>
                        <p className="hotel-sub-heading">Tận hưởng không gian đầy trang trọng và thoải mái</p>
                    </div>
                    <div className="hotel-list">
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow"  src="assets/img/homestay/ht1 (1).jpg" alt=" Vinpearl Đà Nẵng"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> Vinpearl Đà Nẵng</h5>
                                    <p className="hotel-number ">1.999.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/vin (2).jfif" alt=" Phú Quốc"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> Vinpearl Phú Quốc</h5>
                                    <p className="hotel-number ">1.800.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/X51_zZST6MzWzPgMTsZ7ANJI.jfif" alt=" Nha Trang"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> Mường Thanh Nha Trang</h5>
                                    <p className="hotel-number ">980.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/ht1 (1).jpg" alt="Quy Nhơn"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> FLC Quy Nhơn</h5>
                                    <p className="hotel-number ">1.650.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/ks (7).jpg" alt="Sầm Sơn"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> FLC Sầm Sơn</h5>
                                    <p className="hotel-number ">1.400.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/ks (3).jfif" alt="Vinpearl Nha Trang Bay"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> Vinpearl Nha Trang Bay</h5>
                                    <p className="hotel-number ">1.800.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/ks (4).jfif" alt="Lotte Hà Nội"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> Lotte Hà Nội</h5>
                                    <p className="hotel-number ">999.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="hotel-item">
                            <a href="">
                                <img className="hotel-img grow" src="assets/img/homestay/vinqb.jpg" alt="Vinpearl Quảng Bình"/>
                                <div className="hotel-body">
                                    <h5 className="hotel-heading"> Vinpearl Quảng Bình</h5>
                                    <p className="hotel-number ">1.320.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="homestay-section">
                    <div className="homestay">
                        <h3 className="homestay-header">Homestay cao cấp</h3>
                        <p className="homestay-sub-heading">Không gian riêng tư dành cho gia đình hoặc cặp đôi</p>
                    </div>
                    <div className="homestay-list">
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow"  src="assets/img/homestay/hs-dl7.png" alt=" Homestay Đà Lạt"/>
                                <div className="homestay-body  ">
                                    <h5 className="homestay-heading"> Homestay Dốc House <br></br>- Đà Lạt</h5>
                                    <p className="homestay-number ">2.150.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-vt9.png" alt="Homestay Vũng Tàu "/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading">Homestay Lily's<br></br>- Vũng Tàu </h5>
                                    <p className="homestay-number ">1.800.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-hn.png" alt="Homestay Hà Nội"/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading">Homestay Nấm<br></br>- Hà Nội </h5>
                                    <p className="homestay-number ">980.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-sp6.png" alt="Homestay SaPa"/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading"> Homestay Ruahouse<br></br>- SaPa</h5>
                                    <p className="homestay-number ">1.100.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-dn1.png" alt="Homestay Đà Nẵng"/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading">Homestay Cozy<br></br>- Đà Nẵng</h5>
                                    <p className="homestay-number ">2.300.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-pt4.png" alt="Homestay Phan Thiết"/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading"> Homestay Sun<br></br>- Phan Thiết</h5>
                                    <p className="homestay-number ">1.000.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-hl2.png" alt="Homestay MyHouse - Hạ Long"/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading"> Homestay MyHouse <br></br>- Hạ Long</h5>
                                    <p className="homestay-number ">950.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        <div className="homestay-item">
                            <a href="">
                                <img className="homestay-img grow" src="assets/img/homestay/hs-sp.png" alt="Homestay Lee's House"/>
                                <div className="homestay-body">
                                    <h5 className="homestay-heading"> Homestay Lee's House<br></br>- SaPa</h5>
                                    <p className="homestay-number ">1.450.000vnđ/đêm</p>
                                    <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="diemhot">
                    <div className="diemhot-header">
                        <h3 className="diemhot-heading">Điểm đến yêu thích</h3>
                        <p className="diemhot-sub-heading">Những địa điểm được gợi ý bởi Luxtravel</p>
                    </div>
                    <div className="goiy" >
                        <div className="hot-item hot-item-1">
                            <a href="">
                                <img className="hot-img-1" src="assets/img/diadiem/hanoi.jpg" alt="Hà Nội"/>
                                <p className="hot-name">Hà Nội</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-2">
                            <a href="">
                                <img className="hot-img-2" src="assets/img/diadiem/caobang.jpg" alt="Cao Bằng"/>
                                <p className="hot-name">Cao Bằng</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-3">
                            <a href="">
                                <img className="hot-img-3" src="assets/img/diadiem/danang.jfif" alt="Đà Nẵng"/>
                                <p className="hot-name">Đà Nẵng</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-4">
                            <a href="" >
                                <img className="hot-img-4" src="assets/img/diadiem/halong.jfif" alt="Hạ Long"/>
                                <p className="hot-name">Hạ Long</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-5">
                            <a href="">
                                <img className="hot-img-5" src="assets/img/diadiem/HCM.jfif" alt="Sài Gòn"/>
                                <p className="hot-name">Hồ Chí Minh</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-6">
                            <a href="">
                                <img className="hot-img-6" src="assets/img/diadiem/hoian.jfif" alt="Hội An"/>
                                <p className="hot-name">Hội An</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-7">
                            <a href="">
                                <img className="hot-img-7" src="assets/img/diadiem/hue.jpg" alt="Huế"/>
                                <p className="hot-name">Huế</p>
                            </a>
                        </div>
                        <div className="hot-item hot-item-8">
                            <a href="">
                                <img className="hot-img-8" src="assets/img/diadiem/sapa1.jpg" alt="SaPa"/>
                                <p className="hot-name">SaPa</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>  

            <Footer />
        </React.Fragment>
    )
}