import aboutMainPage from '../../assets/images/MainPageImages/aboutMainPage.png';
import React from 'react';
import { SvgIcon } from '../UI/SvgIcon/index.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { SupTitle } from '../UI/SupTitle.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';

export const Contact = () => {
	const { contact } = useSelector(selectLangItems);

	return (
		<section
			className="container py-16"
			style={{
				'--swiper-pagination-bullet-inactive-color': '#DDDDDD',
				'--swiper-pagination-bullet-inactive-opacity': '100%',
			}}
			data-aos="fade-up" data-aos-delay="100"
		>

			<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
			<SupTitle>{contact.suptitle}</SupTitle>

			<Heading2 className="mb-10 dark:text-light duration-500">
				{contact.title}
			</Heading2>
			</div>

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b8ce5caeefc0863f905a7c7db4c4cea3a8d9e37252825f96627dd39152296e5&amp;source=constructor"
            width="100%" height="400" frameborder="0" data-aos="fade-up" data-aos-delay="100" data-aos-offset='500'></iframe>
        </section>
	);
};
