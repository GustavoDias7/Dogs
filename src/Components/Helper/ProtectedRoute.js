import React from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ path, component }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Route path={path} component={component} />;
  else if (login === false) return <Redirect to="/login" />;
  else return null;
};

export default ProtectedRoute;
