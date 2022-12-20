export const selectProjectItems = (state) => {
	const projects = state.projects.items;
	return projects.map((el) => {
		return {
			...el.translations.find((item) => item.lang === state.lang.language),
			id: el.id,
			languages: el.languages,
			images: el.images,
			link: el.link,
		};
	});
};

export const selectProjectCategory = (state) => state.projects.currentCategory;
export const selectItemsLimit = (state) => state.projects.limit;
export const selectItemsCount = (state) => state.projects.count;
export const selectProjectItem = (id) => (state) => {
	const item = state.projects.items.find((el) => el.id === id);
	if (item) {
		return {
			...item.translations.find((item) => item.lang === state.lang.language),
			id: item.id,
			languages: item.languages,
			images: item.images,
			link: item.link,
			createdDate: item.createdDate,
		};
	}
};
