import styles from "./styles.module.scss";
import { Container, Row, Col } from "reactstrap";

const PresentationSection = function () {
  return <>
    <Container className="py-4">
      <Row>
        <Col md className="d-flex flex-column justify-content-center align-items-start">
          <p className={styles.subTitle}>A sua loja de roupas fitness.</p>
          <p className={styles.title}>Aqui você encontra as melhores<br />roupas para seu treino.</p>
          <p className={styles.description}>Bear Fitness - A sua loja de roupa fitness.</p>
        </Col>
        <Col md>
          <img src="/Bear Fitness Branco.svg" alt="imgIndex" className={styles.imgSection}/>
        </Col>
      </Row>
    </Container>
  </>
}

export default PresentationSection