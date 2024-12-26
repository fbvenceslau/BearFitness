import { ProductPopularType } from "../../../service/productPopularService";
import { Splide, SplideSlide } from "../../../../node_modules/@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../slideCard";

interface props {
  product: ProductPopularType[];
}

const SlideComponent = function ({product}: props) {

  let productCount = 0;
  if (product.length > 4) {
    productCount = 4; 
  } else {
    productCount = product.length;
  }
  
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: "loop",
            perPage: productCount,
            perMove: 1,
            width: productCount * 300,
            pagination: false,
            breakpoints: {
              1200: {
                perPage: productCount >= 2 ? 2 : 1,
                width: productCount >= 2 ? 640 : 300,     
                arrows: product.length > 4 ? true : false,
                drag: product.length > 4 ? true : false,
              },
              640: {
                perPage: 1,
                width: 300,
                arrows: product.length > 4 ? true : false,
                drag: product.length > 4 ? true : false,
              },
              300: {
                width: 250,
              },
            },
          }}
        >
          {product?.map((product) => (
            <SplideSlide key={product.id}>
              <SlideCard product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;