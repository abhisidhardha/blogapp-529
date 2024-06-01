import "./Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setErr] = useState("");
  let [state, setState] = useState(false);
  let [signupSuccess, setSignupSuccess] = useState(false);

  async function onSignUpFormSubmit(userObj) {
    console.log(userObj);
    if (userObj.userType === "user") {
      let res = await axios.post("http://localhost:4000/user-api/user", userObj);
        if(res.data.message==="User created"){
          setState(true);
          setSignupSuccess(true);
          setErr("");
        }else{
            setErr(res.data.message)
        }
    }
    if (userObj.userType === "author") {
      let res = await axios.post("http://localhost:4000/author-api/user", userObj);
        if(res.data.message==="Author created"){
          setState(true);
          setSignupSuccess(true);
          setErr("");
        }else{
            setErr(res.data.message)
        }
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card signup-card">
            <div className="card-title text-center border-bottom">
              {signupSuccess === true ? (
                <div>
                  <p className="lead fs-3 text-center display-4 text-success" style={{ fontFamily: '"DM Sans", sans-serif' }} >
                    User registration success
                  </p>
                  <p className="text-center d-inline fs-6 text-secondary pe-2">
                    Proceed to <Link to="/signin">Login</Link>
                  </p>
                  <p className="text-center d-inline fs-6 text-secondary">
                    Back to <Link to="/">Home</Link>
                  </p>
                </div>
              ) : (
                <h2 className="p-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>Signup</h2>
              )}
            </div>
            <div className="card-body">
              {err.length !== 0 && (
                <p className="lead text-center text-danger">{err}</p>
              )}

              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                <div className="mb-4 row usertypes-container">
                  <div className="form-check col usertypes">
                    <input type="radio" className="form-check-input" defaultChecked  id="author" value="author" {...register("userType", { disabled: state })} />
                    <label htmlFor="author" className="form-check-label" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>Author</label>
                  </div>
                  <div className="form-check col usertypes">
                    <input type="radio" className="form-check-input" id="user" value="user" {...register("userType", { disabled: state })}/>
                    <label htmlFor="user" className="form-check-label" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>User</label>
                  </div>
                </div>
                <div className="mb-4 inpt">
                  <label htmlFor="username" className="form-label"  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Username
                  </label>
                  <input
                    type="text"
                    className=""
                    id="username"
                    {...register("username", { disabled: state })}
                  />
                </div>
                <div className="mb-4 inpt">
                  <label htmlFor="password" className="form-label d-block"  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className=""
                    id="password"
                    {...register("password", { disabled: state })}
                  />
                </div>
                <div className="mb-4 inpt">
                  <label htmlFor="email" className="form-label"  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className=""
                    id="email"
                    {...register("email", { disabled: state })}
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn" disabled={state}  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                    Register
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

export default Signup;
