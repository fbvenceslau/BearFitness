import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import CustomButton from "@/components/common/buttons/customButton";

const HeaderNoAuth = function () {
  return	<>
    <div className={styles.ctaSection}>
      <p>
        Bear Fitness - A sua loja de roupa fitness. Siga nossa loja no Instragram
        <a href="https://www.instagram.com/by_bearfitness/" target="_blank" rel="noopener noreferrer"> @by_bearfitness</a>
        e fique por dentro das novidades.
      </p>
		</div>
		<Container className={styles.nav}>
			<div>
        <CustomButton link={"/orders"} text={"Meu pedido"}/>
			</div>
		</Container>
  </>;
};

export default HeaderNoAuth;
