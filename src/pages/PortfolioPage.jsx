import React from 'react';

import { SupTitle } from '../components/UI/SupTitle.jsx';
import { Heading2 } from '../components/UI/Heading2.jsx';
import project_1 from '../assets/images/MainPageImages/portfolio-1.png';
import project_2 from '../assets/images/MainPageImages/portfolio-2.jpg';
import project_3 from '../assets/images/MainPageImages/portfolio-3.png';
import project_4 from '../assets/images/MainPageImages/portfolio-4.jpg';
import { Footer } from '../components/Footer.jsx';
import { ProjectCard } from '../components/UI/ProjectCard.jsx';
import { Button } from '../components/UI/Button.jsx';

import { useSelector } from 'react-redux';
import { selectLangItems } from '../store/slices/lang/selectors.js';

const PortfolioPage = () => {
    const { portfolio } = useSelector(selectLangItems);
	return (
        <>
		<div className='container pt-[124px]'>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="0"
                data-aos-offset="400"
                className='ml-2'
			>
				<SupTitle>{portfolio.suptitle}</SupTitle>
				<Heading2 className="mb-10 dark:text-light duration-500">
					{portfolio.title}
				</Heading2>
			</div>
            <h3 className='ml-2 text-[32px] font-semibold font-Raleway dark:text-light duration-500 mb-5'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
                data-aos-offset="400"
            >Интернет-магазины</h3>
			<ul className="grid gap-y-10 gap-x-5 grid-cols-12 mb-8">
				<li
					className="col-span-6"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<ProjectCard
					imageAlt='Интернет-магазин'
					project={project_1}
					imageFigcaption=''
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
					imageAlt='Интернет-магазин'
					project={project_1}
					imageFigcaption=''
					/>
				</li>
			</ul>

            <h3 className='ml-2 text-[32px] font-semibold font-Raleway dark:text-light duration-500 mb-5'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
                data-aos-offset="400"
            >Сайты-визитки</h3>
			<ul className="grid gap-y-10 gap-x-5 grid-cols-12">
                <li
					className="col-span-6  "
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<ProjectCard
					imageAlt='Сайт-портфолио'
					project={project_2}
					imageFigcaption=''
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
					imageAlt='Сайт-портфолио'
					project={project_3}
					imageFigcaption=''
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
					imageAlt='Сайт-портфолио'
					project={project_3}
					imageFigcaption=''
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
					imageAlt='Сайт-портфолио'
					project={project_4}
					imageFigcaption=''
					/>
				</li>
            </ul>

			<div
				className="flex justify-center items-center mt-10"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="0"
				data-aos-offset="100"
			>
				<Button className="text-dark hover:text-light dark:text-light duration-500 mb-[120px]">
					{portfolio.portfolioPageButton}
				</Button>
			</div>
		</div>
        {/*<Footer />*/}
        </>
	);
};

export default PortfolioPage;
