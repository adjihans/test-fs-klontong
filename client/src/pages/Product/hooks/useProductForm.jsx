import Cookies from "js-cookie";
import {
  createProductUseCase,
  getCategoriesUseCase,
} from "../../../use-case/product-use-case";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../../../store/product-store/productList";

export const useProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const access_token = Cookies.get("access_token");
  const { categories } = useSelector((state) => state.productListReducer);
  const dispatch = useDispatch();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"),
      sku: form.get("sku"),
      harga: Number(form.get("harga")),
      image: form.get("image"),
      description: form.get("description"),
      weight: Number(form.get("weight")),
      height: Number(form.get("height")),
      width: Number(form.get("width")),
      length: Number(form.get("length")),
      categoryId: Number(form.get("categoryId")),
    };

    const submitForm = await createProductUseCase(payload, access_token);
    if (!submitForm.data) return;
    navigate("/products");
  };

  const getCategories = async () => {
    const { data } = await getCategoriesUseCase(access_token);
    dispatch(setCategories(data?.categories));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, id, handleOnSubmit };
};
