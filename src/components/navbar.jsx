import { Link, useNavigate } from "react-router-dom";
import { Image } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom container ">
      <Link to={"/"}>
        <img src={Image} alt="logo" width={100} />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <div className="d-flex ">
            <p className="pt-3 me-3 text-decoration-none">
              <b>{user.username}</b>
            </p>
            <button
              className="btn btn-danger text-center"
              onClick={logOutHandler}
            >
              LogOut
            </button>
          </div>
        ) : (
          <>
            <Link
              to={"/login"}
              className="me-3  link-body-emphasis text-decoration-none"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="me-3  link-body-emphasis text-decoration-none"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
