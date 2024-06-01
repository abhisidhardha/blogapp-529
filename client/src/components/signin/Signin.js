import "./Signin.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userAuthorLoginThunk } from "../../redux/slice/userAuthorslice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let { isPending, currentUser, loginUserStatus, errorOccurred, errMsg } =
    useSelector((state) => state.userAuthorLoginReducer);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function onSignUpFormSubmit(userCred) {
    dispatch(userAuthorLoginThunk(userCred));
  }

  useEffect(() => {
    if (loginUserStatus) {
      if (currentUser.userType === "user") {
        navigate("/user-profile");
      }
      if (currentUser.userType === "author") {
        navigate("/author-profile");
      }
    }
  }, [loginUserStatus]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card signin-card">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>Signin</h2>
            </div>
            <div className="card-body">
              {errorOccurred === true && (
                <p className="text-center text-danger">
                  {errMsg}
                </p>
              )}
              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                <div className="mb-4 row usertypel-container">
                  <div className="form-check col usertypel">
                    <input type="radio" className="form-check-input" defaultChecked  id="author" value="author" {...register("userType")} />
                    <label htmlFor="author" className="form-check-label" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>Author</label>
                  </div>
                  <div className="form-check col usertypel">
                    <input type="radio" className="form-check-input" id="user" value="user" {...register("userType")}/>
                    <label htmlFor="user" className="form-check-label" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>User</label>
                  </div>
                </div>
                <div className="mb-4 inpu">
                  <label htmlFor="username" className="form-label" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Username
                  </label>
                  <input
                    type="text"
                    className=""
                    id="username"
                    {...register("username")}
                  />
                </div>
                <div className="mb-4 inpu">
                  <label htmlFor="password" className="form-label"  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className=""
                    id="password"
                    {...register("password")}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn inbtn"  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;