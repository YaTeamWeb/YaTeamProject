import aboutMainPage from '../../assets/images/MainPageImages/aboutMainPage.png';
import React from 'react';
import { SvgIcon } from '../UI/SvgIcon/index.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { Body } from '../UI/Body.jsx';

export const About = () => {
	return (
		<div className="py-24 flex gap-30 justify-between container" id="about">
			<div className="max-w-[650px]">
				<Heading2 className='mb-4 leading-10 dark:text-light duration-500'>
					Не каждый способен на смелые решения.
				</Heading2>
				<Body className="mb-3.5 dark:text-light duration-500">
					Каждое наше действие продумывается заранее, каждая строчка кода
					приводит к успеху.
				</Body>

				<ul>
					<li className="flex items-center mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body className="ml-2.5 dark:text-light duration-500">Мы всегда работаем в команде.</Body>
					</li>
					<li className="flex items-center mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body className="ml-2.5 dark:text-light duration-500">
							Мы прислушиваемся к мнению друг друга.
						</Body>
					</li>
					<li className="flex items-center mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body className="ml-2.5 dark:text-light duration-500">Мы сосредоточены на работе.</Body>
					</li>
				</ul>

				<Body className='dark:text-light duration-500'>
					Наша команда занимает лидирующие позиции в мировом рейтинге. Иногда
					скромная студия из Саратова способна свернуть горы.
				</Body>
			</div>

			<img src={aboutMainPage} alt="Команда"></img>
		</div>
	);
};
