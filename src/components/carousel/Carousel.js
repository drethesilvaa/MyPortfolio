import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

export const Carousel = ({ children }) => {
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }, // Adjust based on screen size
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
        >
            {children}
        </Swiper>
    )
}