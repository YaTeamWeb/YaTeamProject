import React, { useRef, useState } from 'react';
import logo from '../assets/images/MainPageImages/logo.png';
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import DarkModeToggle from './DarkMode/DarkModeToggle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectLangItems } from '../store/slices/lang/selectors.js';
import { setLang } from '../store/slices/lang/index.js';
import globeGif from '../assets/images/MainPageImages/globe.gif';
import globeSvg from '../assets/images/svg/globe.svg';
import { SvgIcon } from './UI/SvgIcon';
import { debounce } from '../utils/Limitors.jsx';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = ({ setDarkMode, darkMode }) => {
	const dispatch = useDispatch();
	const lang = useSelector(selectLang);
	const LinkAnchor = Scroll.Link;
	const { header } = useSelector(selectLangItems);
	const [globeActive, setGlobeActive] = useState(false);
	const ref = useRef(null);
	const onChangeLang = debounce(() => {
		setGlobeActive(true);
		setTimeout(() => {
			setGlobeActive(false);
		}, 1500);
		const currLang = lang === 'ru' ? 'eng' : 'ru';
		dispatch(setLang(currLang));
		localStorage.setItem('lang', currLang);
	}, 500);
	const navigate = useNavigate();
	const scrollToAnchor = async (anchor) => {
		await navigate('/');
		await scroller.scrollTo(anchor, {
			duration: 1000,
			spy: true,
			smooth: true,
		});
	};

	function dropClick() {
		ref.current.style.visibility =
			ref.current.style.visibility === 'hidden' ? 'visible' : 'hidden';
		ref.current.style.opacity =
			ref.current.style.visibility === 'hidden' ? '0' : '1';
	}

	return (
		<header
			className={
				'fixed z-50 top-0 left-0 flex items-center justify-between w-full bg-black text-light px-7 h-16'
			}
		>
			<a className="block" href="/">
				<img className="w-8 h-10" src={logo} alt="Логотип YaTeam" />
			</a>
			<nav
				className={
					'max-w-[1200px] flex gap-[80px] justify-between items-center'
				}
			>
				<LinkAnchor
					to="hero"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('hero')}
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
					onClick={() => scrollToAnchor('about')}
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
					onClick={() => scrollToAnchor('services')}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					{header[2].name}
				</LinkAnchor>
				<LinkAnchor
					to="team"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('team')}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					{header[3].name}
				</LinkAnchor>
				<LinkAnchor
					to="contacts"
					activeClass={'text-primary'}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('contacts')}
					className={
						'cursor-pointer ease-in duration-200 hover:text-primary  font-OpenSans font-bold text-base text-light'
					}
				>
					{header[4].name}
				</LinkAnchor>

				<div className="relative">
					<p
						className="cursor-pointer ease-in duration-200 hover:text-primary font-OpenSans font-bold text-base text-light group flex flex-row items-center justify-center"
						onClick={dropClick}
					>
						{header[5].name}
						<SvgIcon
							name="header-arrow"
							className={
								'fill-light duration-300 group-hover:fill-primary w-[13px] h-[8px] ml-[5px]'
							}
						/>
					</p>

					<div
						style={{ visibility: 'hidden', opacity: '0' }}
						className="DropDownMenu absolute -left-[5px] top-[30px] w-[164px] bg-light flex flex-col gap-0 duration-500"
						ref={ref}
					>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'bg-primary text-light' : 'w-full text-dark'
							}
							onClick={dropClick}
						>
							<p className={'py-[8px] pl-[15px] font-OpenSans'}>
								{header[6].name}
							</p>
						</NavLink>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive ? 'bg-primary text-light' : 'w-full text-dark'
							}
							onClick={dropClick}
						>
							<p className={'py-[8px] pl-[15px] font-OpenSans'}>
								{header[7].name}
							</p>
						</NavLink>
					</div>
				</div>
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
