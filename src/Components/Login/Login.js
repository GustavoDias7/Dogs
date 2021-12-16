import React from "react";
import { Redirect, Route, Switch } from "react-router";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";
import style from "./Login.module.css";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Redirect to="/conta" />;
  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Switch>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/login/criar" exact component={LoginCreate} />
          <Route path="/login/perdeu" exact component={LoginPasswordLost} />
          <Route path="/login/resetar" exact component={LoginPasswordReset} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </section>
  );
};

export default Login;
