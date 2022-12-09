import React from 'react';
import { SvgIcon } from '../../UI/index.jsx';

export const Hero = () => {
	return (
		<article
			className={
				'bg-hero bg-fixed w-screen h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-light gap-y-52'
			}
		>
			<article className={'text-center mx-auto w-4/6'}>
				<p className={'font-bold text-7xl leading-normal'}>
					Лучшие решения для
					<br />
					Вашего бизнеса от YaTeam
				</p>
				<p className={'font-medium text-4xl leading-normal'}>
					Мы команда талантливых специалситов
				</p>
			</article>
			<ul className="flex items-center justify-center font-bold text-3xl gap-x-16">
				<li className="flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48">
					<SvgIcon className="fill-primary" name={'speed'} size={40} />
					<p>Скорость</p>
				</li>
				<li className="flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48">
					<SvgIcon className="fill-primary" name={'medal'} size={40} />
					<p>Качество</p>
				</li>
				<li className="flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48">
					<SvgIcon className="fill-primary" name={'design'} size={40} />
					<p>Дизайн</p>
				</li>
			</ul>
		</article>
	);
};
