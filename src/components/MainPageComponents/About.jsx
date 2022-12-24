import aboutMainPage from '../../assets/images/MainPageImages/aboutMainPage.webp';
import React from 'react';
import { SvgIcon } from '../UI/SvgIcon.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { Body } from '../UI/Body.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const About = () => {
	const { about } = useSelector(selectLangItems);

	return (
		<div
			className="py-24 px-[10px] xm:px-[20px] sm:px-[60px] gap-[30px] flex flex-col-reverse justify-center md:gap-[30px] lg:flex-row lg:justify-between container"
			id="about"
			data-aos="fade-up"
			data-aos-delay="0"
			data-aos-offset="400"
		>
			<div className="w-full lg:max-w-[660px]" data-aos="fade-right" data-aos-delay="0">
				<Heading2 className="mb-4 dark:text-light duration-500">
					{about.title}
				</Heading2>
				<Body className="mb-3.5 dark:text-light duration-500">
					{about.descriptions[0].text}
				</Body>

				<ul>
					<li className="flex items-center mb-1.5">
						<div><SvgIcon name={'listCheck'} size={25} /></div>
						<Body className="ml-2.5 dark:text-light duration-500">
							{about.benefits[0].text}
						</Body>
					</li>
					<li className="flex items-center mb-1.5">
						<div><SvgIcon name={'listCheck'} size={25} /></div>
						<Body className="ml-2.5 dark:text-light duration-500">
							{about.benefits[1].text}
						</Body>
					</li>
					<li className="flex items-center mb-1.5">
						<div><SvgIcon name={'listCheck'} size={25} /></div>
						<Body className="ml-2.5 dark:text-light duration-500">
							{about.benefits[2].text}
						</Body>
					</li>
				</ul>

				<Body className="dark:text-light duration-500">
					{about.descriptions[0].text}
				</Body>
			</div>
			<div
			data-aos="fade-left"
			data-aos-delay="0"
			className='w-full lg:max-w-[420px] xl:max-w-[565px] lg:h-[832px] h-[250px] sm:h-[400px]'
			>
			<LazyLoadImage
				src={aboutMainPage}
				alt="Команда"
				effect="blur"
				wrapperClassName='w-full lg:max-w-[420px] xl:max-w-[565px] lg:h-[832px] h-[250px] sm:h-[400px]'
				className='w-full lg:max-w-[420px] xl:max-w-[565px] lg:h-[832px] h-[250px] sm:h-[400px] object-cover'
			/>
			</div>
		</div>
	);
};
