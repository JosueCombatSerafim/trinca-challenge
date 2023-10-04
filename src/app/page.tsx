"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Login from "./components/Login/Login";
import MainContent from "./components/MainContent";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLoggin = () => {
    setIsLogged(true);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Agenda do Churras</h1>
      </header>

      {!isLogged ? <Login handleLoggin={handleLoggin} /> : <MainContent />}

      <footer
        className={`${styles.footer} ${!isLogged && styles.footerNotLogged}`}
      >
        <Image src="/logoTrinca.png" alt="Trinca Logo" width={48} height={48} />
      </footer>
    </main>
  );
};

export default Home;
