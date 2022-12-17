import React from 'react';
import { SvgIcon } from '../UI/SvgIcon/index.jsx';
import { Heading } from '../UI/Heading.jsx';

export const Hero = () => {
	return (
		<section
			className={
				'bg-hero bg-fixed w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-light '
			}
			id="hero"
		>
			<div className="container flex flex-col items-center">
				<article className={'text-center mb-24 max-w-[860px]'}  data-aos="fade-up">
					<Heading className="text-light">Лучшие решения для Вашего бизнеса от YaTeam</Heading>
					<p className={'font-medium text-4xl leading-normal'}>
						Мы команда талантливых специалистов
					</p>
				</article>
				<ul className="flex items-center justify-center font-bold text-3xl gap-x-16" data-aos="zoom-in-up">
					<li
						className={
							'hover:border-primary ease-in duration-300 flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
						}
					>
						<SvgIcon className="fill-primary" name={'speed'} size={40} />
						<p className="ease-in duration-150 cursor-pointer hover:text-primary">
							Скорость
						</p>
					</li>
					<li
						className={
							'hover:border-primary ease-in duration-300 flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
						}
					>
						<SvgIcon className="fill-primary" name={'medal'} size={40} />
						<p className="ease-in duration-150 cursor-pointer hover:text-primary">
							Качество
						</p>
					</li>
					<li
						className={
							'hover:border-primary ease-in duration-300 flex flex-col items-center justify-center gap-y-4 border border-border-hero w-60 h-48'
						}
					>
						<SvgIcon className="fill-primary" name={'design'} size={40} />
						<p className="ease-in duration-150 cursor-pointer hover:text-primary">
							Дизайн
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
