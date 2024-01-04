import { Suspense } from "react";
import { useGetProducts } from "./hooks/useGetProducts";
import { generateIDR, sliceText } from "../../utils/stringUtils";
import "./Products.css";
import { Link } from "react-router-dom";

export const Products = () => {
  const {
    currentPage,
    totalPage,
    products,
    handleOnClickNextPage,
    handleOnClickPrevPage,
    handleOnClickProduct,
  } = useGetProducts();
  return (
    <Suspense fallback={<>Loading...</>}>
      <section className="products-section">
        <div className="back-container">
          <Link to="/products/add">Add products</Link>
        </div>
        <h1>Product List</h1>
        <table className="product-table">
          <thead>
            <td>Name</td>
            <td>SKU</td>
            <td>Category</td>
            <td>Image</td>
            <td>Description</td>
            <td>Price</td>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleOnClickProduct(product.id);
                }}
              >
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.categoryName}</td>
                <td>
                  <img
                    src={product.image}
                    style={{
                      width: "50px",
                      aspectRatio: 1,
                      objectFit: "contain",
                    }}
                    alt={`${product.id}-${product.name}`}
                  />
                </td>
                <td>{`${sliceText(product.description, 0, 15)}...`}</td>
                <td>{generateIDR(product.harga)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-buttons">
          <button onClick={handleOnClickPrevPage} disabled={currentPage <= 1}>
            {"<"}
          </button>
          <div>{currentPage}</div>
          <button
            onClick={handleOnClickNextPage}
            disabled={currentPage >= totalPage}
          >
            {">"}
          </button>
        </div>
      </section>
    </Suspense>
  );
};
