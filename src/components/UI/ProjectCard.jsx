import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import { Link } from 'react-router-dom';

export const ProjectCard = ({
	imageAlt,
	project,
	imageFigcaption,
	projectId,
}) => {
	const { portfolio } = useSelector(selectLangItems);
	return (
		<Link to={'/portfolio/' + projectId}>
			<figure className="group flex justify-center flex-col items-center">
				<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
					<div className={'relative rounded h-full w-full'}>
						<LazyLoadImage
							className="rounded-xl object-cover w-full h-full"
							src={project}
							alt={imageAlt}
							effect={'blur'}
							height={'100%'}
							width={'100%'}
							wrapperClassName={'h-full w-full'}
						/>
						<div
							className={
								'bg-dark opacity-0 hover:opacity-80 absolute w-full h-full top-0 left-0 z-20 rounded-xl flex justify-center items-center text-2xl text-light text-Raleway duration-300'
							}
						>
							{portfolio.overlay}
						</div>
					</div>
				</div>
				<figcaption
					className={
						imageFigcaption === ''
							? ''
							: 'group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light'
					}
				>
					{imageFigcaption}
				</figcaption>
			</figure>
		</Link>
	);
};
