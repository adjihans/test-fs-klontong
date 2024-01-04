import { generateIDR } from "../../utils/stringUtils";
import { useProductDetail } from "./hooks/useProductDetail";
import "./Product.css";
import { Link } from "react-router-dom";

export const Product = () => {
  const { product, id, handleOnDeleteProduct } = useProductDetail();
  return (
    <section className="product-section">
      <div className="back-container">
        <Link to="/products">{"<"} Back to products</Link>
        <div>
          <Link to={`/products/${id}/update`}>Edit Detail</Link>
          <Link onClick={handleOnDeleteProduct} style={{ marginLeft: "1rem" }}>
            Delete Product
          </Link>
        </div>
      </div>
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
