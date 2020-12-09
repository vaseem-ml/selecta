import apiPath from "../../common/helpers/apiPath";
import Helper from "../../common/helpers/Helper";

export const validateLoginSuccess = (validateLoginSuccessData: any) => ({
  type: 'LOG_IN',
  payload: { validateLoginSuccessData }
});

export function validateLogin(dataToValidate: any) {
  return (dispatch: any) => {
    const fr = Helper.post(dataToValidate, apiPath.login);
    fr.then(
      res => res.response.json()
    ).then(result => {
      console.log(result);
      if( result.msg === "Successfully LoggedIn" ){
        dispatch(validateLoginSuccess(result.result));
      }else{
        alert('Wrong Credential');
      }
    });
  }
}
