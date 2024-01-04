import { Suspense } from "react";
import "./ProductForm.css";
import { useProductForm } from "./hooks/useProductForm";
import { Link } from "react-router-dom";

export const ProductForm = () => {
  const { categories, id, form, setForm, handleOnSubmit } = useProductForm();
  const title = id ? `Edit Product` : "Add Product";
  return (
    <Suspense fallback={<>Loading...</>}>
      <section className="product-form-section">
        <div className="back-container">
          {id ? (
            <Link to={`/products/${id}`}>{"<"} Back to product detail</Link>
          ) : (
            <Link to="/products">{"<"} Back to products</Link>
          )}
        </div>
        <h1>{title}</h1>
        <form className="product-form" onSubmit={handleOnSubmit}>
          <div className="input-wrapper">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Category</label>
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  categoryId: e.target.value,
                }))
              }
              defaultValue={1}
            >
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label>SKU</label>
            <input
              type="text"
              name="sku"
              value={form.sku}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  sku: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Price</label>
            <input
              type="number"
              name="harga"
              value={form.harga}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  harga: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  image: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Weight</label>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  weight: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Height</label>
            <input
              type="number"
              name="height"
              value={form.height}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  height: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Width</label>
            <input
              type="number"
              name="width"
              value={form.width}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  width: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-wrapper">
            <label>Length</label>
            <input
              type="number"
              name="length"
              value={form.length}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  length: e.target.value,
                }))
              }
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      </section>
    </Suspense>
  );
};
