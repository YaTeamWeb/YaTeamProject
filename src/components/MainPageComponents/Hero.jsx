import React from 'react';
import { SvgIcon } from '../UI/SvgIcon.jsx';
import { Heading } from '../UI/Heading.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import { Element } from 'react-scroll';
export const Hero = () => {
	const { hero } = useSelector(selectLangItems);

	return (
		<Element name={'hero'}>
			<section
				className={
					'xs:mt-[64px] xm:m-0 bg-hero bg-dark bg-fixed w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-light '
				}
				id="hero"
			>
				<div className="container flex flex-col items-center px-[20px]">
					<article
						className={'text-center mb-24 max-w-[860px]'}
						data-aos="fade-up"
					>
						<Heading className="text-light">{hero.title}</Heading>
						<p className={'font-medium xl:text-4xl lg:text-[36px] sm:text-[24px] xm:text-[20px] text-[18px] leading-normal'}>
							{hero.description}
						</p>
					</article>
					<ul
						className="hidden mm:flex mm:flex-row flex-col items-center justify-center font-bold text-3xl xm:gap-x-16 gap-[15px] w-full"
						data-aos="zoom-in-up"
					>
						<li
							className={
								'hover:border-primary ease-in duration-300 flex flex-col items-center justify-center gap-y-4 border border-border-hero w-full h-[130px] mm:w-[100px] mm:h-[100px] xm:w-[180px] xm:h-[120px] md:w-[200px] md:h-[150px] xl:w-60 xl:h-48'
							}
						>
							<SvgIcon className="fill-primary" name={'speed'} size={40} />
							<p className="mm:text-[14px] xs:text-[16px] md:text-xl ease-in duration-150 cursor-pointer hover:text-primary">
								{hero.cards[0].name}
							</p>
						</li>
						<li
							className={
								'hover:border-primary ease-in duration-300 flex flex-col items-center justify-center gap-y-4 border border-border-hero w-full h-[130px] mm:w-[100px] mm:h-[100px] xm:w-[180px] xm:h-[120px] md:w-[200px] md:h-[150px] xl:w-60 xl:h-48'
							}
						>
							<SvgIcon className="fill-primary" name={'medal'} size={40} />
							<p className="mm:text-[14px] xs:text-[16px] md:text-xl ease-in duration-150 cursor-pointer hover:text-primary">
								{hero.cards[1].name}
							</p>
						</li>
						<li
							className={
								'hover:border-primary ease-in duration-300 flex flex-col items-center justify-center gap-y-4 border border-border-hero w-full h-[130px] mm:w-[100px] mm:h-[100px] xm:w-[180px] xm:h-[120px] md:w-[200px] md:h-[150px] xl:w-60 xl:h-48'
							}
						>
							<SvgIcon className="fill-primary" name={'design'} size={40} />
							<p className="mm:text-[14px] xs:text-[16px] md:text-xl ease-in duration-150 cursor-pointer hover:text-primary">
								{hero.cards[2].name}
							</p>
						</li>
					</ul>
				</div>
			</section>
		</Element>
	);
};
