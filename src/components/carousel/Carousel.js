import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Carousel = ({ children }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }, // Adjust based on screen size
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            loop
            
        >
            {children}
        </Swiper>
    )
}