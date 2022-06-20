import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';
import { FaPen, FaUser, FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Header({ page }: { page: string }): JSX.Element {
  const router = useRouter();

  return (
    <nav
      className={styles.container}
      style={{ padding: page === 'contact' ? '0 1.5em' : '.5em 1.5em' }}
    >
      <div className={styles.navMenu}>
        <span>
          <FaBars />
        </span>
        <span className={styles.navLink}>
          <Link href="#">
            <a>DASHBOARD</a>
          </Link>
        </span>
        <span className={styles.navLink}>
          <Link href="/contact">
            <a
              className={
                router.pathname == '/contact'
                  ? styles.activeNavLink
                  : styles.navLink
              }
            >
              CONTACT
            </a>
          </Link>
        </span>
      </div>
      {page === 'contact' && (
        <div style={{ cursor: 'pointer' }}>
          <Link href="/" passHref>
            <Image
              src="/logo-expanzo.svg"
              alt="Expanzo Logo"
              width={72}
              height={50}
            />
          </Link>
        </div>
      )}

      <div className={styles.navMenu}>
        <div className={styles.navIconWrapper}>
          <span>
            <FaPen className={styles.icon} />
          </span>
          <span className={styles.navLink}>LOGIN</span>
        </div>
        <div className={styles.navIconWrapper}>
          <span>
            <FaUser className={styles.icon} />
          </span>
          <span className={styles.navLink}>REGISTRATION</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
