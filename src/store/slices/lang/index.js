import { createSlice } from '@reduxjs/toolkit';
import items from '../../../data/lang.json';
const defaultLang = 'eng';
const initialState = {
	language: defaultLang,
	items: items,
};

export const langSlice = createSlice({
	name: 'lang',
	initialState,
	reducers: {
		setLang(state, action) {
			state.language = action.payload;
		},
		setLangItems(state, action) {
			state.items = action.payload;
		},
	},
});

export const { setLang, setLangItems } = langSlice.actions;

export default langSlice.reducer;
