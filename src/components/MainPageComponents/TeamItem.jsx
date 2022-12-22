import React from 'react';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body2 } from '../UI/Body2.jsx';
import classnames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const TeamItem = ({
	id,
	initial,
	photo,
	role,
	backGround,
	clearNearBy,
	dataAos,
	dataAosDelay,
	dataAosOffset,
}) => {
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
		e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(157, 78, 221, 0.9),rgba(157, 78, 221,0) )`;
		e.currentTarget.style.borderTopLeftRadius = `12px`;
		e.currentTarget.style.borderTopRightRadius = `12px`;
		e.currentTarget.style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(157, 78, 221,0.7),rgba(157, 78, 221,0.7),rgba(157, 78, 221,0.1) ) 9 / 2px / 0px stretch `;
	};

	return (
		<li
			data-aos={dataAos}
			data-aos-delay={dataAosDelay}
			data-aos-offset={dataAosOffset}
			className={''}
		>
			<div className="w-[355px] lg:w-[285px] dark:border-[#111] dark:shadow-lg rounded-xl h-full scale-[0.999] border border-gray-100 dark:border-transparent ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 flex items-start flex-col justify-center">
				<div
					className={classnames(
						backGround,
						'relative rounded-t-xl w-full w-[355px] lg:w-[203px] xl:w-[285px] h-[300px] lg:h-[250px] xl:h-[280px]'
					)}
				>
					<div className="w-full h-full z-20 relative">
						<LazyLoadImage
							className={'item w-full h-full object-cover'}
							src={photo}
							alt={initial}
							onMouseLeave={onMouseLeave}
							onMouseMove={onMouseMove}
							onMouseEnter={clearNearBy}
							id={id}
							height={'100%'}
							effect={'blur'}
						/>
					</div>
					<div
						className={classnames(
							backGround,
							'rounded-t-xl absolute top-0 left-0 z-10 w-[355px] lg:w-[203px] lg:w-[285px] h-[300px] lg:h-[250px] xl:h-[280px]'
						)}
					></div>
				</div>
				<Heading3 className="block ease-linear duration-300 hover:text-primary cursor-pointer px-5 py-2 dark:text-light dark:hover:text-primary">
					{initial}
				</Heading3>
				<Body2 className="block px-5 pb-7">{role}</Body2>
			</div>
		</li>
	);
};
