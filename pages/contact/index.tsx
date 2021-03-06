import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer, Header } from '../../components';
import styles from './Contact.module.css';
import { FaMapMarker, FaEnvelope } from 'react-icons/fa';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Expanzo</title>
        <meta
          name="description"
          content="One of the largest and freely accessible databases of companies - it contains companies from all over the world."
        />
        <meta
          property="og:title"
          content="One of the world's largest and freely accessible databases of companies."
        />
        <meta
          property="og:description"
          content="it contains companies from all over the world."
        />
        <meta
          property="og:url"
          content="https://charles-log-bookie-app.vercel.app/contact/"
        />
      </Head>

      <Header page="contact" />

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h3>Contact</h3>
          <div className={styles.detailsContainer}>
            <div>
              <div className={styles.detailsHeader}>
                <FaMapMarker className={styles.icon} />
                <span>Headquarters</span>
              </div>
              <div className={styles.details}>
                <li>DHO s.r.o</li>
                <li>Bořivojova 878/35</li>
                <li>130 00 Praha 3</li>
              </div>
            </div>
            <div>
              <div className={styles.detailsHeader}>
                <FaEnvelope className={styles.icon} />
                <span>Email</span>
              </div>
              <div>
                <span>info@expanzo.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
