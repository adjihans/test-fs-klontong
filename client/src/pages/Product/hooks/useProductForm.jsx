import Cookies from "js-cookie";
import {
  createProductUseCase,
  getCategoriesUseCase,
  updateProductUseCase,
} from "../../../use-case/product-use-case";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../../../store/product-store/productList";
import { useState } from "react";

export const useProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const access_token = Cookies.get("access_token");
  const { categories, product } = useSelector(
    (state) => state.productListReducer
  );
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: id ? product.name : null,
    sku: id ? product.sku : null,
    description: id ? product.description : null,
    harga: id ? product.harga : null,
    categoryId: id ? product.categoryId : null,
    image: id ? product.image : null,
    weight: id ? product.weight : null,
    height: id ? product.height : null,
    width: id ? product.width : null,
    length: id ? product.length : null,
  });
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!id) {
      const submitForm = await createProductUseCase(form, access_token);
      if (!submitForm.data) return;
      navigate("/products");
    } else {
      const updateSubmitForm = await updateProductUseCase(
        form,
        access_token,
        id
      );
      if (!updateSubmitForm.data) return;
      navigate(`/products/${id}`);
    }
  };

  const getCategories = async () => {
    const { data } = await getCategoriesUseCase(access_token);
    dispatch(setCategories(data?.categories));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, id, form, setForm, handleOnSubmit };
};
