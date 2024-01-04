import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteProductUseCase,
  getProductDetailUseCase,
} from "../../../use-case/product-use-case";
import { setProduct } from "../../../store/product-store/productList";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useProductDetail = () => {
  const { product } = useSelector((state) => state.productListReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const access_token = Cookies.get("access_token");
  const navigate = useNavigate();

  const getProductDetail = async () => {
    const { data } = await getProductDetailUseCase(id);
    if (!data) return;
    dispatch(setProduct(data?.product));
  };

  const handleOnDeleteProduct = async () => {
    const response = await deleteProductUseCase(access_token, id);
    if (response.status !== 200) return;
    navigate("/products");
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return { product, id, handleOnDeleteProduct };
};
