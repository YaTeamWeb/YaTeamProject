import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import React, { useEffect } from 'react';
import { SupTitle } from '../UI/SupTitle.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { TeamItem } from './TeamItem';
import renat from '../../assets/images/MainPageImages/renat.png';
import insaf from '../../assets/images/MainPageImages/insaf.png';
import dmitriy from '../../assets/images/MainPageImages/dmitriy.png';
import stepan from '../../assets/images/MainPageImages/stepan.png';

const angles = [];
const nearBy = [];

export const Team = () => {
	const { team } = useSelector(selectLangItems);
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

	return (
		<section
			id="team"
			className="container py-16 px-[30px]"
			data-aos="fade-up"
			data-aos-delay="500"
			onMouseLeave={clearNearBy}
		>
			<div data-aos="fade-up" data-aos-delay="0" data-aos-offset="400">
				<SupTitle>{team.suptitle}</SupTitle>
				<Heading2 className="mb-10 dark:text-light duration-500">
					{team.title}
				</Heading2>
			</div>

			<div className="w-full flex justify-start lg:items-start xs:items-center xs:flex-col	">
				<ul className="text-center gap-5 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 xs:grid-cols-1">
					<TeamItem
						clearNearBy={clearNearBy}
						id={'1'}
						initial={team.people[0].name}
						role={team.people[0].job}
						photo={renat}
						backGround={
							'bg-[linear-gradient(180deg,#D7D7D7_0%,rgba(239,239,239,0.5)_100%)]'
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
			</div>
		</section>
	);
};
