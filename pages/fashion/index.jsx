import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import s from "./style.module.css";
function Fashion({ data }) {
 
 
  return (
    <div>
      <div className={s.content_wrapper}>
       
        {data.map((rest) => {
          return (
            <div className={s.news_card} key={rest.id}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fashion;

//http://localhost:1337/api/sports?populate=*

export async function getStaticProps() {
  //

  const res = await axios.get(
    "https://shrouded-reef-97416.herokuapp.com/api/fashions?populate=*"
  );

  let data = res.data.data;

  return {
    props: {
      data,
    },
    revalidate: 200,
  };
}

