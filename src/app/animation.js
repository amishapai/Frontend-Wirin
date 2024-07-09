import React from 'react';
import styles from '../styles/Animation.module.css';

const Animation = () => {
  return (
    <div className={styles.container}>
      <div className={${styles.text} ${styles.sanskrit}}>नमस्ते!</div>
      <div className={${styles.text} ${styles.english}}>Hello!</div>
      <div className={${styles.text} ${styles.kannada}}>ನಮಸ್ಕಾರ!</div>
      <div id="screen2" className={styles.screen}>Welcome To</div>
      <div id="screen4" className={styles.screen}>WIPOD</div>
    </div>
  );
};

export default Animation;