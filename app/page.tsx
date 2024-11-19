import styles from "./page.module.scss";
import Landing from "./landing/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
    </div>
  );
}
