import aboutMainPage from '../../assets/images/MainPageImages/aboutMainPage.png';
import React from 'react';
import { SvgIcon } from '../UI/SvgIcon/index.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { Body } from '../UI/Body.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';

export const About = () => {
	const { about } = useSelector(selectLangItems);

	return (
		<div className="py-24 flex gap-30 justify-between container" id="about" data-aos="fade-up" data-aos-delay="100">
			<div className="max-w-[650px]" data-aos="fade-right" data-aos-delay="100">
				<Heading2 className='mb-4 leading-10 dark:text-light duration-500'>
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

			<img src={aboutMainPage} alt="Команда" data-aos="fade-left" data-aos-delay="100"></img>
		</div>
	);
};
