import { configureStore } from '@reduxjs/toolkit';
import theme from './slices/theme/index.js';
import lang from './slices/lang/index.js';
import projects from './slices/projects/index.js';
export const store = configureStore({
	reducer: { theme, lang, projects },
});
