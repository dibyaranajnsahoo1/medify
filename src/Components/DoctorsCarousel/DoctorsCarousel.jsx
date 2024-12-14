import React from "react";
import "./DoctorsCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper"; 
import "swiper/css";
import "swiper/css/pagination";

import doctorHeena from "../../assets/doctor-heena.png";
import doctorAnkur from "../../assets/doctor-ankur.png";
import doctorAhmad from "../../assets/doctorAhmed.png";
import lesleyHull from "../../assets/doctorLesley.png";
import doctorStevens from "../../assets/doctorStevens.png";

const DoctorsCarousel = () => {
  return (
    <div className="doctors-carousel">
      <h1>Our Medical Specialist</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0} 
        slidesPerView={4} 
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
          1440: { slidesPerView: 4 },
        }}
        
      >
        <SwiperSlide style={{marginBottom:'10px'}}>
          <div className="slide" style={{marginBottom:'40px'}}>
            <div className="slide-img">
              <img src={doctorAnkur} alt="Dr. Ankur Sharma" />
            </div>
            <p className="slide-name">Dr. Ankur Sharma</p>
            <p className="slide-specialisation">Medicine</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorAhmad} alt="Dr. Ahmad Khan" />
            </div>
            <p className="slide-name">Dr. Ahmad Khan</p>
            <p className="slide-specialisation">Neurologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={lesleyHull} alt="Dr. Lesley Hull" />
            </div>
            <p className="slide-name">Dr. Lesley Hull</p>
            <p className="slide-specialisation">Oncologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorStevens} alt="Dr. Stevens" />
            </div>
            <p className="slide-name">Dr. Stevens</p>
            <p className="slide-specialisation">Andrologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorHeena} alt="Dr. Heena Sachdeva" />
            </div>
            <p className="slide-name">Dr. Heena Sachdeva</p>
            <p className="slide-specialisation">Orthopedics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorAhmad} alt="Dr. Ahmad Khan" />
            </div>
            <p className="slide-name">Dr. Ahmad Khan</p>
            <p className="slide-specialisation">Neurologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={lesleyHull} alt="Dr. Lesley Hull" />
            </div>
            <p className="slide-name">Dr. Lesley Hull</p>
            <p className="slide-specialisation">Oncologist</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DoctorsCarousel;
