import React, { useEffect } from 'react';
import { Heading2 } from '../UI/Heading2.jsx';
import { Body } from '../UI/Body.jsx';
import { Body2 } from '../UI/Body2.jsx';
import { SvgIcon } from '../UI/SvgIcon.jsx';
import notebook from '../../assets/images/MainPageImages/counts.png';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import PureCounter from '@srexi/purecounterjs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Counts = () => {
	const { counts } = useSelector(selectLangItems);

	useEffect(() => {
		new PureCounter();
	}, []);

	return (
		<section
			className={
				'container flex flex-col items-center justify-center py-[60px]'
			}
			id="cta"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="0"
			data-aos-offset="400"
		>
			<div className="flex gap-8 flex-row items-center justify-center w-[1200px] h-[520px]">
				<div
					className="countsImage w-[397px] h-full"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="0"
				>
					<LazyLoadImage
						src={notebook}
						className="object-cover w-full h-full"
						alt={'Ноутбук'}
						effect={'blur'}
						width={397}
						height={520}
					/>
				</div>
				<div
					className="bg-transparent w-[772px] h-[339px]"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="350"
				>
					<Heading2 className="mb-[15px] dark:text-light duration-500">
						{counts.title}
					</Heading2>
					<Body className="mb-[15px] dark:text-light duration-500">
						{counts.description}
					</Body>
					<div className="grid grid-rows-2 grid-cols-2 gap-x-[30px] gap-y-[16px] w-full h-[219px]">
						<div className="flex flex-row items-center justify-start gap-[30px] h-[102px]">
							<div className="w-51px h-51px">
								<SvgIcon className="fill-primary" name={'smile'} size={51} />
							</div>
							<div className="">
								<span
									data-purecounter-duration="2.5"
									data-purecounter-end="65"
									className='purecounter font-bold text-6xl font-["Open_Sans"] h-[54px] mb-[10px] dark:text-light duration-500'
								>
									0
								</span>
								<Body2>
									{counts.items[0].textFirst}{' '}
									<span className="font-semibold text-dark dark:text-light duration-500">
										{counts.items[0].keywords}
									</span>{' '}
									{counts.items[0].textSecond}
								</Body2>
							</div>
						</div>

						<div className="flex flex-row items-center justify-start gap-[30px] h-[102px]">
							<div className="w-51px h-51px">
								<SvgIcon className="fill-primary" name={'projects'} size={50} />
							</div>
							<div className="">
								<span
									data-purecounter-duration="3"
									data-purecounter-end="85"
									className='purecounter font-bold text-6xl font-["Open_Sans"] h-[54px] mb-[10px] dark:text-light duration-500'
								>
									0
								</span>
								<Body2>
									{counts.items[1].textFirst}{' '}
									<span className="font-semibold text-dark dark:text-light duration-500">
										{counts.items[1].keywords}
									</span>{' '}
									{counts.items[1].textSecond}
								</Body2>
							</div>
						</div>

						<div className="flex flex-row items-center justify-start gap-[30px] h-[102px]">
							<div className="w-51px h-51px">
								<SvgIcon
									className="fill-primary"
									name={'calendary'}
									size={51}
								/>
							</div>
							<div className="">
								<span
									data-purecounter-duration="1.5"
									data-purecounter-end="10"
									className='purecounter font-bold text-6xl font-["Open_Sans"] h-[54px] mb-[10px] dark:text-light duration-500'
								>
									0
								</span>
								<Body2>
									{counts.items[2].textFirst}{' '}
									<span className="font-semibold text-dark dark:text-light duration-500">
										{counts.items[2].keywords}
									</span>{' '}
									{counts.items[2].textSecond}
								</Body2>
							</div>
						</div>

						<div className="flex flex-row items-center justify-start gap-[30px] h-[102px]">
							<div className="w-51px h-51px">
								<SvgIcon className="fill-primary" name={'medal'} size={51} />
							</div>
							<div className="">
								<span
									data-purecounter-duration="2"
									data-purecounter-end="20"
									className='purecounter font-bold text-6xl font-["Open_Sans"] h-[54px] mb-[10px] dark:text-light duration-500'
								>
									0
								</span>
								<Body2>
									{counts.items[3].textFirst}{' '}
									<span className="font-semibold text-dark dark:text-light duration-500">
										{counts.items[3].keywords}
									</span>{' '}
									{counts.items[3].textSecond}
								</Body2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
