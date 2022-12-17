import React from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import sberbank from '../../assets/images/MainPageImages/clients-1.svg';
import microsoft from '../../assets/images/MainPageImages/clients-2.png';
import apple from '../../assets/images/MainPageImages/clients-3.png';
import darkMode_yandex from '../../assets/images/MainPageImages/clients-4-dark.png';
import yandex from '../../assets/images/MainPageImages/clients-4.png';
import amazon from '../../assets/images/MainPageImages/clients-5.svg';
import darkMode_amazon from '../../assets/images/MainPageImages/darkMode-clients-5.svg';
import ozon from '../../assets/images/MainPageImages/clients-6.svg';
import netflix from '../../assets/images/MainPageImages/clients-7.svg';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
export const Clients = () => {
	const { clients } = useSelector(selectLangItems);
	return (
		<section
			className="container py-16"
			style={{
				'--swiper-pagination-bullet-inactive-color': '#DDDDDD',
				'--swiper-pagination-bullet-inactive-opacity': '100%',
			}}
			data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="300"
		>

			<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
			<SupTitle>{clients.suptitle}</SupTitle>

			<Heading2 className="mb-10 dark:text-light duration-500">
				{clients.title}
			</Heading2>
			</div>

			<div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={159}
				pagination={{
					clickable: true,
					horizontalClass: 'swiper-pagination-horizontal relative mt-9',
					bulletClass:
						'swiper-pagination-bullet w-4 h-4 ease-linear duration-300',
					bulletActiveClass: 'bg-primary opacity-100',
					paginationDisabledClass: 'swiper-pagination-bullet-disabled',
				}}
				autoplay={{
					delay: 2000,
				}}
				slidesPerView={4}
				speed={1000}
			>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover"
						src={sberbank}
						alt="Сбербанк"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover"
						src={microsoft}
						alt="Microsoft"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover dark:invert duration-500"
						src={apple}
						alt="Apple"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover opacity-0 dark:opacity-100 duration-500 absolute"
						src={darkMode_yandex}
						alt="Yandex"
					/>
					<img
						className="max-h-12 object-cover opacity-100 dark:opacity-0 duration-500"
						src={yandex}
						alt="Yandex"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover opacity-0 dark:opacity-100 duration-500 absolute"
						src={darkMode_amazon}
						alt="Amazon"
					/>
					<img
						className="max-h-12 object-cover opacity-100 dark:opacity-0 duration-500"
						src={amazon}
						alt="Amazon"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover"
						src={ozon}
						alt="Ozon"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover"
						src={netflix}
						alt="Netflix"
					/>
				</SwiperSlide>
			</Swiper>
			</div>
		</section>
	);
};
