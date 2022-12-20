import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import project_1 from '../assets/images/ProjectsImages/portfolio-1.png';
import project_2 from '../assets/images/ProjectsImages/portfolio-2.jpg';
import project_3 from '../assets/images/ProjectsImages/portfolio-3.png';
import project_4 from '../assets/images/ProjectsImages/portfolio-4.jpg';

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useDispatch, useSelector } from 'react-redux';
import { selectLangItems } from '../store/slices/lang/selectors.js';

const ProjectInfoPage = () => {
    const { portfolio } = useSelector(selectLangItems);
	let { projectId } = useParams();
	console.log(projectId);
	let images=[project_1, project_2, project_3, project_4];
	return (
		<>
			<div className='mt-16 w-full h-[78px] bg-projectInfoPageHeader px-[120px] flex flex-row justify-between items-center dark:bg-gray-400 duration-500'>
				<h1 className='text-[32px] text-gray-500 font-medium font-["Open_Sans"] dark:text-light duration-500'>{portfolio.projectInfoPage[0].projectInfo}</h1>
				<p className='text-xl font-light text-gray-500 font-["Open_Sans"] dark:text-light duration-500'><a className='text-primary' href='/'>{portfolio.projectInfoPage[0].home}</a> / [Название проекта]</p>
			</div>
			<div className="container pt-[124px] overflow-hidden flex flex-row gap-[30px]"
			style={{
				'--swiper-pagination-bullet-inactive-color': '#DDDDDD',
				'--swiper-pagination-bullet-inactive-opacity': '100%',
			}}>
				<div className='w-[650px]'>
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
					{images.map((image) => (<SwiperSlide>
							<img
								className="w-[650px] object-cover"
								src={image}
								alt="Проект"
							/>
						</SwiperSlide>))
					}
					
				</Swiper>
				</div>
				<div className='w-[357px]'>
					<div className='infoBlock pt-5 px-[15px] pb-10'>
						<h2 className='text-2xl font-semibold font-Raleway text-gray-500 mb-5 dark:text-light duration-500'>[Название проекта]</h2>
						<div className='w-[327px] h-px bg-gray-100 mb-5'></div>
						<div className='w-full flex flex-col gap-[10px]'>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className='font-semibold mr-[5px]'>{portfolio.projectInfoPage[0].category + ':'}</span>[Категория]
							</p>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className='font-semibold mr-[5px]'>{portfolio.projectInfoPage[0].client + ':'}</span>[Клиент]
							</p>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className='font-semibold mr-[5px]'>{portfolio.projectInfoPage[0].date + ':'}</span>[Дата]
							</p>
							<p className='text-base font-normal font-["Open_Sans"] text-gray-500 dark:text-light duration-500'>
								<span className='font-semibold mr-[5px]'>{portfolio.projectInfoPage[0].link + ':'}</span><a href='#' className='text-primary'>[Ссылка]</a>
							</p>
						</div>
					</div>
					<h3 className='text-2xl font-semibold font-Raleway text-gray-500 mb-[10px] dark:text-light duration-500'>{portfolio.projectInfoPage[0].solution}</h3>
					<p className='text-base font-normal font-Raleway text-gray-500 dark:text-light duration-500'>Данный проект был создан в качестве домашнего задания в Интенсивах Академии Яндекса. Его ключевая особенность - удобство использоания и быстрая загрузка данных. Он преставялет собой интернет-магазин для продажи книг. Наша команда продумала каждую мелочь, чтобы сделать ваш опыт использования незабываемым.</p>

				</div>
			</div>
			{/*<Footer />*/}
		</>
	);
};

export default ProjectInfoPage;