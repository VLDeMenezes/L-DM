import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <img
      src="logo.svg"
      alt="logo del Estudio Juridico  "
      className={styles.logo}
    />
  );
};

export default Logo;
