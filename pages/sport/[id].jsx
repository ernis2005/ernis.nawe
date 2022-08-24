import React from "react";
import axios from "axios";
export default function srortPage ({data}) {
    console.log(data.attributes.short_information);
    //attributes.short_information
    return(
        <h1>
            {data.attributes.short_information}
        </h1>
    )

}
export async function getStaticPaths() {
  const res = await axios.get("https://shrouded-reef-97416.herokuapp.com/api/sports?/populate=* ");
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
  const res = await axios.get(
    `https://shrouded-reef-97416.herokuapp.com/api/sports/${id}?populate=*`
  );
  let data = res.data.data;
  return {
    props: {
      data,
    },
    revalidate: 2,
  };
}
