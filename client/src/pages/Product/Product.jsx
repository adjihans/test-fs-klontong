import { generateIDR } from "../../utils/stringUtils";
import { useGetProduct } from "./hooks/useGetProduct";
import "./Product.css";

export const Product = () => {
  const { product } = useGetProduct();
  return (
    <section className="product-section">
      <img
        className="product-image"
        src={product.image}
        alt={`${product.name}-${product.id}`}
      />
      <div className="product-detail">
        <h2>{product.name}</h2>
        <div className="important-info">
          <p>{product.categoryName}</p>
          <div className="dot-black" />
          <p>{generateIDR(product.harga)}</p>
          <div className="dot-black" />
          <p>{product.sku}</p>
        </div>
        <label>Description</label>
        <p>{product.description}</p>
        <div className="other-info">
          <div className="other-info-wrapper">
            <label>Height</label>
            <p>{product.height}</p>
          </div>
          <div className="other-info-wrapper">
            <label>Weight</label>
            <p>{product.weight}</p>
          </div>
          <div className="other-info-wrapper">
            <label>Width</label>
            <p>{product.width}</p>
          </div>
          <div className="other-info-wrapper">
            <label>Length</label>
            <p>{product.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
