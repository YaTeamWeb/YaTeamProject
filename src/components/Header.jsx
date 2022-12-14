import React from 'react';
import logo from '../assets/images/MainPageImages/logo.png';

export const Header = () => {
	return (
		<header
			className={
				'fixed z-50 top-0 left-0 flex items-center justify-between w-full bg-black text-light px-7 h-16'
			}
		>
			<a className="block" href="/src/pages">
				<img className="w-8 h-10" src={logo} alt="Логотип YaTeam" />
			</a>
			<nav className={'w-[470px] flex justify-between items-center'}>
				<a
					href={'#hero'}
					className={
						'ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					Домой
				</a>
				<a
					href={'#about'}
					className={
						'ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					О нас
				</a>
				<a
					href={'#'}
					className={
						'ease-in duration-200 hover:text-primary font-OpenSans font-bold text-base text-light'
					}
				>
					Сервисы
				</a>
			</nav>
			<div className={'flex flex-col'}>
				<button className="text-right">Переключить тему</button>
				<button className={'text-right'}>Сменить язык</button>
			</div>
		</header>
	);
};
