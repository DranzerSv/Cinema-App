import Head from 'next/head';
import MoviesGrid from '@/components/MoviesGrid';
import TvShowsGrid from '@/components/TvShowsGrid';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <p>-------------------------Movies--------------------------</p>
        <MoviesGrid />
        <p>-------------------------TV Shows--------------------------</p>
        <TvShowsGrid />
      </main>
    </>
  );
}
