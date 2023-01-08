import React from 'react'
import css from '../styles/services.module.css'
import S1 from '../assets/S1.png'
import S2 from '../assets/S2.png'
import S3 from '../assets/S3.png'
import Image from 'next/image'

const Services = () => {
  return (
    <div className={css.service}>
      <div className={css.card}>
        <div className={css.imagewrapper}>
          <Image src={S1} />
        </div>
        <div className={css.img1}>Easy to order</div>
        <div className={css.imgd}>you only need few steps to go ahead</div>
      </div>
      <div className={css.card}>
        <div className={css.imagewrapper}>
          <Image src={S2} />
        </div>
        <div className={css.img1}>Easy to order</div>
        <div className={css.imgd}>fastest delivery ever</div>
      </div>
      <div className={css.card}>
        <div className={css.imagewrapper}>
          <Image src={S3} />
        </div>
        <div className={css.img1}>Easy to order</div>
        <div className={css.imgd}>spizy pizza here</div>
      </div>
    </div>
  );
}

export default Services