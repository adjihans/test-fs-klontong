import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailUseCase } from "../../../use-case/product-use-case";
import { setProduct } from "../../../store/product-store/productList";

export const useGetProduct = () => {
  const { product } = useSelector((state) => state.productListReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getProductDetail = async () => {
    const { data } = await getProductDetailUseCase(id);
    if (!data) return;
    dispatch(setProduct(data?.product));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return { product, id };
};
