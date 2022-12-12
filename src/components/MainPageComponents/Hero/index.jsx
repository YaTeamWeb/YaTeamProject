import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { SvgIcon } from '../../UI/SvgIcon/index.jsx';
import { Heading } from '../../UI/Heading';

export const Hero = () => {
	return (
		<article
			className={classnames(
				styles.Hero,
				'bg-hero bg-fixed w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-light '
			)}
			id="hero"
		>
			<div className="container">
				<article className={'text-center mb-24'}>
					<Heading className={styles.HeroTitle}>
						Лучшие решения для
						<br />
						Вашего бизнеса от YaTeam
					</Heading>
					<h2
						className={classnames(
							styles.HeroAfterTitleText,
							'font-medium text-4xl leading-normal'
						)}
					>
						Мы команда талантливых специалистов
					</h2>
				</article>
				<ul className="flex items-center justify-center font-bold text-3xl gap-x-16">
					<li
						className={classnames(
							styles.HeroPageIcon,
							'flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
						)}
					>
						<SvgIcon className="fill-primary" name={'speed'} size={40} />
						<p className="subpixel-antialiased">Скорость</p>
					</li>
					<li
						className={classnames(
							styles.HeroPageIcon,
							'flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
						)}
					>
						<SvgIcon className="fill-primary" name={'medal'} size={40} />
						<p className="subpixel-antialiased">Качество</p>
					</li>
					<li
						className={classnames(
							styles.HeroPageIcon,
							'flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
						)}
					>
						<SvgIcon className="fill-primary" name={'design'} size={40} />
						<p>Дизайн</p>
					</li>
				</ul>
			</div>
		</article>
	);
};
