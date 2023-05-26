import React from 'react';
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Slides(){
    return(
        <React.Fragment>
            <OwlCarousel id="slider" className="owl-carousel owl-theme"
            autoplayTimeout={3000} items={1}
            margin={0} autoplay ={true}>
                <div className="item"><img src="assets/img/slide/slide1.png" /></div>
                <div className="item"><img src="assets/img/slide/slide2.png"/></div>
                <div className="item"><img src="assets/img/slide/slide7.png" /></div>
            </OwlCarousel>
            <div className="content-section">
                        <h2 className="section-heading">Chào mừng bạn đến LUX Travel</h2>
                        <p className="section-sub-heading">Đặt phòng khách sạn, homestay, chỗ ở, trải nghiệm và nhiều hơn nữa tại Luxtravel</p>
                        <div className="content-boxlist">
                            <div className="list-item hover-shadow">
                                <img src="assets/img/icon/icon1.png" alt="" className="list-img "/>
                                <div className="item-content">
                                    <h3>
                                        Hỗ trợ khách hàng 24/7
                                    </h3>
                                    <p>
                                        Chat là có, gọi là nghe, không quản đêm hôm, ngày nghỉ và ngày lễ. 
                                    </p>
                                </div>
                            </div>
                            <div className="list-item hover-shadow">
                                <img src="assets/img/icon/icon2.png" alt="" className="list-img"/>
                                <div className="item-content">
                                    <h3>
                                        Sát ngày không đổi giá
                                    </h3>
                                    <p>
                                        Cam kết giá tốt nhất khi đặt gần ngày cho chuyến đi của bạn. 
                                    </p>
                                </div>
                            </div>
                            <div className="list-item hover-shadow">
                                <img src="assets/img/icon/icon3.png" alt="" className="list-img"/>
                                <div className="item-content">
                                    <h3>
                                        Thanh toán dễ dàng, đa dạng
                                    </h3>
                                    <p>
                                        Bao gồm thêm chuyển khoản ngân hàng và tiền mặt tại cửa hàng.
                                    </p>
                                </div>
                            </div>
                            <div className="list-item hover-shadow">
                                <img src="assets/img/icon/icon4.png" alt="" className="list-img"/>
                                <div className="item-content">
                                    <h3>
                                        800+ khách sạn toàn quốc
                                    </h3>
                                    <p>
                                        Hàng trăm khách sạn 4 sao và 5 sao, cho bạn sự lựa chọn phong phú,đa dạng. 
                                    </p>
                                </div>
                            </div>           
                        </div>
                        
                        <div className="clear"></div>
                    </div>
        </React.Fragment>
    );
}




