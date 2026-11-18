import styles from './Home.module.css';

export default function Home() {
  return (
    <section aria-labelledby="home-name">
      <title>Ivan Salcedo</title>
      <div className={styles.media}>
        <video
          className={styles.mii}
          src="/media/home/mii.webm"
          poster="/media/home/mii-poster.png"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Animated Mii of Ivan Salcedo"
        />
      </div>
      <h1 id="home-name" className={styles.name}>
        ivan salcedo
      </h1>
    </section>
  );
}
