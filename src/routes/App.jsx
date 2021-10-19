import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () => (
  <Routes>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Routes>
);

export default App;
