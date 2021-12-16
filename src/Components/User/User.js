import React from "react";
import { Route, Switch } from "react-router";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import Head from "../Helper/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" description="Sua conta no site Dogs" />
      <UserHeader />
      <Switch>
        <Route path="/conta" exact render={() => <Feed user={data.id} />} />
        <Route path="/conta/postar" exact component={UserPhotoPost} />
        <Route path="/conta/estatisticas" exact component={UserStats} />
        <Route path="*" component={NotFound} />
      </Switch>
    </section>
  );
};

export default User;
