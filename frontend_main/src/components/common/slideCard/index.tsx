/* eslint-disable @next/next/no-img-element */
import { ProductPopularType } from '../../../service/productPopularService';
import styles from './styles.module.scss';
import BuyButton from '../buttons/buyButton';

interface props {
  product: ProductPopularType;
}

const SlideCard = function ({ product }: props) {
  return (
    <>
      <div className={styles.slide}>
        <img
          src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.thumbnailurl}`}
          alt={product.name}
          className={styles.slideImg}
        />
        <p className={styles.slideTitle}>{product.name}</p>
        <p className={styles.slideDescription}>{product.id}</p>
        <p className={styles.slideDescription}>{product.description}</p>
        <BuyButton link={`${product.link}`} text={"Comprar"}/>
      </div>
    </>
  );
};

export default SlideCard;