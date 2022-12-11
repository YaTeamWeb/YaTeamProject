import React from 'react';
import { SvgIcon } from '../../UI/index.jsx';
import classnames from 'classnames';
import styles from './styles.module.css';

export const Hero = () => {
	return (
		<article
			className={
				'bg-hero bg-fixed w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-light ' +
				classnames(styles.Hero)
			}
			id="hero"
		>
			<article className={'text-center mx-auto w-4/6'}>
				<h1
					className={
						'font-bold text-7xl leading-normal subpixel-antialiased ' +
						classnames(styles.HeroTitle)
					}
				>
					Лучшие решения для
					<br />
					Вашего бизнеса от YaTeam
				</h1>
				<h2
					className={
						'font-medium text-4xl leading-normal subpixel-antialiased ' +
						classnames(styles.HeroAfterTitleText)
					}
				>
					Мы команда талантливых специалистов
				</h2>
			</article>
			<ul className="flex items-center justify-center font-bold text-3xl gap-x-16">
				<li
					className={
						classnames(styles.HeroPageIcon) +
						' flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48 '
					}
				>
					<SvgIcon className="fill-primary" name={'speed'} size={40} />
					<p className="subpixel-antialiased">Скорость</p>
				</li>
				<li
					className={
						classnames(styles.HeroPageIcon) +
						' flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
					}
				>
					<SvgIcon className="fill-primary" name={'medal'} size={40} />
					<p className="subpixel-antialiased">Качество</p>
				</li>
				<li
					className={
						classnames(styles.HeroPageIcon) +
						' flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
					}
				>
					<SvgIcon className="fill-primary" name={'design'} size={40} />
					<p className="subpixel-antialiased">Дизайн</p>
				</li>
			</ul>
		</article>
	);
};
