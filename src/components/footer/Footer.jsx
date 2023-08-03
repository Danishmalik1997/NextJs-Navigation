import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'; 
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Danish. All rights reserved</div>
        <div>
          <Image src='/Facebook_icon.svg.png' width={15} height={15} alt='Lama'/> 
        </div>
    </div>
  )
}

export default Footer