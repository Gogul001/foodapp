import React from 'react'
import css from '../styles/header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { UilShoppingBag } from '@iconscout/react-unicons'

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} width={50} height={30}></Image>
        <span>fudo</span>
      </div>

      <div className={css.menu}>
        <ul className={css.menu1}>
          <li>home</li>
          <li>menu</li>
          <li>contact</li>
        </ul>
      </div>

      <div className={css.right}>
        <div className={css.icon}>
          <div className={css.icon1}>
            <UilShoppingBag width={ 40} height={40} />
          </div>
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
}

export default Header