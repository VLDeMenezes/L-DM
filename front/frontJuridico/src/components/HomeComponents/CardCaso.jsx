import styles from "./CardCaso.module.css";
import PropTypes from "prop-types";
const CardCaso = (props) => {
  CardCaso.propTypes = {
    caso: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string,
      detalle: PropTypes.string.isRequired,
    }).isRequired,
  };

  const { title, img, detalle } = props.caso;
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={img ?? "/icono.svg"}
        alt="Imagen del caso"
        className={styles.img}
      />
      <p className={styles.detalles}>{detalle}</p>
      <p>Conocer mas...</p>
    </div>
  );
};

export default CardCaso;
