import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function Contact(){
    return(
        <React.Fragment>
            <div id="main">
                <Header />
                
            </div> 
            
            <div id="content" className="container">
            <div className="contact-page-info blockquote">
						<div className="row">
							<div className="col-md-5 col-sm-12 col-xs-12">
								<div className="contact-box contact-address-box">
									<span className="dark"><i className="fa fa-home"></i></span>
									<label className="title16 dark">ĐỊA CHỈ:</label>
									<p className="desc">103 Nguyễn Sinh Cung - Phường Nghi Hương - Cửa Lò - Nghệ An</p>
								</div>
							</div>
							<div className="col-md-4 col-sm-7 col-xs-12">
								<div className="contact-box">
									<span className="dark"><i className="fa fa-phone"></i></span>
									<ul className="list-inline-block">
										<li>
											<label className="title16 dark">ĐIỆN THOẠI:</label>
										</li>
										<li>
											<span className="dark">086-8027-061</span>
											<span className="dark">086-8027-061</span>
										</li>
									</ul>
								</div>
								<div className="contact-box">
									<span className="dark"><i className="fa fa-print"></i></span>
									<ul className="list-inline-block">
										<li>
											<label className="title16 dark">FAX:</label>
										</li>
										<li>
											<span className="dark">086-8027-061;</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-sm-5 col-xs-12">
								<div className="contact-box contact-email-box">
									<span className="dark"><i className="fa fa-envelope"></i></span>
									<label className="title16 dark">E-MAIL:</label>
									<p className="desc"><a href="#" className="dark">Luxtravel@gmail.com</a></p>
								</div>
							</div>
						</div>
					</div>
                    <div className="contact-form-faq">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="contact-form-page">
									<h2 className="title18 dark font-bold text-uppercase dosis-font">Phản hồi từ khách hàng</h2>
									<form className="contact-form">
										
										<p className="contact-email">
											<input className="dark border"  placeholder="Email*" type="text"/>
										</p>
										<p className="contact-message">
											<textarea className="dark border"  cols="30" rows="10" placeholder = "Chi tiết.."></textarea>
										</p>
										<p className="contact-submit">
											<input className="shop-button" type="submit" placeholder="Gửi phản hồi"/>
										</p>
									</form>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="contact-faq">
									<h2 className="title18 dark font-bold text-uppercase dosis-font">Câu hỏi thường gặp</h2>
									<div className="contact-accordion toggle-tab">
										<div className="item-toggle-tab active">
											<h2 className="toggle-tab-title dark">Chính sách hủy phòng và hoàn tiền</h2>
											<p className="desc toggle-tab-content dark opaci" >Các chính sánh hủy phòng và được phép hoàn tiền từ Luxtravel</p>
										</div>
										<div className="item-toggle-tab">
											<h2 className="toggle-tab-title dark">Dời lịch đặt phòng</h2>
											<p className="desc toggle-tab-content dark opaci">Dời lịch đặt phòng và các chi phí phải trả </p>
										</div>
										<div className="item-toggle-tab">
											<h2 className="toggle-tab-title dark">Website không phản hồi</h2>
											<p className="desc toggle-tab-content dark opaci">Trang Web phản hồi chậm hoặc đang có lỗi xảy ra </p>
										</div>
										<div className="item-toggle-tab">
											<h2 className="toggle-tab-title dark">Tôi chưa nhận được mã đặt phòng sau khi đã thanh toán</h2>
											<p className="desc toggle-tab-content dark opaci">Sau khi hoàn tất các bước và thanh toán nhưng chưa nhận được mã đặt phòng của tôi </p>
										</div>
										
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