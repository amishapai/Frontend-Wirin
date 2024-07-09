// pages/black-screen.js

import Head from 'next/head';

const BlackScreen = () => {
  return (
    <>
      <Head>
        <title>Black Screen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="black-screen"></div>
      <style jsx>{`
        .black-screen {
          height: 100vh;
          background-color: black;
        }
      `}</style>
    </>
  );
};

export default BlackScreen;
