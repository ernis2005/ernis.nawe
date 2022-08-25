import React, { useState } from "react";
import Link from "next/link";
import s from "./burger.module.scss";
import { BiMenu } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
function Burger() {
  let [burger, setBurger] = useState(false);
  return (
    <div className={s.block}>
      <div className={s.logo_burger}>
        <div className={s.logo}>
          <h1>Эрнис.nawe</h1>
        </div>
        <p className={s.BiMenu} onClick={() => setBurger((burger) => !burger)}>
          <BiMenu />
        </p>
      </div>

      {burger ? (
        <div className={s.burger}>
          <div className={s.menu}>
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
              <Link href="/account">профиль</Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Burger;
