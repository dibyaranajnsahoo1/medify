import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Autoplay, Pagination } from "swiper"; 
import Swiper1 from "../../assets/swiper1.png";
import Swiper2 from "../../assets/swiper2.png";

SwiperCore.use([Pagination]);

const Slides = () => {
  return (
    <Box sx={{ mt: 25 , mb:6 }} > 
      <Container style={{padding:'10px',}}>
        <Swiper
          slidesPerView={1} 
          spaceBetween={0} 
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true, 
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
          
        >
          <SwiperSlide >
            <Box
              component="img"
              src={Swiper1}
              alt="Swiper Image 1"
              sx={{
                width: "378.3px",
                height: "199.15px", 
                borderRadius: "20px", 
                objectFit: "cover", 
                marginBottom:'30px'
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component="img"
              src={Swiper2}
              alt="Swiper Image 2"
              sx={{
                width: "378.3px",
                height: "199.15px", 
                borderRadius: "20px", 
                objectFit: "cover", 
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component="img"
              src={Swiper1}
              alt="Swiper Image 1"
              sx={{
                width: "378.3px",
                height: "199.15px", 
                borderRadius: "20px", 
                objectFit: "cover", 
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component="img"
              src={Swiper2}
              alt="Swiper Image 2"
              sx={{
                width: "378.3px",
                height: "199.15px", 
                borderRadius: "20px", 
                objectFit: "cover", 
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component="img"
              src={Swiper1}
              alt="Swiper Image 1"
              sx={{
                width: "378.3px",
                height: "199.15px", 
                borderRadius: "20px",
                objectFit: "cover", 
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component="img"
              src={Swiper2}
              alt="Swiper Image 2"
              sx={{
                width: "378.3px",
                height: "199.15px", 
                borderRadius: "20px", 
                objectFit: "cover", 
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Slides;
