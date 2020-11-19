import React from "react";
import SwiperCore, { Navigation, Pagination, Keyboard, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
  },
  image: {
    width: "220px",
    height: "220px",
    [theme.breakpoints.up("md")]: {
      width: "600px",
      height: "600px",
    },
  },
}));

SwiperCore.use([Navigation, Pagination, Keyboard, A11y]);

const Carousel = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={100}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop
        centeredSlides
        keyboard
        a11y
      >
        <SwiperSlide>
          <img
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/stage_3.jpg"
            alt="coupon pour un stage de 3 jours, valable un an"
            className={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/stage_5.jpg"
            alt="coupon pour un stage de 5 jours, valable un an"
            className={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/at_home.jpg"
            alt="coupon pour un cours à la maison, valable un an"
            className={styles.image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/online.jpg"
            alt="coupon pour un cours en ligne, valable un an"
            className={styles.image}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
