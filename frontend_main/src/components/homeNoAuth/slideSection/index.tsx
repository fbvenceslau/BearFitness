import { ProductPopularType } from "../../../service/productPopularService";
import { Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import CustomButton from "@/components/common/buttons/customButton";
import Title from "@/components/common/title";

interface props {
  productsPopular: ProductPopularType[];
}

const SlideSection = function ({ productsPopular}: props){
  return <>
    <Container fluid className="d-flex flex-column align-items-center py-5">
      <Title title={"Produtos mais queridos"} />
      <SlideComponent product={productsPopular}/>
      <CustomButton link={"/products/popular"} text={"Ver mais"}/>
    </Container>
  </>
};

export default SlideSection