import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                
                <div id="footer">
                    <div className= "container">
                        <div className="float-left m-3 pl-5 footer-content">
                            <h4>LUXTravel</h4>
                            <ul>
                                <li><a href="index.html" className="fas fa-angle-double-right float"> Trang chủ</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Hotel và Homestay</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Chính sách và Ưu đãi</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Chăm sóc khách hàng</a></li>
                            </ul>
                        </div>
                        <div className="float-left pl-5 m-3 footer-content">
                            <h4>Khách hàng</h4>
                            <ul>
                                <li><a href="" className="fas fa-angle-double-right float"> Khách sạn hàng đầu</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Combo hấp dẫn</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Ðăng ký tài khoản</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Ưu dãi và khuyến mãi</a></li>
                            </ul>
                        </div>
                        <div className="float-left pl-5 m-3 footer-content">
                            <h4>Chính Sách</h4>
                            <ul>
                                <li><a href="" className="fas fa-angle-double-right float"> Về Luxtravel</a></li>
                                <li><a href="CSUD.html" className="fas fa-angle-double-right float"> Hủy phòng và hoàn tiền</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Quy định thanh toán</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Chính sách bảo mật</a></li>
                                <li><a href="" className="fas fa-angle-double-right float"> Phản hồi khách hàng</a></li>
                            </ul>
                        </div>
                        <div className="lienhe float-left pl-5 m-3 pr-5 footer-content">
                            <h4>Liên hệ</h4>
                            <ul>
                                <li><a href="" className="fas fa-angle-double-right float"> Luxtravel!</a></li>
                                <li> <i className="fas fa-angle-double-right float"> Số điện thoại: 0868.027.061</i></li>
                                <li><i className="fas fa-angle-double-right float"> Gmail: luxtravel@gmail.com</i> </li>
                                <li><i className="fas fa-angle-double-right float"> Website: Luxtravel.com</i></li>
                                <li> <i className="fas fa-angle-double-right float"> Địa chỉ: Cửa Lò- Nghệ An</i></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="social">
                                <li className="facebook"><a href="" className="hover-shadow"><i className="fab fa-facebook-f text-light"></i></a></li>
                                <li className="twitter ml-3"><a href="" className="hover-shadow"><i className="fab fa-twitter text-light"></i></a></li>
                                <li className="youtube ml-3"><a href="" className="hover-shadow"><i className="fab fa-youtube text-light"></i></a></li>
                                <li className="instagrm ml-3"><a href="" className="hover-shadow"><i className="fab fa-instagram text-light"></i></a></li>
                            </ul>
                        </div>
                        <div className=" clear text-center ">
                            <p className="m-0">LUXTRAVEL</p>
                            <p className="">103 Nguyễn Sinh Cung - Cửa Lò - Nghệ An</p>
                        </div>
                        
                    </div>
                    <div className="coppyright"  >
                            <div>Coppyright © 2021. Design by : Nguyễn Cao Nguyên</div>
                        </div>
                </div>
                
            </footer>
        </React.Fragment>    
    )
}