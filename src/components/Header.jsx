import React, { useRef, useState } from 'react';
import logo from '../assets/images/MainPageImages/logo.png';
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import DarkModeToggle from './DarkMode/DarkModeToggle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectLangItems } from '../store/slices/lang/selectors.js';
import { setLang } from '../store/slices/lang/index.js';
import hamburgerGif from '../assets/images/MainPageImages/hamburger.gif';
import hamburgerPng from '../assets/images/MainPageImages/hamburger.png';
import { SvgIcon } from './UI/SvgIcon';
import { debounce } from '../utils/Limitors.jsx';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

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

	const { pathname } = useLocation();

	function dropClick() {
		if (document.documentElement.clientWidth >= 1024) {
		ref.current.style.visibility =
			ref.current.style.visibility === 'hidden' ? 'visible' : 'hidden';
		ref.current.style.opacity =
			ref.current.style.visibility === 'hidden' ? '0' : '1';
		} else {
			let elems = document.querySelectorAll('.SpecNav');
			elems[0].classList.toggle("invisible");
			elems[0].classList.toggle("opacity-0");
			elems[1].classList.toggle("invisible");
			elems[1].classList.toggle("opacity-0");
		}
	}

	function hamburgerClick() {
		let headernav = document.querySelector(".HeaderNavigation");
		headernav.classList.toggle("invisible");
		headernav.classList.toggle("opacity-0");
	}

	return (
		<header
			className={
				'fixed z-50 top-0 left-0 right-0 w-full px-7 bg-black'
			}
		>
			<div className='flex items-center justify-between w-full h-[64px] text-light'>
			<a className="block" href="/">
				<img className="w-[32px] h-[40px]" src={logo} alt="Логотип YaTeam" />
			</a>
			<nav
				className={
					'HeaderNavigation h-[240px] lg:h-full lg:bg-transparent bg-dark dark:bg-light absolute top-[74px] right-[10px] lg:static w-[150px] lg:max-w-[1200px] invisible opacity-0 lg:visible lg:opacity-100 flex lg:flex flex-col lg:flex-row lg:justify-between items-start lg:items-center lg:min-w-[650px] xl:min-w-[800px] duration-500'
				}
			>
				<LinkAnchor
					to="hero"
					activeClass={pathname === '/' ? 'text-primary' : ''}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('hero')}
					className={
						'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light'
					}
				>
					{header[0].name}
				</LinkAnchor>
				<LinkAnchor
					to="about"
					activeClass={pathname === '/' ? 'text-primary' : ''}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('about')}
					className={
						'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light'
					}
				>
					{header[1].name}
				</LinkAnchor>
				<LinkAnchor
					to="services"
					activeClass={pathname === '/' ? 'text-primary' : ''}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('services')}
					className={
						'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light'
					}
				>
					{header[2].name}
				</LinkAnchor>
				<LinkAnchor
					to="team"
					activeClass={pathname === '/' ? 'text-primary' : ''}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('team')}
					className={
						'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light'
					}
				>
					{header[3].name}
				</LinkAnchor>
				<LinkAnchor
					to="contacts"
					activeClass={pathname === '/' ? 'text-primary' : ''}
					spy={true}
					smooth={true}
					duration={1000}
					onClick={() => scrollToAnchor('contacts')}
					className={
						'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light'
					}
				>
					{header[4].name}
				</LinkAnchor>

				<div className="relative">
					<p
						className="pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light group flex flex-row items-center justify-center"
						onClick={dropClick}
					>
						{header[5].name}
						<SvgIcon
							name="header-arrow"
							className={
								'fill-light lg:fill-light dark:fill-dark duration-300 group-hover:fill-primary w-[13px] h-[8px] ml-[5px]'
							}
						/>
					</p>

					<div
						style={{ visibility: 'hidden', opacity: '0' }}
						className="DropDownMenu absolute lg:-left-[5px] lg:top-[30px] lg:w-[164px] bg-dark dark:bg-light flex flex-col gap-0 duration-500 border border-dark"
						ref={ref}
					>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'bg-primary text-light dark:text-dark' : 'w-full text-light dark:text-dark'
							}
							onClick={dropClick}
						>
							<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
								{header[6].name}
							</p>
						</NavLink>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive ? 'bg-primary text-light dark:text-dark' : 'w-full text-light dark:text-dark'
							}
							onClick={dropClick}
						>
							<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
								{header[7].name}
							</p>
						</NavLink>
					</div>
				</div>

				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? 'SpecNav w-full bg-primary text-light dark:text-dark lg:hidden invisible opacity-0 duration-500' : 'SpecNav w-full bg-dark dark:bg-light text-light dark:text-dark lg:hidden invisible opacity-0 duration-500'
					}
						onClick={dropClick}
					>
					<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
						{header[6].name}
					</p>
				</NavLink>
				<NavLink
					to="/portfolio"
					className={({ isActive }) =>
						isActive ? 'SpecNav w-full bg-primary text-light dark:text-dark lg:hidden invisible opacity-0 duration-500' : 'SpecNav w-full bg-dark dark:bg-light text-light dark:text-dark lg:hidden invisible opacity-0 duration-500'
					}
					onClick={dropClick}
				>
					<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
						{header[7].name}
					</p>
				</NavLink>
			</nav>
			<div className={'flex items-center gap-[15px]'}>
				<button onClick={onChangeLang} className={'text-right hidden lg:block'}>
					<p className='text-[24px] text-light'>{(lang == 'eng') ? 'ENG' : 'RU'}</p>
				</button>
				<DarkModeToggle isDark={darkMode} onClickMethod={setDarkMode} />
				<button className='hamburger lg:hidden'
				onClick={hamburgerClick}
				>
					<img src={hamburgerPng} className='w-[50px] h-[50px]'/>
				</button>
			</div>
			</div>
		</header>
	);
};
