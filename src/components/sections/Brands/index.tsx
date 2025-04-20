"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import style from "./styles/styles.module.css";
const brandsImages = [
  "/brands/brands1.png",
  "/brands/brands2.png",
  "/brands/brands3.png",
  "/brands/brands1.png",
  "/brands/brands2.png",
  "/brands/brands3.png",
  "/brands/brands1.png",
  "/brands/brands2.png",
  "/brands/brands3.png",
  "/brands/brands1.png",
  "/brands/brands2.png",
  "/brands/brands3.png",
];

const Brands = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={2}
      style={{
        width: "90vw",
        margin: "0 auto",
        height: "8rem",
        padding: "1rem",
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
    >
      {brandsImages.map((image, index) => (
        <SwiperSlide className={style.slider} key={index}>
          <div className={style.containerSectionImage}>
            <section
              style={{
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
              }}
            >
              <Image
                src={image}
                alt={`Brands${index + 1}`}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </section>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
