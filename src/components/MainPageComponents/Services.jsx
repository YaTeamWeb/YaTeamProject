import React, { useEffect } from 'react';
import { SupTitle } from '../UI/SupTitle.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { ServicesItem } from './ServicesItem.jsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slices/theme/selectors.js';
import { selectLangItems } from '../../store/slices/lang/selectors.js';

const offset = 69;
const angles = [];
let nearBy = [];

export const Services = () => {
	const theme = useSelector(selectTheme);
	const { services } = useSelector(selectLangItems);
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
			data-aos="fade-up"
			data-aos-delay="500"
			className="container py-16 px-[30px]"
		>
			<div data-aos="fade-up" data-aos-delay="0" data-aos-offset="450">
				<SupTitle>{services.suptitle}</SupTitle>
				<Heading2 className="mb-10 dark:text-light duration-500">
					{services.title}
				</Heading2>
			</div>

			<ul className="text-center gap-5 grid grid-cols-12">
				<ServicesItem
					clearNearBy={clearNearBy}
					title={services.cards[0].title}
					description={services.cards[0].description}
					svgName={'key'}
					id={'1'}
					dataAos="zoom-in"
					dataAosDelay="0"
					dataAosOffset="300"
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={services.cards[1].title}
					description={services.cards[1].description}
					svgName={'layout'}
					id={'2'}
					dataAos="zoom-in"
					dataAosDelay="50"
					dataAosOffset="300"
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={services.cards[2].title}
					description={services.cards[2].description}
					svgName={'optimization'}
					id={'3'}
					dataAos="zoom-in"
					dataAosDelay="100"
					dataAosOffset="300"
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={services.cards[3].title}
					description={services.cards[3].description}
					svgName={'chancery'}
					id={'4'}
					dataAos="zoom-in"
					dataAosDelay="0"
					dataAosOffset="300"
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={services.cards[4].title}
					description={services.cards[4].description}
					svgName={'browser'}
					id={'5'}
					dataAos="zoom-in"
					dataAosDelay="50"
					dataAosOffset="300"
				/>
				<ServicesItem
					clearNearBy={clearNearBy}
					title={services.cards[5].title}
					description={services.cards[5].description}
					svgName={'lifebuoy'}
					id={'6'}
					dataAos="zoom-in"
					dataAosDelay="100"
					dataAosOffset="300"
				/>
			</ul>
		</section>
	);
};
