import React from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import sberbank from '../../assets/images/MainPageImages/clients-1.png';
import microsoft from '../../assets/images/MainPageImages/clients-2.png';
import apple from '../../assets/images/MainPageImages/clients-3.png';
import yandex from '../../assets/images/MainPageImages/clients-4.png';
export const Clients = () => {
	return (
		<section className="container py-16">
			<SupTitle>Клиенты</SupTitle>
			<Heading2 className="mb-10">Наши клиенты — мировые корпорации</Heading2>
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
						alt="Сбербанк"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img className="max-h-12 object-cover" src={apple} alt="Сбербанк" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="max-h-12 object-cover" src={yandex} alt="Сбербанк" />
				</SwiperSlide>
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
						src={sberbank}
						alt="Сбербанк"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="max-h-12 object-cover"
						src={sberbank}
						alt="Сбербанк"
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
