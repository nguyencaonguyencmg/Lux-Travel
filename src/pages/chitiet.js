import React from 'react';
import Header from './header'
import Footer from './footer'
import Product from './product'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Chitiet() {
    return (
      <React.Fragment>
          <div id="main">
              <Header />
              
          </div>
          <div id="content" className="container">
          <div className="pd-wrap">
            <div className="container">
              <div className="heading-section">
                <h1>Thông tin phòng</h1>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div id="thumb" className=" product-thumb">
                  <OwlCarousel items={1} className="owl-theme"
                            margin={7} autoplay ={true} >
                    <div className="item">
                      <img src="assets/img/homestay/ht1 (1).jpg" />
                    </div>
                    <div className="item">
                      <img src="assets/img/homestay/r(1).jfif" />
                    </div>
                    <div className="item">
                      <img src="assets/img/homestay/r(2).jfif" />
                    </div>
                    <div className="item">
                      <img src="assets/img/homestay/onenight.jfif" />
                    </div></OwlCarousel>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-dtl">
                    <div className="product-info">
                      <div className="product-name">Đà Nẵng, Vietnam</div>
                      <div className="reviews-counter">
                        <div className="rate">
                          <input type="radio" id="star5" name="rate" defaultValue="5" defaultChecked />
                          <label htmlFor="star5" title="text">5 stars</label>
                          <input type="radio" id="star4" name="rate" defaultValue="4" defaultChecked />
                          <label htmlFor="star4" title="text">4 stars</label>
                          <input type="radio" id="star3" name="rate" defaultValue="3" defaultChecked />
                          <label htmlFor="star3" title="text">3 stars</label>
                          <input type="radio" id="star2" name="rate" defaultValue="2" />
                          <label htmlFor="star2" title="text">2 stars</label>
                          <input type="radio" id="star1" name="rate" defaultValue="1" />
                          <label htmlFor="star1" title="text">1 star</label>
                        </div>
                        <span>3 Reviews</span>
                      </div>
                       <div className="product-price-discount"><span>2.990.000 VNĐ</span>{/*<span className="line-through">$29.00</span>*/}</div> 
                    </div>
                    <p>Neo-classNameic là nơi lý tưởng để bạn nghỉ ngơi, thiết kế với phong cách tân cổ điển, cùng 2 phòng ngủ lớn và nhà bếp. Rất gần với biển và các điểm tham quan du lịch nổi tiếng.
Chỉ mất 1 phút đi bộ đến bãi biển Phạm Văn Đồng và nhà hàng hải sản Bé Mặn, 10 phút đi bộ đến bãi biển Mỹ Khê. Hay mất 5 phút lái xe đến núi Khỉ và 10 phút lái xe đến trung tâm thành phố.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="size">Từ ngày</label>
                        <div className="date-item">
                            <i className="far fa-calendar-alt"></i>
                            <input id="myID" type="datetime-local" placeholder="Ngày đến"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="color">Đến ngày</label>
                        <div className="date-item">
                            <i className="far fa-calendar-alt"></i>
                            <input id="myID" type="datetime-local"  placeholder="Ngày đi"/>
                        </div>
                      </div>
                    </div>
                    <div className="product-count">
                      <label htmlFor="size">Số lượng</label>
                      <form action="#" className="display-flex">
                        <div className="qtyminus">-</div>
                        <input type="text" name="quantity" defaultValue="1" className="qty"/>
                        <div className="qtyplus">+</div>
                      </form>
                      <Link to="/checkout"  className="round-black-btn">Đặt ngay</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-info-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Mô tả</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                  Neo-classNameic là nơi lý tưởng để bạn nghỉ ngơi, thiết kế với phong cách tân cổ điển, cùng 2 phòng ngủ lớn và nhà bếp. Rất gần với biển và các điểm tham quan du lịch nổi tiếng.
Chỉ mất 1 phút đi bộ đến bãi biển Phạm Văn Đồng và nhà hàng hải sản Bé Mặn, 10 phút đi bộ đến bãi biển Mỹ Khê. Hay mất 5 phút lái xe đến núi Khỉ và 10 phút lái xe đến trung tâm thành phố.
                  </div>
                  <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="review-heading">REVIEWS</div>
                    <form className="review-form">
                      <div className="form-group">
                        <label>Đánh giá</label>
                        <div className="reviews-counter">
                          <div className="rate">
                            <input type="radio" id="star5" name="rate" defaultValue="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" defaultValue="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" defaultValue="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" defaultValue="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" defaultValue="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Đánh giá của bạn</label>
                        <textarea className="form-control" rows="4"></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" name="" className="form-control" placeholder="Tên*"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" name="" className="form-control" placeholder="Email*"/>
                          </div>
                        </div>
                      </div>
                      <button className="round-black-btn">Reviews</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="hotel-section">
                <div className="hotel">
                    <h1 className="hotel-header">Khách sạn tương tự</h1>
                </div>
                <Product />
              </div>
            </div>
          </div>
          </div>
          <Footer />
      </React.Fragment>
    )
}

