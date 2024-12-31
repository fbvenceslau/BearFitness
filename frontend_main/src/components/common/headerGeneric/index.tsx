import { Container } from 'reactstrap';
import styles from './styles.module.scss';
import CustomButton from '../buttons/customButton';
import Link from 'next/link';

interface props {
  logoUrl: string;
	btnUrl: string;
  btnContent: string;
}

const HeaderGeneric = function({ logoUrl, btnUrl, btnContent }: props) {
  return <>
    <div className={styles.header}>
      <Container className={styles.headerContainer}>
        {/* <Link href={logoUrl}>
          <img src="/Bear Fitness Branco.svg" alt="logoRegister" className={styles.headerLogo}/>
        </Link> */}
        {/* <CustomButton link={`${btnUrl}`} text={`${btnContent}`}/> */}
      </Container>
    </div>
  </>
};

export default HeaderGeneric;