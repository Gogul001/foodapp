import React from 'react'
import { urlFor } from '../lib/client'
import css from '../styles/Menu.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Menu = ({ pizzas }) => {
  console.log(pizzas)
  return (
    <div className={css.pmenu}>
      { 
    pizzas.map((pizza,id) => {
      const src= urlFor(pizza.image).url()
      return (
        <div className={css.pizza} key={id}>
          <Link href={`./pizza/${pizza.slug.current}`}>
            <div className={css.imagewrapper}>
              <Image
                loader={() => src}
                src={src}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </Link>
          <div className={css.span}>
            <span>{pizza.name}</span>
            <span>${pizza.price}</span>
          </div>
        </div>
      );
    })}
    </div>
      
    
  )
}

export default Menu