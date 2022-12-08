import React from 'react';
import {AnotherComponent} from './components';

function App() {
	return (
		<div className="App flex flex-col items-center justify-center min-h-screen">
			{/*Уберите AnotherComponent и стили у App*/}
			<AnotherComponent />
		</div>
	);
}

export default App;
