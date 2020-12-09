import { Route, RouteProps } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../../Component/Account/Login";


export function PrivateRoute({ children, ...rest }: RouteProps): JSX.Element {

    const account = useSelector((state: any) => state.account); 
    console.log('account ',account);
    return ( 
        <Route
            {...rest}
            render={() =>
                account.user_id ? (
                    children 
                ) : <Login/> 
            }
        />
    );
}