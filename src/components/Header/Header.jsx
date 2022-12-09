import React from 'react';
import { SvgIcon } from '../UI';

export const Header = () => {
	return (
		<header
			className={
				'absolute top-0 left-0 flex items-center justify-between w-full bg-black text-light px-8 h-16'
			}
		>
			<article className={'grow'}>
				<a href={'#'}>
					<SvgIcon name={'github'} color={'white'} />
				</a>
			</article>
			<nav className={'grid grid-cols-3 gap-2 grow'}>
				<section>
					<a href={'#'} className={'hover:text-primary w-min'}>
						Домой
					</a>
				</section>
				<section>
					<a href={'#'} className={'hover:text-primary'}>
						О нас
					</a>
				</section>
				<section>
					<a href={'#'} className={'hover:text-primary'}>
						Сервисы
					</a>
				</section>
			</nav>
			<div className={'grow grid justify-items-end'}>
				<button>Переключить тему</button>
				<button>Сменить язык</button>
			</div>
		</header>
	);
};
