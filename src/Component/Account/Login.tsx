import React from 'react';

const Login = () => {
  return(
    <>
      <div className="lgW d-none">Welcome To Selecta</div>
      <div className=" lgWC">
        <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-5 border bg-white">
          <form>
            <div className="form-group">
              <label>User Id</label>
              <input type="text" className="form-control" required/>
            </div> 
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" required/>
            </div>
            <div className="d-flex justify-content-center py-2">
              <button className="btn btn-outline-dark px-3 btn-sm">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;