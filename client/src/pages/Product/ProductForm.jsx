import "./ProductForm.css";
import { useProductForm } from "./hooks/useProductForm";

export const ProductForm = () => {
  const { categories, id, handleOnSubmit } = useProductForm();
  const title = id ? `Edit Product` : "Add Product";
  return (
    <section className="product-form-section">
      <div className="back-container">
        {id ? (
          <a href={`/products/${id}`}>{"<"} Back to product detail</a>
        ) : (
          <a href="/products">{"<"} Back to products</a>
        )}
      </div>
      <h1>{title}</h1>
      <form className="product-form" onSubmit={handleOnSubmit}>
        <div className="input-wrapper">
          <label>Product Name</label>
          <input type="text" name="name" />
        </div>
        <div className="input-wrapper">
          <label>Category</label>
          <select name="categoryId">
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="input-wrapper">
          <label>SKU</label>
          <input type="text" name="sku" />
        </div>
        <div className="input-wrapper">
          <label>Price</label>
          <input type="number" name="harga" />
        </div>
        <div className="input-wrapper">
          <label>Image URL</label>
          <input type="text" name="image" />
        </div>
        <div className="input-wrapper">
          <label>Description</label>
          <textarea name="description" />
        </div>
        <div className="input-wrapper">
          <label>Weight</label>
          <input type="number" name="weight" />
        </div>
        <div className="input-wrapper">
          <label>Height</label>
          <input type="number" name="height" />
        </div>
        <div className="input-wrapper">
          <label>Width</label>
          <input type="number" name="width" />
        </div>
        <div className="input-wrapper">
          <label>Length</label>
          <input type="number" name="length" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </section>
  );
};
