import { Swiper } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

export const Carousel = ({ children }) => {
  return (
    <Swiper
      modules={[Autoplay, Grid]}
      spaceBetween={20}
      slidesPerView={1}
      grid={{ rows: 1, fill: "row" }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          grid: { rows: 2, fill: "row" },
        },
        768: {
          slidesPerView: 2,
          grid: { rows: 2, fill: "row" },
        },
        1024: {
          slidesPerView: 3,
          grid: { rows: 2, fill: "row" },
        },
      }}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
    >
      {children}
    </Swiper>
  );
};
