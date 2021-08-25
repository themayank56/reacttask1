import React from "react";
import web1 from "../src/images/rimg-1.PNG";
import web2 from "../src/images/rimg-2.PNG";
import web3 from "../src/images/rimg-33.PNG";
import web4 from "../src/images/rimg-4.PNG";
import web5 from "../src/images/rimg-5.PNG";
import web6 from "../src/images/rimg-6.PNG";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-12 col-sm-12">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={web1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={web2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={web3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={web4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={web5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={web6} />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </div>
  );
}
