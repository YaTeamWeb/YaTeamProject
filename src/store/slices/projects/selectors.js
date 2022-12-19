export const selectProjectItems = (state) => {
	// eslint-disable-next-line no-unused-vars
	const { translations, ...items } = state.projects.items;
	const projects = state.projects.items;
	return projects.map((el) => {
		return {
			...el.translations.find((item) => item.lang === state.lang.language),
			id: el.id,
			languages: el.languages,
			image: el.image,
		};
	});
};

export const selectProjectCategory = (state) => state.projects.currentCategory;
