import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackTop, Header } from './components/index.jsx';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="App subpixel-antialiased">
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</main>
			<BackTop className="fixed bottom-3 right-3" />
		</BrowserRouter>
	);
}

export default App;
