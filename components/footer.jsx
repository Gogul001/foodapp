import React from 'react'
import css from '../styles/footer.module.css'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import{UilGithub} from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className={css.footer1}>
      <div className={css.reserved}>All  rights  are  reserved</div>
      <div className={css.footer}>

        <UilFacebook size={50} />
        
        <UilGithub size={50} />
        <UilInstagram size={50} />
      </div>
    </div>
  );
}

export default Footer