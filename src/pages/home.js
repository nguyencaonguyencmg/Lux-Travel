import React from 'react';
import Header from './header'
import Footer from './footer'
import Slides from './slides'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'

function Home(){
    return(
        <React.Fragment>
            
            <div id="main" className="container">
                <Header />
                
                <div id="content" >
                <Slides />
                
                {/* <!-- Tour-like --> */}
                    <div className="tour-section">
                        <div className="tour">
                            <h3 className="tour-heading">Có thể bạn sẽ thích</h3>
                            <p className="tour-sub-heading">Cùng LUXTravel bắt đầu cuộc hành trình đầy thú vị của bạn</p>
                        </div>
                        <div className="tour-list">
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow"  src="assets/img/danang.png" alt=" Đà Nẵng"/>
                                    <div className="like-body">
                                        <h3 className="like-heading"> Đà Nẵng</h3>
                                        <p className="like-number ">223 Chỗ ở</p>
                                        <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                    </div>
                                </a>
                            </div>
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow" src="assets/img/sapa.png" alt=" Sapa"/>
                                    <div className="like-body">
                                        <h3 className="like-heading"> Sapa</h3>
                                        <p className="like-number ">124 Chỗ ở</p>
                                        <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                    </div>
                                </a>
                            </div>
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow" src="assets/img/nhatrang.png" alt=" Nha Trang"/>
                                    <div className="like-body">
                                        <h3 className="like-heading"> Nha Trang</h3>
                                        <p className="like-number ">231 Chỗ ở</p>
                                        <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                    </div>
                                </a>
                            </div>
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow" src="assets/img/phuquoc.png" alt="Phú Quốc"/>
                                    <div className="like-body">
                                        <h3 className="like-heading"> Phú Quốc</h3>
                                        <p className="like-number ">94 Chỗ ở</p>
                                        <button className="datphong-btn btn btn-outline-primary" type="submit" >Đặt phòng</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                {/* <!-- Tour-LUX --> */}
                <div className="h-support">
                    <div className="tour-section">
                        <div className="tour">
                            <h3 className="tour-heading">Gợi ý từ Lux Travel!</h3>
                            <p className="tour-sub-heading">Những địa điểm thường đến mà Lux Travel gợi ý dành cho bạn</p>
                        </div>
                        
                        <div className="tour-list">
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow"  src="assets/img/vungtaulux.png" alt=" Vũng Tàu"/>
                                    <div className="lux-body">
                                        <h5 className="lux-heading"> Vũng Tàu biệt thự hồ bơi</h5>
                                        <p className="lux-number " >Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu</p>
                                    </div>
                                </a>
                            </div>
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow" src="assets/img/hanoilux.png" alt=" Hà Nội"/>
                                    <div className="lux-body">
                                        <h5 className="lux-heading"> Hà Nội vi vu ngoại thành</h5>
                                        <p className="lux-number ">Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội</p>
                                    </div>
                                </a>
                            </div>
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow" src="assets/img/saigonlux.png" alt=" Sài Gòn"/>
                                    <div className="lux-body">
                                        <h5 className="lux-heading"> Sài Gòn cần là có ngay</h5>
                                        <p className="lux-number ">Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng</p>
                                    </div>
                                </a>
                            </div>
                            <div className="tour-item">
                                <a href="">
                                    <img className="tour-img grow" src="assets/img/nhatranglux.png" alt="Nha Trang"/>
                                    <div className="lux-body">
                                        <h5 className="lux-heading"> Nha Trang đầy cảm hứng</h5>
                                        <p className="lux-number ">Không gian thoáng đãng mang đến cho bạn tràn đầy cảm hứng</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Ưu đãi --> */}
                    <div className="uudai-section">
                        <div className="uudai">
                            <h3 className="uudai-heading">Ưu đãi từ Luxtravel</h3>
                            <p className="uudai-sub-heading">Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!</p>
                        </div>
                        <div className="uudai-list">
                        <OwlCarousel items={3} className="owl-theme"
                            margin={7} autoplay ={true} >
                            <a href="">
                                <img className="uudai-img grow"  src="assets/img/uudai/uudai1.png" alt=" phiếu ưu đãi"/>
                            </a>
                            <a href="">
                                <img className="uudai-img grow"  src="assets/img/uudai/uudai2.png" alt=" phiếu ưu đãi"/>
                            </a>
                            <a href="">
                                <img className="uudai-img grow"  src="assets/img/uudai/uudai3.png" alt=" phiếu ưu đãi"/>
                            </a>
                            <a href="">
                                <img className="uudai-img grow"  src="assets/img/uudai/uudai4.jpg" alt="  phiếu ưu đãi"/>
                            </a>
                            <a href="">
                                <img className="uudai-img grow"  src="assets/img/uudai/uudai5.jpg" alt="  phiếu ưu đãi"/>
                            </a>
                            <a href="">
                                <img className="uudai-img grow"  src="assets/img/uudai/uudai6.jpg" alt="  phiếu ưu đãi"/>
                            </a>
                        </OwlCarousel>
                            
                        </div>
                    </div>

                {/* <!-- LUXTravel --> */}
                    <div className="luxtravel">
                        <div className="travel">
                            <div className="travel-sub">
                                <h1 className="travel-heading">LUXTravel</h1>
                                <h2 className="travel-sub-heading">Tìm kiếm chỗ ở giá tốt nhất</h2>
                                <p className="travel-content">Luxtravel hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.</p>
                            </div>
                            <div className="qr-code">
                                <img src="assets/img/qr-code/qr-code.png" alt="" className="maqr"/>
                                <div className="store">
                                    <a href="">
                                        <img src="assets/img/qr-code/apple-store.jpg" alt="" className="apple"/>
                                    </a>
                                    <a href="">
                                        <img src="assets/img/qr-code/google-store.jpg" alt="" className="google-store"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="luxtravel-img">
                            <img src="assets/img/qr-code/luxtravel.png" alt=""/>
                        </div>
                    </div>  
                </div>
                
            </div>
        <Footer />
        </React.Fragment>
    );
};
export default Home;

