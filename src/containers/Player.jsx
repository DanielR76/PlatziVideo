import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";

import NotFound from "./NotFound";
import "../assets/styles/components/Player.scss";

const Player = ({ history, match, getVideoSource, playing }) => {
	const hasPlaying = Object.keys(playing).length > 0;

	useEffect(() => {
		getVideoSource(match.params.id);
	}, []);

	return hasPlaying ? (
		<div className="Player">
			<video controls autoPlay>
				<source src={playing.source} type="video/mp4" />
			</video>
			<div className="Player-back">
				<button type="button" onClick={() => history.goBack()}>
					Regresar
				</button>
			</div>
		</div>
	) : (
		<NotFound />
	);
};

const mapState = (state) => ({ playing: state.playing });

const mapDispatch = { getVideoSource };

export default connect(mapState, mapDispatch)(Player);
