import React from 'react';
import { SupTitle } from '../UI/SupTitle.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { ProjectCard } from '../UI/ProjectCard.jsx';
import { Button } from '../UI/Button.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import { Link } from 'react-router-dom';
import project_1 from '../../assets/images/ProjectsImages/portfolio-1.png';
import project_2 from '../../assets/images/ProjectsImages/portfolio-2.jpg';
import project_3 from '../../assets/images/ProjectsImages/portfolio-3.png';
import project_4 from '../../assets/images/ProjectsImages/portfolio-4.jpg';

export const Portfolio = () => {
	const { portfolio } = useSelector(selectLangItems);
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
				<li
					className="col-span-6  "
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<ProjectCard
						imageAlt="Сайт-портфолио"
						project={project_1}
						projectId={1}
						imageFigcaption={portfolio.cards[0].title}
					/>
				</li>

				<li
					className="col-span-6  "
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<ProjectCard
						imageAlt="Сайт-портфолио"
						project={project_2}
						projectId={2}
						imageFigcaption={portfolio.cards[1].title}
					/>
				</li>
				<li
					className="col-span-6  "
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<ProjectCard
						imageAlt="Сайт-портфолио"
						projectId={3}
						project={project_3}
						imageFigcaption={portfolio.cards[2].title}
					/>
				</li>
				<li
					className="col-span-6"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<ProjectCard
						imageAlt="Сайт-портфолио"
						project={project_4}
						projectId={4}
						imageFigcaption={portfolio.cards[3].title}
					/>
				</li>
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
