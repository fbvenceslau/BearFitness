import { ProductType } from "../../../service/productService";
import ProductCard from "../productCard";

interface props {
  products: ProductType[];
}

const ProductComponent = function ({products}: props) {
  
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-2 py-4">
          {products?.map((product) => (
            <ProductCard 
              product={product}
              key={product.id}
            />
          ))}
      </div>
    </>
  );
};

export default ProductComponent;