import styles from "@/styles/main-page/index.module.scss";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return <section className={styles.hero}></section>;
};

export default Hero;
