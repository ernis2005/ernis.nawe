import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

import s from '../styles/account.module.scss'
import { GiExitDoor } from "react-icons/gi";

function Account() {
  let { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session);
  
    
    return (
      <div >
        <img className={s.img} src={session.user.image} alt="helo" />
        <p className={s.email}> {session.user.email}</p>
        <p className={s.name}> {session.user.name}</p>
     
         <button className={s.button} onClick={() => signOut()}> <GiExitDoor/> Выход</button> 
      </div>
    );
  } else {
    return (
      <div>
        <p>you are not signed in</p>
      </div>
    );
  }
}

export default Account;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: true, // or false
        destination: "/Login",
      },
    };
  }
  return {
    props: { session },
  };
};
