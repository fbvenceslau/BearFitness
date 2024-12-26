/* eslint-disable @next/next/no-img-element */
import { ProductType } from '../../../service/productService';
import styles from './styles.module.scss';
import BuyButton from '../buttons/buyButton';

interface props {
  product: ProductType;
}

const ProductCard = function ({ product }: props) {
  return (
    <>
      <div className={styles.productCard}>
        <img
          src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.thumbnailurl}`}
          alt={product.name}
          className={styles.cardImg}
        />
        <p className={styles.productTitle}>{product.name}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <BuyButton link={`${product.link}`} text={"Comprar"}/>
      </div>
    </>
  );
};

export default ProductCard;