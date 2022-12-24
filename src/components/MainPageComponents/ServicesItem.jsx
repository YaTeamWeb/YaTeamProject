import React from 'react';
import { SvgIcon } from '../UI/SvgIcon.jsx';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body2 } from '../UI/Body2.jsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slices/theme/selectors.js';

export const ServicesItem = ({
	id,
	title,
	svgName,
	description,
	clearNearBy,
	dataAos,
	dataAosDelay,
	dataAosOffset,
}) => {
	const theme = useSelector(selectTheme);

	const onMouseLeave = (e) => {
		e.currentTarget.style.background = 'transparent';
		e.currentTarget.style.backgroundImage = null;
		e.currentTarget.border = '1px solid transparent';
	};

	const onMouseMove = (e) => {
		e.currentTarget.border = '1px solid transparent';
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.25),rgba(255,255,255,0) )`;
		e.currentTarget.style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 9 / 2px / 0px stretch `;
	};

	return (
		<li
			data-aos={dataAos}
			data-aos-delay={dataAosDelay}
			data-aos-offset={dataAosOffset}
			className={'lg:col-span-4 sm:col-span-6 col-span-12'}
		>
			<div
				onMouseLeave={theme ? onMouseLeave : null}
				onMouseMove={theme ? onMouseMove : null}
				onMouseEnter={theme ? clearNearBy : null}
				className="item h-full dark:hover:shadow-gray-300 dark:hover:shadow-lg dark:border-[#111] dark:shadow-none border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 px-5 py-[89px]  flex items-center flex-col justify-center"
				id={id}
			>
				<SvgIcon
					className="rounded mb-5 bg-primary p-[20px]"
					name={svgName}
					size={71}
				/>

				<Heading3 className="block ease-linear duration-300 hover:text-primary cursor-pointer mb-5 dark:text-light dark:hover:text-primary">
					{title}
				</Heading3>
				<Body2 className="block">{description}</Body2>
			</div>
		</li>
	);
};
