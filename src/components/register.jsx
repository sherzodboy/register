import { useEffect, useState } from "react";
import Input, { Image } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [loggedIn]);

  return (
    <div className="text-center">
      <main className="from-signin w-25 m-auto">
        <form>
          <img width={100} src={Image} alt="img" />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <ValidationError />
          <Input
            label={"Username"}
            type="text"
            state={name}
            setState={setName}
          />
          <Input
            label={"Email address"}
            type={"email"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type={"password"}
            autoComplete="current-password"
            state={password}
            setState={setPassword}
          />
          <button
            onClick={registerHandler}
            className="mt-2 btn btn-primary w-100 py-2"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
