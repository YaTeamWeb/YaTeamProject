import React from 'react';
import { SvgIcon } from '../UI/index.jsx';

// Мой пример компонента ( можете предложить свой )
export const AnotherComponent = () => {
	return (
		<div className="flex items-center justify-center ">
			{/*	Пример использования SVG, цвет определяется через классы fill-цвет (tailwind)*/}
			<SvgIcon name="github" size={24} className="fill-primary" />

			{/*	Пример использования  Tailwind*/}
			<h1 className="text-3xl font-bold underline text-center">
				Начало работы!
			</h1>
		</div>
	);
};
