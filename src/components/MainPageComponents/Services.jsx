import React, { useEffect } from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import { ServicesItem } from './ServicesItem';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slices/theme/selectors.js';

const offset = 69;
const angles = [];
let nearBy = [];

export const Services = () => {
	const theme = useSelector(selectTheme);
	useEffect(() => {
		for (let i = 0; i <= 360; i += 45) {
			angles.push((i * Math.PI) / 180);
		}
	}, []);

	const clearNearBy = () => {
		nearBy
			.splice(0, nearBy.length)
			.forEach((e) => (e.style.borderImage = null));
	};

	const onMouseMove = (e) => {
		const x = e.clientX;
		const y = e.clientY;
		clearNearBy();
		nearBy = angles.reduce((acc, rad) => {
			const cx = Math.floor(x + Math.cos(rad) * offset);
			const cy = Math.floor(y + Math.sin(rad) * offset);
			const element = document.elementFromPoint(cx, cy);
			if (element !== null) {
				if (
					element.classList.contains('item') &&
					acc.findIndex((ae) => ae.id === element.id) < 0
				) {
					const brect = element.getBoundingClientRect();
					const bx = x - brect.left;
					const by = y - brect.top;
					if (!element.style.borderImage && theme)
						element.style.borderImage = `radial-gradient(${offset * 2}px ${
							offset * 2
						}px at ${bx}px ${by}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1),transparent ) 9 / 1px / 0px stretch `;
					return [...acc, element];
				}
			}
			return acc;
		}, []);
	};

	return (
		<section
			onMouseLeave={theme ? clearNearBy : null}
			onMouseMove={theme ? onMouseMove : null}
			id="services"
			className="container py-16"
		>
			<SupTitle>Сервисы</SupTitle>
			<Heading2 className="mb-10 dark:text-light duration-500">
				Услуги, которые предоставляет наша компания
			</Heading2>
			<ul className="text-center gap-5 grid grid-cols-12">
				<ServicesItem
					clearNearBy={clearNearBy}
					title={'Сайт под ключ'}
					description={'Разработаем вам сайт от идеи до запуска в интернете'}
					svgName={'key'}
					id={'1'}
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={'Вёрстка с макета'}
					description={'Сверстаем сайт по готовому макету'}
					svgName={'layout'}
					id={'2'}
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={'Поддержка сайта'}
					description={'Поддердим уже готовый сайт'}
					svgName={'browser'}
					id={'3'}
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={'Сайт под ключ'}
					description={'Разработаем вам сайт от идеи до запуска в интернете'}
					svgName={'key'}
					id={'4'}
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={'Вёрстка с макета'}
					description={'Сверстаем сайт по готовому макету'}
					svgName={'layout'}
					id={'5'}
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={'Поддержка сайта'}
					description={'Поддердим уже готовый сайт'}
					svgName={'browser'}
					id={'6'}
				/>
			</ul>
		</section>
	);
};
