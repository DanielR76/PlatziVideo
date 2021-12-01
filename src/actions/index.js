export const actions = {
	SET_FAVORITE: "SET_FAVORITE",
	DELETE_FAVORITE: "DELETE_FAVORITE",
	LOGIN_REQUEST: "LOGIN_REQUEST",
	LOGOUT_REQUEST: "LOGOUT_REQUEST",
	SIGN_UP: "SIGN_UP",
	GET_VIDEO_SOURCE: "GET_VIDEO_SOURCE",
};

export const setFavorite = (payload) => ({
	type: actions.SET_FAVORITE,
	payload,
});

export const deleteFavorite = (payload) => ({
	type: actions.DELETE_FAVORITE,
	payload,
});

export const loginRequest = (payload) => ({
	type: actions.LOGIN_REQUEST,
	payload,
});

export const logoutRequest = (payload) => ({
	type: actions.LOGOUT_REQUEST,
	payload,
});

export const signUpRequest = (payload) => ({
	type: actions.SIGN_UP,
	payload,
});

export const getVideoSource = (payload) => ({
	type: actions.GET_VIDEO_SOURCE,
	payload,
});
