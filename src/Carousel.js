import React from "react";
import ReactCarousel, {
  arrowsPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row",
    alignContent: "center",
    textAlign: "center",
    marginTop: "50px",
  },
  arrowLeft: {
    transform: "scale(-1, 1)",
    fontSize: "2rem",
    padding: "40px",
    cursor: "pointer",
  },
  arrowRight: {
    fontSize: "2rem",
    padding: "40px",
    cursor: "pointer",
  },
}));

const Carousel = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <ReactCarousel
        plugins={[
          "centered",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <div className={styles.arrowLeft}>&#10148;</div>,
              arrowRight: <div className={styles.arrowRight}>&#10148;</div>,
              addArrowClickHandler: true,
            },
          },
        ]}
        slides={[
          <img
            src="/carousel/stage_3.jpg"
            alt="coupon pour un stage de 3 jours, valable un an"
          />,
          <img
            src="/carousel/stage_5.jpg"
            alt="coupon pour un stage de 5 jours, valable un an"
          />,
          <img
            src="/carousel/at_home.jpg"
            alt="coupon pour un cours à la maison, valable un an"
          />,
          <img
            src="/carousel/online.jpg"
            alt="coupon pour un cours en ligne, valable un an"
          />,
        ]}
      />
    </div>
  );
};

export default Carousel;
