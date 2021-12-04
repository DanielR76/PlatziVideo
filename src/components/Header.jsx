import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutRequest } from "../actions";

import "../assets/styles/components/Header.scss";
import classNames from "classnames";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import gravatar from "../utils/gravatar";

const Header = ({ user, logoutRequest, isLogin, isRegister }) => {
	const history = useHistory();
	const isUser = Object.keys(user).length > 0;

	const handleLogout = () => {
		logoutRequest({});
		history.push("/login");
	};

	const headerClass = classNames("header", {
		isLogin,
		isRegister,
	});

	return (
		<header className={headerClass}>
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{isUser ? (
						<img src={gravatar(user.email)} alt={user.email} />
					) : (
						<img src={userIcon} alt="" />
					)}
					<p>Perfil</p>
				</div>
				{isUser ? (
					<ul>
						<li>
							<a href="/">{user.email}</a>
						</li>
						<li>
							<a to="#logout" onClick={handleLogout} type="submit">
								Cerrar Sesión
							</a>
						</li>
					</ul>
				) : (
					<ul>
						<li>
							<Link to="/login">Iniciar Sesión</Link>
						</li>
					</ul>
				)}
			</div>
		</header>
	);
};

const mapState = (state) => ({
	user: state.user,
});

const mapDispatch = {
	logoutRequest,
};

export default connect(mapState, mapDispatch)(Header);
