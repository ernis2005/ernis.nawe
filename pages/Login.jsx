import React from "react";
import { FcGoogle } from "react-icons/fc";
import s from "../styles/login.module.scss"
import {  signIn, getSession } from "next-auth/react";
function Login() {
    return (
      <div className={s.header}>
        <div className={s.block}>
        <p>Вы не вошли в аккаунт</p>
        <p>Войти</p>
        <h1 onClick={() => signIn()}>
          <FcGoogle />
        </h1>
        </div>
      </div>
    );
}

export default Login;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: true, // or false
        destination: "/",
      },
    };
  }
  return {
    props: { session },
  };
};
