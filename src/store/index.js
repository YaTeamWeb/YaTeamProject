import { configureStore } from '@reduxjs/toolkit';
import theme from './slices/theme/index.js';
export const store = configureStore({
	reducer: { theme },
});
