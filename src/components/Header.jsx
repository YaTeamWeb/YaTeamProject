import React from 'react';
import logo from '../assets/images/MainPageImages/logo.png';
import * as Scroll from 'react-scroll';
import DarkModeToggle from './DarkMode/DarkModeToggle.jsx';

export const Header = ({ setDarkMode, darkMode }) => {
	const LinkAnchor = Scroll.Link;

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
				<LinkAnchor
					to="hero"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					Домой
				</LinkAnchor>
				<LinkAnchor
					to="about"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					О нас
				</LinkAnchor>
				<LinkAnchor
					to="services"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					Сервисы
				</LinkAnchor>
			</nav>
			<div className={'flex flex-col'}>
				<DarkModeToggle isDark={darkMode} onClickMethod={setDarkMode} />
				<button className={'text-right'}>Сменить язык</button>
			</div>
		</header>
	);
};
