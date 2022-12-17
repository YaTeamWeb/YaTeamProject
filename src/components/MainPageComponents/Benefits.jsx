import React from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import benefits from '../../assets/images/MainPageImages/benefits.png';
import { SvgIcon } from '../UI/SvgIcon';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body2 } from '../UI/Body2.jsx';


export const Benefits = () => {
	return (
		<section className="container py-16">
			<div data-aos="fade-up" data-aos-offset='450' data-aos-delay='500'>
			<SupTitle>Преимущества</SupTitle>
			<Heading2 className="mb-10 dark:text-light duration-500">
				Наша команда обладает множеством преимуществ
			</Heading2>
			</div>
			<div className="flex justify-between" data-aos="fade-up" data-aos-delay="700" data-aos-offset="350">
				<img src={benefits} alt="Печатание на клавиатуре" data-aos="fade-right" data-aos-delay="700" data-aos-offset="350"/>
				<ul className="ml-7 max-w-[394px]">
					<li className="flex mb-10" data-aos="fade-left" data-aos-delay="900" data-aos-offset="350">
						<SvgIcon size={51} name="clock" className="fill-primary" />
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">Работаем как часы</Heading3>
							<Body2>Мы никогда не заставляем заказчика ждать</Body2>
						</div>
					</li>
					<li className="flex mb-10" data-aos="fade-left" data-aos-delay="900" data-aos-offset="350">
						<SvgIcon size={51} name="copy" className="fill-primary" />
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">Чётко следуем ТЗ</Heading3>
							<Body2>Для нас нет невозвожного</Body2>
						</div>
					</li>
					<li className="flex mb-10" data-aos="fade-left" data-aos-delay="900" data-aos-offset="350">
						<SvgIcon
							size={48}
							name="trophy"
							className="fill-primary w-[51px]"
						/>
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">Для нас нет невозвожного</Heading3>
							<Body2>Мы никогда не заставляем заказчика ждать</Body2>
						</div>
					</li>
					<li className="flex" data-aos="fade-left" data-aos-delay="900" data-aos-offset="350">
						<SvgIcon
							size={57}
							name="alchemy"
							className="fill-primary w-[51px]"
						/>
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">Работаем как часы</Heading3>
							<Body2>Мы никогда не заставляем заказчика ждать</Body2>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
