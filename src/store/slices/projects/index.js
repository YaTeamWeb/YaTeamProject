import { createSlice } from '@reduxjs/toolkit';
import { projects } from '../../../data/projects.js';

const initialState = {
	items: projects,
	currentCategory: 0,
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setCurrentCategory(state, action) {
			state.currentCategory = action.payload;
		},
		setCategoryItems(state, action) {
			state.items = projects.filter((item) => {
				if (action.payload === 0) {
					return item.category;
				}
				return item.category === action.payload;
			});
		},
		setSearchItems(state, action) {
			state.items = projects.filter((item) => {
				if (
					item.translations[0].title
						.toLowerCase()
						.includes(action.payload.toLowerCase())
				)
					return state.currentCategory !== 0
						? item.category === state.currentCategory
						: item;
				if (item.translations[1].title.toLowerCase().includes(action.payload))
					return state.currentCategory !== 0
						? item.category === state.currentCategory
						: item;
			});
		},
	},
});

export const { setCurrentCategory, setCategoryItems, setSearchItems } =
	projectsSlice.actions;

export default projectsSlice.reducer;
