import { Redirect, Route } from "react-router";
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !localStorage.getItem("loginToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dashboard" }} />
        );
      }}
    />
  );
};
export default PublicRoute;
