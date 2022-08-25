import React from "react";
import Sports from "../sport";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import s from "./home.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper";
import War from "../war";
import Fashion from "../Fashion";


function Home({ data, data2, data3, data4 }) {
  console.log(data2);
  return (
    <div>
      <Swiper
        className={s.Swiper}
        modules={[Autoplay]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          1316: {
            width: 1316,
            slidesPerView: 2,
          },
        }}
        watchSlidesProgress={true}
        slidesPerView={2}
      >
        {data2.map((res) => {
          return (
            <SwiperSlide key={res.id}>
              <div className={s.contetn}>
                <img
                  className={s.img}
                  src={res.attributes.img.data[0].attributes.url}
                />
                <h1 className={s.h1}>{res.attributes.info}</h1>
              </div>
            </SwiperSlide>
          );
        })}
        <hr />
      </Swiper>
      <Fashion data={data4} />
      <hr />
      <War data={data3} />
      <hr />
      <Sports data={data} />
    </div>
  );
}

export default Home;
export async function getStaticProps() {
  //

  const res = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/sports?populate=*"
  );
  const res2 = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/sport-swipers?populate=*"
  );
  const res3 = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/wars?populate=*"
  );
  const res4 = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/fashions?populate=*"
  );

  let data = res.data.data;
  let data2 = res2.data.data;
  let data3 = res3.data.data;
  let data4 = res4.data.data;
  return {
    props: {
      data,
      data2,
      data3,
      data4,
    },
    revalidate: 200,
  };
}
