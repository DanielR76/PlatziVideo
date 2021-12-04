import { actions } from "../actions";

const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_FAVORITE:
			return { ...state, myList: [...state.myList, action.payload] };
		case actions.DELETE_FAVORITE:
			return {
				...state,
				myList: state.myList.filter((e) => e.id !== action.payload),
			};
		case actions.LOGIN_REQUEST:
			return {
				...state,
				user: action.payload,
			};
		case actions.LOGOUT_REQUEST:
			return {
				...state,
				user: action.payload,
			};
		case actions.SIGN_UP:
			return {
				...state,
				user: action.payload,
			};
		case actions.GET_VIDEO_SOURCE:
			return {
				...state,
				playing:
					state.trends
						.concat(state.originals)
						.find((item) => item.id === Number(action.payload)) || [],
			};
		default:
			return state;
	}
};

export default reducer;
