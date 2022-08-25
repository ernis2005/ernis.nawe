import React from "react";
import axios from "axios";
import s from "./style.module.css";
import { MdDateRange } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,FreeMode } from "swiper";
export default function fashionPage({ data,data2 }) {
  console.log(data2);
  //attributes.short_information
  return (
    <>
    <div className={s.block}>
      <h1>{data.attributes.short_information}</h1>
      <p>
        <MdDateRange /> {data.attributes.date}
      </p>
      <div>
        <img className={s.img} src={data.attributes.img.data[0].attributes.url} alt="" />
        <h2> {data.attributes.full_information}</h2>
      </div>
      <div >
        <img className={s.img2} src={data.attributes.img_2.data[0].attributes.url} alt="" />
      </div>
    </div>
    <hr />
    <h1 >Похожие новости</h1>
    <div>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
       
        breakpoints={{
          
          360: {
            width: 360,
            slidesPerView: 1,
          },
          
          768: {
            width: 768,
            slidesPerView: 2,
          },
          822:{
            width: 1000,

            slidesPerView: 3,
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data2.map((rest) => {
          return (
            <SwiperSlide>
          <div><div className={s.news_card} key={rest.id}>
          <a
            href={`/fashion/${rest.id}`}
            className={s.news_card__card_link}
          ></a>
          <img
            src={rest.attributes.img.data[0].attributes.url}
            alt="img"
            className={s.news_card__image}
          />

          <div className={s.news_card__text_wrapper}>
            <h2 className={s.news_card__title}>{rest.attributes.name}</h2>
            <div className={s.news_card__post_date}>
              {rest.attributes.date}
            </div>
            <div className={s.news_card__details_wrapper}>
              <p className={s.news_card__excerpt}>
                {rest.attributes.short_information}
              </p>
              <Link href={`/fashion/${rest.id}`}>
                <a className={s.news_card__read_more}>Read more</a>
              </Link>
            </div>
          </div>
        </div></div>
        </SwiperSlide>
          );
        })}
         
      </Swiper>
    </div>
    </>
    
  );
}
export async function getStaticPaths() {

  const res = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/fashions?/populate=* "
  );
  let paths = res.data.data.map((res) => {
    return {
      params: { id: String(res.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const res2 = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/fashions?populate=*"
  );
  let data2 = res2.data.data;

  const res = await axios.get(
    `https://shrouded-reef-97416.herokuapp.com/api/fashions/${id}?populate=*`
  );
  let data = res.data.data;
  return {
    props: {
      data2,
      data,
    },
    revalidate: 2,
  };
}
