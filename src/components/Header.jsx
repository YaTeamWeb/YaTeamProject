import React, { useRef, useState } from 'react';
import logo from '../assets/images/MainPageImages/logo.png';
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import DarkModeToggle from './DarkMode/DarkModeToggle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectLangItems } from '../store/slices/lang/selectors.js';
import { setLang } from '../store/slices/lang/index.js';
import { SvgIcon } from './UI/SvgIcon';
import { debounce } from '../utils/Limitors.jsx';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Header = ({ setDarkMode, darkMode }) => {
	const dispatch = useDispatch();
	const lang = useSelector(selectLang);
	const LinkAnchor = Scroll.Link;
	const { header } = useSelector(selectLangItems);
	const ref = useRef(null);
	const [burgerOpen, setBurgerOpen] = useState(false);
	const onChangeLang = debounce(() => {
		const currLang = lang === 'ru' ? 'eng' : 'ru';
		dispatch(setLang(currLang));
		localStorage.setItem('lang', currLang);
	}, 250);
	const navigate = useNavigate();
	const scrollToAnchor = async (anchor) => {
		await navigate('/');
		await scroller.scrollTo(anchor, {
			duration: 1000,
			spy: true,
			smooth: true,
		});
		setBurgerOpen(!burgerOpen);
	};

	const [dropdownOpen, setDropdownOpen] = useState(false);

	const { pathname } = useLocation();

	function dropClick(e) {
		if (document.documentElement.clientWidth >= 1024) {
			ref.current.style.visibility =
				ref.current.style.visibility === 'hidden' ? 'visible' : 'hidden';
			ref.current.style.opacity =
				ref.current.style.visibility === 'hidden' ? '0' : '1';
		} else {
			setDropdownOpen(!dropdownOpen);
			if (e.currentTarget.classList.contains('burger-link')) {
				setBurgerOpen(!burgerOpen);
			}
		}
	}

	function hamburgerClick() {
		setBurgerOpen(!burgerOpen);
	}

	return (
		<header className={'fixed z-50 top-0 left-0 right-0 w-full px-7 bg-black'}>
			<div className="flex items-center justify-between w-full h-[64px] text-light">
				<a className="block" href="/">
					<img className="w-[32px] h-[40px]" src={logo} alt="Логотип YaTeam" />
				</a>
				<nav
					className={`${
						burgerOpen ? '' : 'invisible opacity-0'
					} h-[280px] lg:h-full lg:bg-transparent bg-dark dark:bg-light dark:text-dark lg:dark:text-light lg:bg-dark lg:dark:bg-dark absolute top-[74px] right-[10px] lg:static w-[150px] lg:max-w-[1200px]  lg:visible lg:opacity-100 flex lg:flex flex-col lg:flex-row lg:justify-between items-start lg:items-center lg:min-w-[650px] xl:min-w-[800px] duration-500`}
				>
					<LinkAnchor
						to="hero"
						activeClass={
							pathname === '/'
								? 'lg:text-primary lg:dark:text-primary text-primary dark:text-primary'
								: ''
						}
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => scrollToAnchor('hero')}
						className={
							'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] '
						}
					>
						{header[0].name}
					</LinkAnchor>
					<LinkAnchor
						to="about"
						activeClass={
							pathname === '/'
								? 'lg:text-primary lg:dark:text-primary text-primary dark:text-primary'
								: ''
						}
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => scrollToAnchor('about')}
						className={
							'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] '
						}
					>
						{header[1].name}
					</LinkAnchor>
					<LinkAnchor
						to="services"
						activeClass={
							pathname === '/'
								? 'lg:text-primary lg:dark:text-primary text-primary dark:text-primary'
								: ''
						}
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => scrollToAnchor('services')}
						className={
							'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] '
						}
					>
						{header[2].name}
					</LinkAnchor>
					<LinkAnchor
						to="portfolio"
						activeClass={
							pathname === '/'
								? 'lg:text-primary lg:dark:text-primary text-primary dark:text-primary'
								: ''
						}
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => scrollToAnchor('portfolio')}
						className={
							'lg:mr-[10px] xl:m-0 pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] '
						}
					>
						{header[3].name}
					</LinkAnchor>
					<LinkAnchor
						to="team"
						activeClass={
							pathname === '/'
								? 'lg:text-primary lg:dark:text-primary text-primary dark:text-primary'
								: ''
						}
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => scrollToAnchor('team')}
						className={
							'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] '
						}
					>
						{header[4].name}
					</LinkAnchor>
					<LinkAnchor
						to="contacts"
						activeClass={
							pathname === '/'
								? 'lg:text-primary lg:dark:text-primary text-primary dark:text-primary'
								: ''
						}
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => scrollToAnchor('contacts')}
						className={
							'pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] '
						}
					>
						{header[5].name}
					</LinkAnchor>

					<div className="relative">
						<p
							className="pl-[15px] py-[8px] lg:p-0 w-full cursor-pointer ease-in duration-200 hover:text-primary hover:dark:text-primary font-OpenSans font-bold text-[16px] text-light dark:text-dark lg:text-light lg:dark:text-light group flex flex-row items-center justify-center"
							onClick={dropClick}
						>
							{header[6].name}
							<SvgIcon
								name="header-arrow"
								className={
									'fill-light lg:fill-light lg:dark:fill-light dark:fill-dark duration-300 group-hover:fill-primary w-[13px] h-[8px] ml-[5px]'
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
									isActive
										? 'bg-primary text-light dark:text-dark'
										: 'w-full text-light dark:text-dark'
								}
								onClick={dropClick}
							>
								<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
									{header[7].name}
								</p>
							</NavLink>
							<NavLink
								to="/portfolio"
								className={({ isActive }) =>
									isActive
										? 'bg-primary text-light dark:text-dark'
										: 'w-full text-light dark:text-dark'
								}
								onClick={dropClick}
							>
								<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
									{header[8].name}
								</p>
							</NavLink>
						</div>
					</div>

					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? `${
										dropdownOpen ? '' : 'invisible opacity-0'
								  } burger-link w-full bg-primary text-light dark:text-dark lg:hidden  duration-500`
								: `${
										dropdownOpen ? '' : 'invisible opacity-0'
								  } burger-link w-full bg-dark dark:bg-light text-light dark:text-dark lg:hidden  duration-500`
						}
						onClick={dropClick}
					>
						<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
							{header[7].name}
						</p>
					</NavLink>
					<NavLink
						to="/portfolio"
						className={({ isActive }) =>
							isActive
								? `${
										dropdownOpen ? '' : 'invisible opacity-0'
								  } burger-link w-full bg-primary text-light dark:text-dark lg:hidden  duration-500`
								: `${
										dropdownOpen ? '' : 'invisible opacity-0'
								  } burger-link w-full bg-dark dark:bg-light text-light dark:text-dark lg:hidden  duration-500`
						}
						onClick={dropClick}
					>
						<p className={'py-[8px] pl-[15px] text-[16px] font-OpenSans'}>
							{header[8].name}
						</p>
					</NavLink>
				</nav>
				<div className={'flex items-center gap-[15px]'}>
					<button onClick={onChangeLang} className={'text-right  lg:block'}>
						<p className="text-[24px] text-light">
							{lang === 'eng' ? 'ENG' : 'RU'}
						</p>
					</button>
					<DarkModeToggle isDark={darkMode} onClickMethod={setDarkMode} />
					<div
						className="cursor-pointer w-[30px] h-[30px] flex justify-center items-center lg:invisible"
						onClick={hamburgerClick}
					>
						<button
							className={`${
								burgerOpen
									? 'rotate-45 after:rotate-[90deg] after:duration-300 after:translate-y-[-10px]'
									: ' before:absolute before:w-[30px] before:h-[3px] before:bg-light before:left-0 before:top-[-10px] '
							} lg:hidden relative w-[30px]  h-[3px] bg-light duration-300 after:absolute after:w-[30px] after:h-[3px] after:bg-light after:left-0 after:top-[10px]`}
						></button>
					</div>
				</div>
			</div>
		</header>
	);
};
