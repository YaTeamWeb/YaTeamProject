import React from 'react';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body2 } from '../UI/Body2.jsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slices/theme/selectors.js';
import classnames from 'classnames';

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
	const theme = useSelector(selectTheme);

	const onMouseLeave = (e) => {
		return e;
		// e.currentTarget.style.background = 'transparent';
		// e.currentTarget.style.backgroundImage = null;
		// e.currentTarget.border = '1px solid transparent';
	};

	const onMouseMove = (e) => {
		return e;
		// e.currentTarget.border = '1px solid transparent';
		// const rect = e.currentTarget.getBoundingClientRect();
		// const x = e.clientX - rect.left;
		// const y = e.clientY - rect.top;
		// e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.25),rgba(255,255,255,0) )`;
		// e.currentTarget.style.borderImage = `radial-gradient(29.64% 29.64% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 9 / 2px / 0px stretch `;
	};

	return (
		<li
			data-aos={dataAos}
			data-aos-delay={dataAosDelay}
			data-aos-offset={dataAosOffset}
			className={''}
		>
			<div
				onMouseLeave={theme ? onMouseLeave : null}
				onMouseMove={theme ? onMouseMove : null}
				onMouseEnter={theme ? clearNearBy : null}
				className="item rounded-xl h-full dark:hover:shadow-gray-300 dark:border-[#111] dark:shadow-lg border scale-[0.999] border-gray-100 ease-in-out hover:shadow-xl hover:translate-y-[-10px] hover:border-light duration-300 flex items-start flex-col justify-center"
				id={id}
			>
				<img
					className={classnames(
						'rounded-t-xl w-full h-full object-cover',
						backGround
					)}
					src={photo}
					alt={initial}
				/>

				<Heading3 className="block ease-linear duration-300 hover:text-primary cursor-pointer px-5 py-2 dark:text-light dark:hover:text-primary">
					{initial}
				</Heading3>
				<Body2 className="block px-5 pb-7">{role}</Body2>
			</div>
		</li>
	);
};
