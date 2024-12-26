import styles from './styles.module.scss';

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
      <img src="/favicon.svg" alt="logoBearFitness" className={styles.footerLogo}/>
      <p>
        Bear Fitness - A sua loja de roupa fitness. Siga nossa loja no Instragram
        <a 
          href="https://www.instagram.com/by_bearfitness/" 
          target={"_blank"}  
          className={styles.footerLink} 
          rel="noopener noreferrer"
        > @by_bearfitness</a> e fique por dentro das novidades.
      </p>
		</div>
    </>
  );
};

export default Footer;  