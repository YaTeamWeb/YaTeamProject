import aboutMainPage from '../../../assets/images/MainPageImages/aboutMainPage.png';
import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { SvgIcon } from '../../UI/SvgIcon/index.jsx';
import { Heading2 } from '../../UI/Heading2';
import { Body } from '../../UI/Body.jsx';

export const About = () => {
	return (
		<div
			className="py-24 flex gap-30 justify-between bg-white container"
			id="about"
		>
			<div className="max-w-[650px]">
				<Heading2
					className={classnames(styles.AboutInfoBlockTitle, 'leading-10')}
				>
					Не каждый способен на смелые решения.
				</Heading2>
				<Body className={styles.AboutInfoBlockTextElement}>
					Каждое наше действие продумывается заранее, каждая строчка кода
					приводит к успеху.
				</Body>

				<ul className={styles.AboutInfoBlockList}>
					<li className="mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body>Мы всегда работаем в команде.</Body>
					</li>
					<li className="mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body>Мы прислушиваемся к мнению друг друга.</Body>
					</li>
					<li className="mb-1.5">
						<SvgIcon name={'listCheck'} size={25} />
						<Body>Мы сосредоточены на работе.</Body>
					</li>
				</ul>

				<Body className={styles.AboutInfoBlockTextElement}>
					Наша команда занимает лидирующие позиции в мировом рейтинге. Иногда
					скромная студия из Саратова способна свернуть горы.
				</Body>
			</div>

			<img src={aboutMainPage} alt="Команда"></img>
		</div>
	);
};
