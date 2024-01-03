import { loginUseCase } from "../../../use-case/user-use-case";
import { useDispatch } from "react-redux";
import { setFullName } from "../../../store/login-store/fullName";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = form.get("username");
    const password = form.get("password");
    const payload = {
      username,
      password,
    };
    const data = await loginUseCase(payload);
    if (!data) return;
    dispatch(setFullName(data?.fullName));
    Cookies.set("access_token", data?.access_token, { expires: 1 });
    navigate("/");
  };

  return { handleOnSubmit };
};
