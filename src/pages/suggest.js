import React from 'react';
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Suggest(){
    return(
        <React.Fragment>
            <div id="suggest" class="container">
                <OwlCarousel className="owl-carousel owl-theme" 
                autoplayTimeout={2000} items={4}
                margin={7} autoplay ={true} dots = {false}>
                    <div className="item"><a href=""><img src="assets/img/diadiem/hanoi.jpg" alt="Hà Nội"/>
                        <p className="diemden">Hà Nội</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/caobang.jpg" alt="Cao Bằng"/>
                        <p className="diemden">Cao Bằng</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/danang.jfif" alt="Đà Nẵng"/>
                        <p className="diemden">Đà Nẵng</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/halong.jfif" alt="Hạ Long" />
                        <p className="diemden">Hạ Long</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/HCM.jfif" alt="Sài Gòn" />
                        <p className="diemden">Sài Gòn</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/hoian.jfif" alt="Hội An" />
                        <p className="diemden">Hội An</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/hue.jpg" alt="Huế" />
                        <p className="diemden">Huế</p>
                    </a></div>
                    <div className="item"><a href=""><img src="assets/img/diadiem/sapa1.jpg" alt="SaPa" />
                        <p className="diemden">SaPa</p>
                    </a></div>
                </OwlCarousel>
            </div>
        </React.Fragment>
    )
}