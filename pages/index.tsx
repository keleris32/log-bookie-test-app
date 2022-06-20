import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Footer, Header } from '../components';
import styles from '../styles/Home.module.css';

interface StateType {
  all: boolean;
  companies: boolean;
  phones: boolean;
}

const initialState = {
  all: false,
  companies: false,
  phones: false,
};

const TABS: string[] = ['All', 'Companies', 'Phones'];

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<StateType>(initialState);

  const toggleTab = (index: number) => {
    index === 0
      ? setActiveTab({ ...initialState, all: true })
      : index === 1
      ? setActiveTab({ ...initialState, companies: true })
      : setActiveTab({ ...initialState, phones: true });
  };

  useEffect(() => {
    // Set Initial active tab
    setActiveTab({ ...initialState, all: true });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Expanzo</title>
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
          content="https://charles-log-bookie-app.vercel.app/"
        />
      </Head>

      <Header page="home" />

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src="/logo-expanzo-black.svg"
            alt="expanzo logo"
            width={150}
            height={100}
          />
        </div>
        <div className={styles.tabContainer}>
          {TABS.map((tab, index) => {
            const objKey: boolean = Object.values(activeTab)[index];

            return (
              <div key={index} onClick={() => toggleTab(index)}>
                <span className={objKey ? styles.activeTab : styles.tab}>
                  {tab}
                </span>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
