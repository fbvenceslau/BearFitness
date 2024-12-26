import { ProductPopularType } from "../../../service/productPopularService";
import { Container } from "reactstrap";
import ProductComponent from "@/components/common/productComponent";
import CustomButton from "@/components/common/buttons/customButton";
import Title from "@/components/common/title";

interface props {
  products: ProductPopularType[];
}

const ProductSection = function ({ products}: props){
  return <>
    <Container>
      <Title title={"Produtos populares"}/>
      <ProductComponent products={products}/>
      <div className="d-flex justify-content-center pb-3">
        <CustomButton link={"/products"} text={"Ver mais"}/>
      </div>
    </Container>
  </>
};

export default ProductSection;