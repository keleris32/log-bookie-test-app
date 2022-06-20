import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <Image
            src="/logo-expanzo-black.svg"
            alt="expanzo logo"
            width={150}
            height={100}
          />
        </div>
        <div className={styles.footerMenu}>
          <span>CONTACTS</span>
          <span>PHONES</span>
          <span>TOP SEARCH</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
