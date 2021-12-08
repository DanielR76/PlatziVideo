import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Player from "../containers/Player";
import NotFound from "../containers/NotFound";

import initialState from "../../initialState.json";
import reducer from "../reducers";

const store = createStore(
	reducer,
	initialState.initalState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
	<Provider store={store}>
		<Routes>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/player/:id" component={Player} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Routes>
	</Provider>
);

export default App;
