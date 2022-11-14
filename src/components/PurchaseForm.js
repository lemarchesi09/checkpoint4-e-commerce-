import React from "react";
import { useUserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

const PurchaseForm = () => {
  const {user} = useUserContext();
  return (
    <div>
      {user?.role === "user" ? 
        <div className="container">
          <div className="col-sm-7 mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        :
        <Navigate to={"/"}></Navigate>

    }
    </div>
  );
};

export default PurchaseForm;
