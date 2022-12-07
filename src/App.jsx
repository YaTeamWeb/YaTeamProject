import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/svg/react.svg';
import { AnotherComponent } from './components';

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App flex flex-col items-center justify-center min-h-screen">
			<div className="flex items-center justify-center">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-3xl font-bold">Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<AnotherComponent />
		</div>
	);
}

export default App;
