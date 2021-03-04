import { ExperienceBar } from "../Componentes/ExperienceBar";
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { Profile } from "../Componentes/Profile";
import { CompletedChallenges } from "../Componentes/CompletedChallenges";
import { Countdown } from "../Componentes/Countdown";


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
    <ExperienceBar/>
    <section>
      <div>
        <Profile/>
        <CompletedChallenges/>      
        <Countdown/>
      </div>
      <div></div>
    </section>
     </div>

  )
}
