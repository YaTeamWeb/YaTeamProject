import React, { useState } from 'react';
import logo from '../assets/images/MainPageImages/logo.png';
import * as Scroll from 'react-scroll';
import DarkModeToggle from './DarkMode/DarkModeToggle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectLangItems } from '../store/slices/lang/selectors.js';
import { setLang } from '../store/slices/lang/index.js';
import globeGif from '../assets/images/MainPageImages/globe.gif';
import globeSvg from '../assets/images/svg/globe.svg';
import { debounce } from '../utils/Limitors.jsx';

export const Header = ({ setDarkMode, darkMode }) => {
	const dispatch = useDispatch();
	const lang = useSelector(selectLang);
	const LinkAnchor = Scroll.Link;
	const { header } = useSelector(selectLangItems);
	const [globeActive, setGlobeActive] = useState(false);

	const onChangeLang = debounce(() => {
		setGlobeActive(true);
		setTimeout(() => {
			setGlobeActive(false);
		}, 1500);
		const currLang = lang === 'ru' ? 'eng' : 'ru';
		dispatch(setLang(currLang));
		localStorage.setItem('lang', currLang);
	}, 500);
	return (
		<header
			className={
				'fixed z-50 top-0 left-0 flex items-center justify-between w-full bg-black text-light px-7 h-16'
			}
		>
			<a className="block" href="/src/pages">
				<img className="w-8 h-10" src={logo} alt="Логотип YaTeam" />
			</a>
			<nav className={'max-w-[1200px] flex gap-[80px] justify-between items-center'}>
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
					{header[0].name}
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
					{header[1].name}
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
					{header[2].name}
				</LinkAnchor>
				<LinkAnchor
					to="portfolio"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					{header[3].name}
				</LinkAnchor>
				<LinkAnchor
					to="team"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					{header[4].name}
				</LinkAnchor>
				<LinkAnchor
					to="contact"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					{header[5].name}
				</LinkAnchor>
			</nav>
			<div className={'flex items-center'}>
				<DarkModeToggle isDark={darkMode} onClickMethod={setDarkMode} />
				<button onClick={onChangeLang} className={'text-right'}>
					{globeActive ? (
						<img className={'w-[50px] h-[50px]'} src={globeGif} alt="Глобус" />
					) : (
						<img className={'w-[50px] h-[50px]'} src={globeSvg} alt="Глобус" />
					)}
				</button>
			</div>
		</header>
	);
};
