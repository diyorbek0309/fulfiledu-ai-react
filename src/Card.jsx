import styles from "./Card.module.css";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Logo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
