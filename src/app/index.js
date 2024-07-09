import Head from 'next/head';
import Animation from '@/components/Animation';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Animation />
    </div>
  );
}