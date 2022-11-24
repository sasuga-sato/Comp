import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../compornents/atoms/pages/Top";
import { Users } from "../compornents/atoms/pages/Users";
import { DefaultLayout } from "../compornents/templates/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
