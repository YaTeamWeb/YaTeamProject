import { createSlice } from '@reduxjs/toolkit';
import { projects } from '../../../data/projects.js';

const items = { items: projects, count: projects.length };

const initialState = {
	items: items.items,
	currentCategory: 0,
	count: items.count,
	limit: 2,
};

const filterSearchItems = (state, action, items) => {
	return items.filter((item) => {
		if (
			item.translations[0].title
				.toLowerCase()
				.includes(action.payload.toLowerCase())
		)
			return state.currentCategory !== 0
				? item.category === state.currentCategory
				: item;
		if (
			item.translations[1].title
				.toLowerCase()
				.includes(action.payload.toLowerCase())
		)
			return state.currentCategory !== 0
				? item.category === state.currentCategory
				: item;
	});
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setCurrentCategory(state, action) {
			state.currentCategory = action.payload;
		},
		setCategoryItems(state, action) {
			state.items = projects
				.filter((item) => {
					if (action.payload === 0) {
						return item.category;
					}
					return item.category === action.payload;
				})
				.slice(0, state.limit);

			state.count = projects.filter((item) => {
				if (action.payload === 0) {
					return item.category;
				}
				return item.category === action.payload;
			}).length;
		},
		setItemsLimit(state, action) {
			state.limit = action.payload;
		},
		setSearchItems(state, action) {
			state.items = filterSearchItems(state, action, items.items).slice(
				0,
				state.limit
			);
			state.count = filterSearchItems(state, action, items.items).length;
		},
	},
});

export const {
	setCurrentCategory,
	setCategoryItems,
	setSearchItems,
	setItemsLimit,
} = projectsSlice.actions;

export default projectsSlice.reducer;
