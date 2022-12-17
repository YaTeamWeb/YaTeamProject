import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slices/theme/selectors.js';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import React, { useEffect } from 'react';
import { SupTitle } from '../UI/SupTitle.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { TeamItem } from './TeamItem';
import renat from '../../assets/images/MainPageImages/renat.png';
import insaf from '../../assets/images/MainPageImages/insaf.png';
import dmitriy from '../../assets/images/MainPageImages/dmitriy.png';
import stepan from '../../assets/images/MainPageImages/stepan.png';

// const offset = 69;
const angles = [];
// let nearBy = [];

export const Team = () => {
	const theme = useSelector(selectTheme);
	const { team } = useSelector(selectLangItems);
	useEffect(() => {
		for (let i = 0; i <= 360; i += 45) {
			angles.push((i * Math.PI) / 180);
		}
	}, []);

	const clearNearBy = () => {
		// 	nearBy
		// 		.splice(0, nearBy.length)
		// 		.forEach((e) => (e.style.borderImage = null));
	};

	const onMouseMove = (e) => {
		return e;
		// const x = e.clientX;
		// const y = e.clientY;
		// clearNearBy();
		// nearBy = angles.reduce((acc, rad) => {
		// 	const cx = Math.floor(x + Math.cos(rad) * offset);
		// 	const cy = Math.floor(y + Math.sin(rad) * offset);
		// 	const element = document.elementFromPoint(cx, cy);
		// 	if (element !== null) {
		// 		if (
		// 			element.classList.contains('item') &&
		// 			acc.findIndex((ae) => ae.id === element.id) < 0
		// 		) {
		// 			const brect = element.getBoundingClientRect();
		// 			const bx = x - brect.left;
		// 			const by = y - brect.top;
		// 			if (!element.style.borderImage && theme)
		// 				element.style.borderImage = `radial-gradient(${offset * 2}px ${
		// 					offset * 2
		// 				}px at ${bx}px ${by}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1),transparent ) 9 / 1px / 0px stretch `;
		// 			return [...acc, element];
		// 		}
		// 	}
		// 	return acc;
		// }, []);
	};
	console.log(team);
	return (
		<section
			onMouseLeave={theme ? clearNearBy : null}
			onMouseMove={theme ? onMouseMove : null}
			id="services"
			className="container py-16"
			data-aos="fade-up"
			data-aos-delay="500"
		>
			<div data-aos="fade-up" data-aos-delay="500" data-aos-offset="450">
				<SupTitle>{team.suptitle}</SupTitle>
				<Heading2 className="mb-10 dark:text-light duration-500">
					{team.title}
				</Heading2>
			</div>

			<ul className="text-center gap-5 grid grid-cols-4">
				<TeamItem
					clearNearBy={clearNearBy}
					id={'1'}
					initial={team.people[0].name}
					role={team.people[0].job}
					photo={renat}
					backGround={
						'bg-[radial-gradient(29.64%_29.64%_at_49.87%_29.64%,#9D4EDD_0%,rgba(213,162,255,0.5)_100%),linear-gradient(180deg,#D7D7D7_0%,rgba(239,239,239,0.5)_100%)]'
					}
					dataAos="zoom-in"
					dataAosDelay="0"
					dataAosOffset="0"
				/>
				<TeamItem
					clearNearBy={clearNearBy}
					id={'2'}
					initial={team.people[1].name}
					role={team.people[1].job}
					photo={insaf}
					backGround={
						'bg-[linear-gradient(180deg,#D7D7D7_0%,rgba(239,239,239,0.5)_100%)]'
					}
					dataAos="zoom-in"
					dataAosDelay="0"
					dataAosOffset="0"
				/>
				<TeamItem
					clearNearBy={clearNearBy}
					id={'3'}
					initial={team.people[2].name}
					role={team.people[2].job}
					photo={dmitriy}
					backGround={
						'bg-[linear-gradient(180deg,#D7D7D7_0%,rgba(239,239,239,0.5)_100%)]'
					}
					dataAos="zoom-in"
					dataAosDelay="0"
					dataAosOffset="0"
				/>
				<TeamItem
					clearNearBy={clearNearBy}
					id={'4'}
					initial={team.people[3].name}
					role={team.people[3].job}
					photo={stepan}
					backGround={
						'bg-[linear-gradient(180deg,#D7D7D7_0%,rgba(239,239,239,0.5)_100%)]'
					}
					dataAos="zoom-in"
					dataAosDelay="0"
					dataAosOffset="0"
				/>
			</ul>
		</section>
	);
};
