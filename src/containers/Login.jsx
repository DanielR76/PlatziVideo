import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";
import { loginRequest } from "../actions";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";

const initialValues = { email: "", pass: "" };

const Login = ({ history, loginRequest }) => {
	const [form, setForm] = useState({ ...initialValues });

	const handleChange = ({ target }) => {
		setForm({ ...form, [target.name]: target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginRequest(form);
		console.log(form);
		history.push("/");
	};

	return (
		<>
			<Header isLogin />
			<section className="login">
				<section className="login__container">
					<h2>Inicia sesión</h2>
					<form className="login__container--form" onSubmit={handleSubmit}>
						<input
							className="input"
							type="text"
							placeholder="Correo"
							name="email"
							onChange={handleChange}
						/>
						<input
							className="input"
							type="password"
							placeholder="Contraseña"
							name="pass"
							onChange={handleChange}
						/>
						<button className="button" type="submit">
							Iniciar sesión
						</button>
						<div className="login__container--remember-me">
							<label htmlFor="cbox1">
								<input type="checkbox" id="cbox1" value="first_checkbox" />
								Recuérdame
							</label>
							<a href="/">Olvidé mi contraseña</a>
						</div>
					</form>
					<section className="login__container--social-media">
						<div>
							<img src={googleIcon} alt="google" />
							Inicia sesión con Google
						</div>
						<div>
							<img src={twitterIcon} alt="twitter" />
							Inicia sesión con Twitter
						</div>
					</section>
					<p className="login__container--register">
						No tienes ninguna cuenta
						<Link to="/register">Regístrate</Link>
					</p>
				</section>
			</section>
		</>
	);
};

const mapDispatch = {
	loginRequest,
};

export default connect(null, mapDispatch)(Login);
