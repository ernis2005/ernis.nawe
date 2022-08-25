import Link from "next/link";
import s from "./Navlinck.module.scss";
import { getSession } from "next-auth/react";
import { BsHouse } from "react-icons/bs";
import Burger from "./Burger";

function Navlinck({ children }) {
  return (
    <div>
     
      <Burger className={s.Burger} />
      <header className={s.header}>
        <div className={s.menu}>
          <div className={s.logo}>
            <h1>Эрнис.nawe</h1>
          </div>
          <div className={s.Links}>
            <Link href="/">
              <p className={s.Link}>Home</p>
            </Link>
            <Link href="/sport">
              <p className={s.Link}>sport</p>
            </Link>
            <Link href="/fashion">
              <p className={s.Link}>Fashion</p>
            </Link>
            <Link href="/war">
              <p className={s.Link}>War</p>
            </Link>
          </div>
          <div className={s.user}>
            <a href="/account">
              <BsHouse className={s.bshouse} />
            </a>
          </div>
        </div>
      </header>
      <content className={s.content}>{children}</content>
      <footer></footer>
    </div>
  );
}
export default Navlinck;
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
