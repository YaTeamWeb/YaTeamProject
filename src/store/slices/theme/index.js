import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isDark:
		localStorage.getItem('theme') !== null
			? JSON.parse(localStorage.getItem('theme'))
			: false,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.isDark = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
