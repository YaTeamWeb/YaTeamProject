import React from 'react';
import logo from '../assets/images/MainPageImages/logo.png';
import { SvgIcon } from './UI/SvgIcon';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../store/slices/lang/selectors.js';
import { useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';

export const Footer = () => {
	const { footer } = useSelector(selectLangItems);
	const LinkAnchor = Scroll.Link;
	const navigate = useNavigate();
	const scrollToAnchor = async (anchor) => {
		await navigate('/');
		await scroller.scrollTo(anchor, {
			duration: 1000,
			spy: true,
			smooth: true,
		});
	};

	return (
		<footer className={'bg-dark'}>
			<div className={'px-[30px] bg-gray-400 dark:bg-dark duration-300'}>
				<div
					className={'container py-16 relative flex flex-wrap justify-between '}
				>
					<ul className={'w-[255px] sm:mb-0 mb-5'}>
						<li className={'mb-7'}>
							<a className="block" href="/">
								<img className="w-8 h-10" src={logo} alt="Логотип YaTeam" />
							</a>
						</li>
						<li className={'mb-7'}>
							<address className="not-italic text-light font-Raleway font-semibold lg:text-base xs:text-2xl text-3xl">
								{footer.address}
							</address>
						</li>
						<li className={'mb-7 flex flex-col'}>
							<a
								className={
									'text-light font-Raleway font-semibold lg:text-base xs:text-2xl text-3xl hover:text-primary duration-300'
								}
								href="tel:78005553535"
							>
								<span className={'font-Raleway font-bold mr-1'}>
									{footer.phone}:
								</span>
								+7 800 555 35 35
							</a>
							<a
								className={
									'text-light font-Raleway font-semibold lg:text-base xs:text-2xl text-3xl hover:text-primary duration-300'
								}
								href="mailto:info@yateam.site"
							>
								<span className={'font-Raleway font-bold mr-1'}>Email:</span>
								info@yateam.site
							</a>
						</li>
						<li className={'flex items-center  '}>
							<a
								href="#"
								className={
									'block p-2 bg-[#292929] duration-300 hover:bg-primary rounded mr-1.5 group '
								}
							>
								<SvgIcon
									className={'fill-light duration-300 group-hover:fill-dark'}
									size={20}
									name={'inst'}
								/>
							</a>
							<a
								href="#"
								className={
									'block p-2 bg-[#292929] duration-300 hover:bg-primary rounded mr-1.5 group '
								}
							>
								<SvgIcon
									className={'fill-light duration-300 group-hover:fill-dark'}
									size={20}
									name={'fb'}
								/>
							</a>
							<a
								href="#"
								className={
									'block p-2 bg-[#292929] duration-300 hover:bg-primary rounded mr-1.5 group '
								}
							>
								<SvgIcon
									className={'fill-light duration-300 group-hover:fill-dark'}
									size={20}
									name={'tg'}
								/>
							</a>
						</li>
					</ul>
					<ul>
						<li
							className={
								'mb-5 lg:text-xl xs:text-3xl text-4xl font-Raleway font-bold text-light'
							}
						>
							{footer.firstList.title}
						</li>
						<li className={'mb-5 text-light '}>
							<LinkAnchor
								to="hero"
								smooth={true}
								duration={1000}
								onClick={() => scrollToAnchor('hero')}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.firstList.items[0].text}
								</p>
							</LinkAnchor>
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<LinkAnchor
								to="about"
								smooth={true}
								duration={1000}
								onClick={() => scrollToAnchor('about')}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.firstList.items[1].text}
								</p>
							</LinkAnchor>
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<LinkAnchor
								to="services"
								smooth={true}
								duration={1000}
								onClick={() => scrollToAnchor('services')}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.firstList.items[2].text}
								</p>
							</LinkAnchor>
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<LinkAnchor
								to="team"
								smooth={true}
								duration={1000}
								onClick={() => scrollToAnchor('team')}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.firstList.items[3].text}
								</p>
							</LinkAnchor>
						</li>
						<li className={'font-Raleway font-bold text-light '}>
							<LinkAnchor
								to="contacts"
								smooth={true}
								duration={1000}
								onClick={() => scrollToAnchor('contacts')}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.firstList.items[4].text}
								</p>
							</LinkAnchor>
						</li>
					</ul>
					<ul>
						<li
							className={
								'mb-5 font-Raleway lg:text-xl xs:text-3xl text-4xl font-bold text-light'
							}
						>
							{footer.secondList.title}
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<a
								href={'#'}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.secondList.items[0].text}
								</p>
							</a>
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<a
								href={'#'}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.secondList.items[1].text}
								</p>
							</a>
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<a
								href={'#'}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.secondList.items[2].text}
								</p>
							</a>
						</li>
						<li className={'mb-5 font-Raleway font-bold text-light '}>
							<a
								href={'#'}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.secondList.items[3].text}
								</p>
							</a>
						</li>
						<li className={' text-light '}>
							<a
								href={'#'}
								className={
									'w-fit group flex items-center cursor-pointer ease-in duration-200 hover:text-primary  lg:text-base xs:text-2xl text-3xl text-light'
								}
							>
								<SvgIcon
									size={12}
									name={'arrowRight'}
									className={
										'fill-primary group-hover:translate-x-1 duration-300'
									}
								/>
								<p className={'ml-1.5 font-Raleway font-semibold'}>
									{footer.secondList.items[4].text}
								</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={'flex justify-center flex-col items-center py-7'}>
				<p
					className={
						'text-light font-semibold font-OpenSans mb-2.5 lg:text-base text-2xl'
					}
				>
					© Copyright YaTeam. {footer.license}
				</p>
				<p
					className={
						'text-light font-normal font-OpenSans lg:text-base text-2xl'
					}
				>
					Designed by
					<span className={'ml-1 font-semibold font-OpenSans text-primary'}>
						YaTeam
					</span>
				</p>
			</div>
		</footer>
	);
};
