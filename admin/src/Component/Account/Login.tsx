import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiPath from "../../common/helpers/apiPath";
import Helper from "../../common/helpers/Helper";
import { useSession } from "react-use-session";




const Login = () => {
  const { session, saveJWT } = useSession("selecta");
  const dispatch = useDispatch();
  const [loginCre, setLoginCre] = useState({
    userName: '',
    password: ''
  });
  const onHandleChange = (e: any) => {
    setLoginCre({ ...loginCre, [e.target.name]: e.target.value });
  }
  async function validate(e: any){
    e.preventDefault();
    let postjson = { username: loginCre.userName, password: loginCre.password };
    let path = apiPath.login;
    const fr = await Helper.post(postjson, path);
    const response = await fr.response.json();
    console.log('this is response', response);
    if(response.status===200) {;
      const token: string = response.result.token;
      saveJWT(token);
      localStorage.setItem("loginData", JSON.stringify({username: response.result.loginData.username}));
      Helper.toaster(response.msg, 'success')
    } else {
      Helper.toaster(response.msg, 'error');
    }
    //dispatch(validateLogin({user_name: loginCre.userName, password: loginCre.password}));
  }
  return (
    <>
      <div className="lgW d-none">Welcome To Selecta</div>
      <div className=" lgWC">
        <div className="col-xl-7 col-lg-8 col-md-12 col-12 p-5 border bg-white">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Login</h4>
              <p className="card-category">Enter Name and Password</p>
            </div>
            <div className="card-body">
              <form onSubmit={validate}>
                <div className="col-12">
                  <div className="form-group">
                    <label className="bmd-label-floating">User Name</label>
                    <input type="text" value={loginCre.userName} onChange={onHandleChange} name="userName" className="form-control" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="bmd-label-floating">Password</label>
                    <input type="password" value={loginCre.password} onChange={onHandleChange} name="password" className="form-control" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary pull-right">Login</button>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;