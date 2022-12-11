import aboutMainPage from '../../../assets/images/MainPageImages/aboutMainPage.png';
import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';
import { SvgIcon } from '../../UI/SvgIcon/index.jsx';

export const About = () => {
	return (
		<div
			className={
				'About flex gap-30 justify-between w-full h-screen bg-white box-border ' +
				classnames(styles.About)
			}
			id="about"
		>
			<div className={classnames(styles.AboutInfoBlock) + ' box-border'}>
				<h2 className={styles.AboutInfoBlockTitle + ' subpixel-antialiased'}>
					Не каждый способен на смелые решения.
				</h2>
				<p
					className={
						styles.AboutInfoBlockTextElement_1 +
						' ' +
						styles.AboutInfoBlockTextElement +
						' subpixel-antialiased'
					}
				>
					Каждое наше действие продумывается заранее, каждая строчка кода
					приводит к успеху.
				</p>

				<ul className={styles.AboutInfoBlockList}>
					<li className="subpixel-antialiased">
						<SvgIcon name={'listCheck'} size={25} />
						Мы всегда работаем в команде.
					</li>
					<li className="subpixel-antialiased">
						<SvgIcon name={'listCheck'} size={25} />
						Мы прислушиваемся к мнению друг друга.
					</li>
					<li className="subpixel-antialiased">
						<SvgIcon name={'listCheck'} size={25} />
						Мы сосредоточены на работе.
					</li>
				</ul>

				<p
					className={
						styles.AboutInfoBlockTextElement_2 +
						' ' +
						styles.AboutInfoBlockTextElement +
						' subpixel-antialiased'
					}
				>
					Наша команда занимает лидирующие позиции в мировом рейтинге. Иногда
					скромная студия из Саратова способна свернуть горы.
				</p>
			</div>

			<img src={aboutMainPage} alt="Команда"></img>
		</div>
	);
};
