import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../components/Header";
import { signUpRequest } from "../actions";

import "../assets/styles/components/Register.scss";

const Register = ({ history, signUpRequest }) => {
	const [stateValue, setStateValue] = useState({
		name: "",
		email: "",
		pass: "",
	});

	const handleChange = (e) =>
		setStateValue({
			...stateValue,
			[e.target.name]: e.target.value,
		});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(stateValue);
		signUpRequest(stateValue);
		history.push("/");
	};
	return (
		<>
			<Header isRegister />
			<section className="register">
				<section className="register__container">
					<h2>Regístrate</h2>
					<form className="register__container--form" onSubmit={handleSubmit}>
						<input
							className="input"
							type="text"
							name="name"
							placeholder="Nombre"
							onChange={handleChange}
						/>
						<input
							className="input"
							type="text"
							name="email"
							placeholder="Correo"
							onChange={handleChange}
						/>
						<input
							className="input"
							type="password"
							name="pass"
							placeholder="Contraseña"
							onChange={handleChange}
						/>
						<button className="button" type="submit">
							Registrarme
						</button>
					</form>
					<Link to="/login">Iniciar sesión</Link>
				</section>
			</section>
		</>
	);
};

const mapDispatch = {
	signUpRequest,
};

export default connect(null, mapDispatch)(Register);
