export const selectLang = (state) => state.lang.language;
export const selectLangItems = (state) =>
	state.lang.items.find((el) => el.lang === state.lang.language);
