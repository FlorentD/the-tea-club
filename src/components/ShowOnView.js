import React, { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import { useInView } from "react-intersection-observer";

const ShowOnView = ({ children }) => {
  const [shouldShow, show] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (!shouldShow && inView) {
      show(true);
    }
  }, [shouldShow, inView]);
  return (
    <div ref={ref}>
      <Fade in={shouldShow} timeout={1000}>
        {children}
      </Fade>
    </div>
  );
};

export default ShowOnView;
