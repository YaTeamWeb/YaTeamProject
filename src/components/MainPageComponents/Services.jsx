import React from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import { SvgIcon } from '../UI/SvgIcon';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body2 } from '../UI/Body2.jsx';

export const Services = () => {
	return (
		<section className="container py-16">
			<SupTitle>Сервисы</SupTitle>
			<Heading2 className="mb-10">
				Услуги, которые предоставляет наша компания
			</Heading2>
			<ul className="text-center gap-5 grid grid-cols-12">
				<li className="border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 py-[89px] col-span-4 flex items-center flex-col justify-center">
					<SvgIcon
						className="rounded mb-5 bg-primary p-5"
						name="key"
						size={70}
					/>

					<Heading3 className=" block ease-linear duration-300 hover:text-primary cursor-pointer mb-5">
						Сайт под ключ
					</Heading3>
					<Body2 className="block">
						Разработаем вам сайт от идеи до запуска в интернете
					</Body2>
				</li>
				<li className="border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 px-5 py-[89px] col-span-4 flex items-center flex-col justify-center">
					<SvgIcon
						className="rounded mb-5 bg-primary p-5"
						name="layout"
						size={70}
					/>
					<Heading3 className="ease-linear duration-300 hover:text-primary cursor-pointer mb-5">
						Вёрстка с макета
					</Heading3>
					<Body2>Сверстаем сайт по готовому макету</Body2>
				</li>
				<li className="border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 px-5 py-[89px] col-span-4 flex items-center flex-col justify-center">
					<SvgIcon
						className="rounded mb-5 bg-primary p-5"
						name="browser"
						size={70}
					/>
					<Heading3 className="ease-linear duration-300 hover:text-primary cursor-pointer mb-5">
						Поддержка сайта
					</Heading3>
					<Body2>Поддержим уже готовый сайт</Body2>
				</li>
				<li className="border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 py-[89px] col-span-4 flex items-center flex-col justify-center">
					<SvgIcon
						className="rounded mb-5 bg-primary p-5"
						name="key"
						size={70}
					/>

					<Heading3 className="ease-linear duration-300 hover:text-primary cursor-pointer mb-5">
						Сайт под ключ
					</Heading3>
					<Body2>Разработаем вам сайт от идеи до запуска в интернете</Body2>
				</li>
				<li className="border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 px-5 py-[89px] col-span-4 flex items-center flex-col justify-center">
					<SvgIcon
						className="rounded mb-5 bg-primary p-5"
						name="layout"
						size={70}
					/>
					<Heading3 className="ease-linear duration-300 hover:text-primary cursor-pointer mb-5">
						Вёрстка с макета
					</Heading3>
					<Body2>Сверстаем сайт по готовому макету</Body2>
				</li>
				<li className="border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 px-5 py-[89px] col-span-4 flex items-center flex-col justify-center">
					<SvgIcon
						className="rounded mb-5 bg-primary p-5"
						name="browser"
						size={70}
					/>
					<Heading3 className="ease-linear duration-300 hover:text-primary cursor-pointer mb-5">
						Поддержка сайта
					</Heading3>
					<Body2>Поддержим уже готовый сайт</Body2>
				</li>
			</ul>
		</section>
	);
};
