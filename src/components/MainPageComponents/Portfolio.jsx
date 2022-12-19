import React from 'react';
import { SupTitle } from '../UI/SupTitle.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { ProjectCard } from '../UI/ProjectCard.jsx';
import { Button } from '../UI/Button.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import { Link } from 'react-router-dom';
import { selectProjectItems } from '../../store/slices/projects/selectors.js';

export const Portfolio = () => {
	const { portfolio } = useSelector(selectLangItems);
	const items = useSelector(selectProjectItems);
	return (
		<section className="container py-16" id="portfolio">
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="0"
				data-aos-offset="400"
			>
				<SupTitle>{portfolio.suptitle}</SupTitle>
				<Heading2 className="mb-10 dark:text-light duration-500">
					{portfolio.title}
				</Heading2>
			</div>
			<ul className="grid gap-y-10 gap-x-5 grid-cols-12">
				{items.map((item) => (
					<li
						key={item.id}
						className="col-span-6"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="0"
						data-aos-offset="400"
					>
						<ProjectCard
							imageAlt={item.title}
							project={item.image}
							imageFigcaption={item.title}
						/>
					</li>
				))}
				{/*<li*/}
				{/*	className="col-span-6  "*/}
				{/*	data-aos="fade-up"*/}
				{/*	data-aos-duration="1000"*/}
				{/*	data-aos-delay="0"*/}
				{/*	data-aos-offset="400"*/}
				{/*>*/}
				{/*	<ProjectCard*/}
				{/*		imageAlt="Сайт-портфолио"*/}
				{/*		project={project_2}*/}
				{/*		imageFigcaption={portfolio.cards[1].name}*/}
				{/*	/>*/}
				{/*</li>*/}
				{/*<li*/}
				{/*	className="col-span-6  "*/}
				{/*	data-aos="fade-up"*/}
				{/*	data-aos-duration="1000"*/}
				{/*	data-aos-delay="0"*/}
				{/*	data-aos-offset="400"*/}
				{/*>*/}
				{/*	<ProjectCard*/}
				{/*		imageAlt="Сайт-портфолио"*/}
				{/*		project={project_3}*/}
				{/*		imageFigcaption={portfolio.cards[2].name}*/}
				{/*	/>*/}
				{/*</li>*/}
				{/*<li*/}
				{/*	className="col-span-6"*/}
				{/*	data-aos="fade-up"*/}
				{/*	data-aos-duration="1000"*/}
				{/*	data-aos-delay="0"*/}
				{/*	data-aos-offset="400"*/}
				{/*>*/}
				{/*	<ProjectCard*/}
				{/*		imageAlt="Сайт-портфолио"*/}
				{/*		project={project_4}*/}
				{/*		imageFigcaption={portfolio.cards[3].name}*/}
				{/*	/>*/}
				{/*</li>*/}
			</ul>
			<div
				className="flex justify-center items-center mt-10"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="0"
				data-aos-offset="500"
			>
				<Link to="/portfolio">
					<Button className="text-dark hover:text-light dark:text-light duration-500">
						{portfolio.button}
					</Button>
				</Link>
			</div>
		</section>
	);
};
