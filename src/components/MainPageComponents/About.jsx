import aboutMainPage from '../../assets/images/MainPageImages/aboutMainPage.png';
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
			className="py-24 px-[60px] grid grid-cols-2 gap-[30px] container"
			id="about"
			data-aos="fade-up"
			data-aos-delay="0"
			data-aos-offset="400"
		>
			<div className="w-full" data-aos="fade-right" data-aos-delay="0">
				<Heading2 className="mb-4 leading-10 dark:text-light duration-500">
					{about.title}
				</Heading2>
				<Body className="mb-3.5 dark:text-light duration-500">
					{about.descriptions[0].text}
				</Body>

				<ul>
					<li className="flex items-center mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body className="ml-2.5 dark:text-light duration-500">
							{about.benefits[0].text}
						</Body>
					</li>
					<li className="flex items-center mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body className="ml-2.5 dark:text-light duration-500">
							{about.benefits[1].text}
						</Body>
					</li>
					<li className="flex items-center mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
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
			className='w-[350px] lg:w-[420px] xl:w-[565px]'
			>
			<LazyLoadImage
				src={aboutMainPage}
				alt="Команда"
				effect="blur"
				className='w-[350px] lg:w-[420px] xl:w-[565px] object-cover'
			/>
			</div>
		</div>
	);
};
