import React from 'react'
import Cherry from '../assets/Cherry.png'
import css from '../styles/Hero.module.css'
import Image from 'next/image'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.ltop}>
          <span>be fast like cherry</span>
          <Image src={Cherry}></Image>
        </div>
        <div className={css.lbottom1}>
          let us feed your hungry with our love scattered on{" "}
          <span className={css.pizza}>pizza</span>
        </div>
        <div className={css.lbottom2}>
          our mission is to take your order and deliver you the pizza on or
          before you expect
        </div>
        <div className={css.lbottom3}>
          <button className="btn">get started</button>
        </div>
      </div>

      <div className={css.right}>
        <div className={css.imgcontainer}>
          <Image src={HeroImage} />
        </div>

              <div className={css.btn1}>
                     <span>contact us</span>
              <div>
                      <UilPhone />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero