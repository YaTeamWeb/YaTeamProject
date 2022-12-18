import React from 'react';
import classnames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProjectCard = ({ imageAlt, project, imageFigcaption, children }) => {
	return (
		<figure className="group flex justify-center flex-col items-center">	
			<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
				<div>
					<div className='absolute w-[546px] h-[360px] flex justify-center rounded-xl items-center bg-project duration-300 z-50 
					opacity-0 hover:opacity-100 text-2xl text-light font-Raleway'>Посмотреть</div>

				    <LazyLoadImage
					className="rounded-xl object-cover w-full h-full"
					src={project}
					alt={imageAlt}
					effect={'blur'}
					/>
				</div>
			</div>
			<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
				{imageFigcaption}
			</figcaption>
		</figure>
	);
};
