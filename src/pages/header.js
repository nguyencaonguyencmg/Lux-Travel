import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <React.Fragment>
            <div id="header" >
                <div className="info pl-3 container">
                    <div className="phone_mail">
                        <a href="#" className="phone-mail__text  pl-4 pulse">Luxtravel@gmail.com</a>
                        <a href="#" className="phone-mail__text  pl-4 pulse">0868.027.061</a>
                    </div>
                    <div className="help">
                        <a href="#" className="mr-3  pulse phone-mail__text"><i className="far fa-bell"> Thông báo</i></a>
                        <a className="phone-mail__icon"><i className="far fa-bell phone-mail__icon"></i></a>
                        <a href="tvkh.php" className="mr-3  pulse phone-mail__text" > <i className="far fa-question-circle"> Trợ giúp</i></a>
                        <a className="phone-mail__icon"><i className="far fa-question-circle phone-mail__icon"></i></a>
                        <nav className="ml-3 main-nav">
                            <ul id="nav">
                                <li >
                                    <span href="#" className=" phone-mail__text"><i className="nav-arrow-down fa fa-user-circle ">Tài khoản</i><i className="fa fa-angle-down"></i></span>
                                    <span className="phone-mail__icon"> <i className="fa fa-user-circle"></i>  <i className="fa fa-angle-down"></i></span>
                                    <ul className="subnav taikhoan text-center">
                                        <li><Link to ="/signin">Đăng Nhập</Link></li>
                                        <li><Link to ="/admin">Host</Link></li>
                                        <li><Link to ="">Đăng Xuất</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="border-bottom"></div>

                <div className="main-header container">
                    <ul id="nav-bar" class="">
                        <li><Link to ="/" >Trang chủ</Link></li>
                        <li>
                        <Link to ="/hotelhomestay" >Hotel và Homestay <i className="nav-arrow-down fas fa-angle-down"></i></Link>
                            <ul className="subnav">
                                <li><Link to ="/htdanang" >Hotel Đà Nẵng</Link></li>
                                <li><Link to ="/htnhatrang">Hotel Nha Trang</Link></li>
                                <li><Link to ="/htvungtau">Hotel Vũng Tàu</Link></li>
                                <li><Link to ="/hthalong">Hotel Hạ Long</Link></li>
                                <li><Link to ="/htdalat">Homestay Đà Lạt</Link></li>
                                <li><Link to ="/htphanthiet">Homestay Phan Thiết</Link></li>
                                <li><Link to ="/htsapa">Homestay Sapa</Link></li>
                            </ul>
                        </li>
                        <li><Link to ="/uudai">Chính sách và Ưu đãi</Link></li>
                        <li><Link to ="/contact">Chăm sóc khách hàng</Link></li>
                    </ul>
                    <section id="search" >
                        <div className="wraper">
                            <div className="search-content-items ">
                                <div className="search-content-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <input className="input-search" type="text" placeholder="Bạn muốn đi đâu" />
                                    <div className="autobox">
                                        <li>Hà Nội</li>
                                        <li>Hải Phòng</li>
                                        <li>Hà Giang</li>
                                        <li>Nghệ An</li>
                                        <li>Phú Quốc</li>
                                        <li>Phú Thọ</li>
                                    </div>
                                </div>
                                <div className="search-content-item">
                                    <i className="far fa-calendar-alt"></i>
                                    <input id="myID" type="datetime-local" placeholder="Ngày đến"/>
                                </div>
                                <div className="search-content-item">
                                    <i className="far fa-calendar-alt"></i>
                                    <input id="myID" type="datetime-local"  placeholder="Ngày đi"/>
                                </div>
                                <div className="search-content-item up-down-people">
                                    <i className="fas fa-user-check"></i>
                                    <input className="number-people" type="value" placeholder="Số người"/>
                                    <div className="number-box">
                                        <li>
                                            <div className="number-left">
                                                <p>Người lớn</p>
                                            </div>
                                            <div className="number-right nguoilon">
                                                <i className="fas fa-minus nguoilonMinus"></i>
                                                <span>0</span>
                                                <i className="fas fa-plus nguoilonPlus"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="number-left">
                                                <p>Trẻ em</p>
                                            </div>
                                            <div className="number-right treem">
                                                <i className="fas fa-minus treemMinus"></i>
                                                <span>0</span>
                                                <i className="fas fa-plus treemPlus"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="number-left">
                                                <p>Trẻ sơ sinh</p>
                                            </div>
                                            <div className="number-right sosinh">
                                                <i className="fas fa-minus sosinhMinus"></i>
                                                <span>0</span>
                                                <i className="fas fa-plus sosinhPlus"></i>
                                            </div>
                                        </li>
                                        <i className="fas fa-times number-close"></i>
                                    </div>
                                </div>
                                <div className="search-content-item">
                                    <button>Tìm kiếm</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}