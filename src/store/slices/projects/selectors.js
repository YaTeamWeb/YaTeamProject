export const selectProjectItems = (state) => {
	// eslint-disable-next-line no-unused-vars
	const { translations, ...items } = state.projects.items;
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
