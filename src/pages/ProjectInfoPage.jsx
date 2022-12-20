import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useSelector } from 'react-redux';
import { selectLangItems } from '../store/slices/lang/selectors.js';
import { selectProjectItem } from '../store/slices/projects/selectors.js';

const ProjectInfoPage = () => {
	const { portfolio } = useSelector(selectLangItems);
	const { projectId } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const item = useSelector(selectProjectItem(projectId));
	if (!item) {
		return (
			<main className={'overflow-hidden'}>
				<div className={'h-screen w-screen '}>
					<div
						className={
							'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center'
						}
					>
						<h1 className={'text-6xl dark:text-light mb-2.5'}>
							Ничего не найдено 😞
						</h1>
						<Link
							to={'/'}
							className={
								'text-3xl dark:text-light hover:text-primary duration-300'
							}
						>
							Вернуться
						</Link>
					</div>
				</div>
			</main>
		);
	}
	return (
		<>
			<div className="mt-16 w-full h-[78px] bg-projectInfoPageHeader px-[120px] flex flex-row justify-between items-center dark:bg-gray-400 duration-500 ">
				<h1 className='text-[32px] text-gray-500 font-medium font-["Open_Sans"] dark:text-light duration-500'>
					{portfolio.projectInfo}
				</h1>
				<p className='text-xl font-light text-gray-500 font-["Open_Sans"] dark:text-light duration-500'>
					<a className="text-primary" href="/">
						{portfolio.home}
					</a>{' '}
					/ {item.title}
				</p>
			</div>
			<div
				className="container py-[124px] overflow-hidden flex flex-row gap-[30px]"
				style={{
					'--swiper-pagination-bullet-inactive-color': '#DDDDDD',
					'--swiper-pagination-bullet-inactive-opacity': '100%',
				}}
			>
				<div className="w-[650px]">
					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={50}
						pagination={{
							clickable: true,
							horizontalClass: 'swiper-pagination-horizontal relative mt-9',
							bulletClass:
								'swiper-pagination-bullet w-4 h-4 ease-linear duration-300',
							bulletActiveClass: 'bg-primary opacity-100',
							paginationDisabledClass: 'swiper-pagination-bullet-disabled',
						}}
						autoplay={{
							delay: 3000,
						}}
						slidesPerView={1}
						speed={1000}
					>
						{item.images.map((image, id) => (
							<SwiperSlide key={id}>
								<img
									className="w-[650px] object-cover"
									src={image.src}
									alt="Проект"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="w-[357px]">
					<div className="infoBlock pt-5 px-[15px] pb-10 shadow-projectInfo mb-[25px]">
						<h2 className="text-2xl font-semibold font-Raleway text-gray-500 mb-5 dark:text-light duration-500">
							{item.title}
						</h2>
						<div className="w-[327px] h-px bg-gray-100 mb-5"></div>
						<div className="w-full flex flex-col gap-[10px]">
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className="font-semibold mr-[5px]">
									{portfolio.category + ':'}
								</span>
								{item.category}
							</p>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className="font-semibold mr-[5px]">
									{portfolio.client + ':'}
								</span>
								{item.client}
							</p>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className="font-semibold mr-[5px]">
									{portfolio.date + ':'}
								</span>
								{item.createdDate}
							</p>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className="font-semibold mr-[5px]">
									{portfolio.link + ':'}
								</span>
								<a href="#" className="text-primary">
									{item.link}
								</a>
							</p>
						</div>
					</div>
					<h3 className="text-2xl font-semibold font-Raleway text-gray-500 mb-[10px] dark:text-light duration-500">
						{item.solution}
					</h3>
					<p className="text-base font-normal font-Raleway text-gray-500 dark:text-light duration-500">
						{item.description}
					</p>
				</div>
			</div>
			{/*<Footer />*/}
		</>
	);
};

export default ProjectInfoPage;
