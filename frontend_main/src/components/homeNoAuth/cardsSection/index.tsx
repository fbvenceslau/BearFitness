import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
  return <>
    	<p className={styles.sectionTitle}>NA NOSSA LOJA VOCÊ VAI ENCONTRAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>Calças Legging</p>
          <p className={styles.cardDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>Bermudas Legging</p>
          <p className={styles.cardDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>Cropped Dry Fit</p>
          <p className={styles.cardDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </Container>
  </>;
};

export default CardsSection;