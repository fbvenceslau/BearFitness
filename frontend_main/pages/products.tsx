import Head from "next/head";
import styles from "../styles/products.module.scss" 
import Footer from "@/components/common/footer";
import { ReactNode } from "react";
import productService, { ProductType } from "@/service/productService";
import ProductSection from "@/components/homeNoAuth/productSection";
import { GetStaticProps } from "next";
import CustomButton from "@/components/common/buttons/customButton";

interface IndexPageProps {
  children?: ReactNode;
  getProducts: ProductType[];
}

const Products = function({getProducts}: IndexPageProps) {
  return (<>
    <Head>
      <title>Bear Fitness - Produtos</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </Head>
    <main className={styles.sectionBackground}>
      <div className={styles.sectionBtn}>
        <CustomButton link={"/"} text={"Voltar"}/>
      </div>
      <div className={styles.sectionProducts}>
        <ProductSection products={getProducts}/>
      </div>
      <Footer/>
    </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getProducts = await productService.getProducts();
  return{
    props: {
      getProducts: getProducts.data
    },
    revalidate: 3600 * 1 // Atualização a cada 24 horas
  };
};

export default Products;