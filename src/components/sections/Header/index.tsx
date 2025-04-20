"use client";
import Image from "next/image";
import style from "./styles/styles.module.css";
import { montserrat, roboto } from "@/app/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Brands from "../Brands";
import Button from "@/components/layout/Button";

const images = [
  "/assets/foto2.jpeg",
  "/assets/foto1.jpeg",
  "/assets/foto3.jpeg",
  "/assets/foto4.jpeg",
  "/assets/foto5.jpeg",
  "/assets/foto5.jpeg",
];

const Header = () => {
  return (
    <header className={style.header}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
          waitForTransition: true,
        }}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: "-99999",
        }}
      >
        {" "}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={style.containerWraper}></div>
            <Image
              src={image}
              fill
              style={{
                objectFit: "cover",
                zIndex: -99999999999,
                width: "100%",
                height: "100%",
              }}
              loading="lazy"
              alt="logo"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 40vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.conatinerHeader}>
        <div className={style.logoContainer}>
          <div className={style.containerLogoCompleto}>
            <Image
              src={"/logo-completo3.png"}
              fill
              style={{
                objectFit: "contain",
              }}
              loading="lazy"
              alt="logo-completo"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>

        <div className={style.containerTextHeader}>
          <h2 className={montserrat.className}>precios competitivos</h2>
          <h2 className={montserrat.className}>Variedad de medicamentos</h2>

          <p className={roboto.className}>
            Drogas Alkosto es tu aliado de confianza para el cuidado de tu salud
            y bienestar. En nuestra farmacia encontrarás una amplia variedad de
            medicamentos de alta calidad, productos de cuidado personal,
            suplementos nutricionales, y artículos de salud, todo a precios
            competitivos.
          </p>
          <section style={{ display: "flex", gap: "1rem" }}>
            <Button content="Contactar" />
            <Button
              content="311 6546079
"
            />
          </section>
        </div>
        <div>
          <Brands />
        </div>
      </div>
    </header>
  );
};

export default Header;
