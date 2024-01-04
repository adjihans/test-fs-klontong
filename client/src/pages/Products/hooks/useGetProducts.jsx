import { useEffect } from "react";
import { getAllProductUseCase } from "../../../use-case/product-use-case";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setCurrentPage,
  setTotalPage,
} from "../../../store/product-store/productList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useGetProducts = () => {
  const { products, currentPage, totalPage } = useSelector(
    (state) => state.productListReducer
  );
  const [keyword, setKeyword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProductList = async (page, limit, keyword) => {
    const { data } = await getAllProductUseCase(page, limit, keyword);
    if (!data) return;
    dispatch(setProducts(data?.products));
    dispatch(setTotalPage(data?.totalPage));
  };

  const handleOnClickNextPage = () => {
    const newPage =
      currentPage + 1 <= totalPage ? currentPage + 1 : currentPage;
    dispatch(setCurrentPage(newPage));

    getProductList(newPage, 10, keyword);
  };

  const handleOnClickPrevPage = () => {
    const newPage = currentPage - 1 > 1 ? currentPage - 1 : 1;
    dispatch(setCurrentPage(newPage));
    getProductList(newPage, 10, keyword);
  };

  const handleOnClickProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleOnSubmitSearchProduct = (event) => {
    event.preventDefault();
    getProductList(1, 10, keyword);
  };

  useEffect(() => {
    getProductList(1, 10);
  }, []);

  return {
    currentPage,
    totalPage,
    products,
    keyword,
    setKeyword,
    handleOnSubmitSearchProduct,
    handleOnClickNextPage,
    handleOnClickPrevPage,
    handleOnClickProduct,
  };
};
