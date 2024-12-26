import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import { ReactNode, useEffect } from "react";
import productPopularService, { ProductPopularType } from "@/service/productPopularService";
import { GetStaticProps } from "next";
import ProductSection from "@/components/homeNoAuth/productSection";
import productService, { ProductType } from "@/service/productService";
import Footer from "@/components/common/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IndexPageProps {
  children?: ReactNode;
  productPopular: ProductPopularType[];
  getProducts: ProductType[];
}

const HomeNoAuth = function ({productPopular, getProducts}: IndexPageProps) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Bear Fitness</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og: title" content="Bear Fitness" key="title"/>
        <meta name="description" content="Tenha acesso as melhores roupas de academia!"/>
      </Head>
      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection/>
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection productsPopular={productPopular}/>
        </div>
        <div data-aos="fade-zoom-in" data-aos-duration="3000">
          <ProductSection products={getProducts}/>
        </div>
        <Footer/>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await productPopularService.getPopularProducts();
  const getProducts = await productService.getProducts();

  const limitedProducts = getProducts.data.slice(0, 8);

  return{
    props: {
      productPopular: res.data,
      getProducts: limitedProducts
    },
    revalidate: 3600 * 1 // Atualização a cada 24 horas
  };
};

export default HomeNoAuth;