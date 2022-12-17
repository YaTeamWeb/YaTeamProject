import React from 'react';
import ContentLoader from 'react-content-loader';

const HeroSkeleton = () => {
	return (
		<div
			className={
				'bg-dark bg-fixed w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-light '
			}
		>
			<ContentLoader
				speed={2}
				width={1240}
				height={522}
				viewBox="0 0 1240 522"
				backgroundColor="#EBEBEB "
				foregroundColor="#ecebeb"
			>
				<rect x="190" y="0" rx="15" ry="15" width="860" height="138" />
				<rect x="190" y="164" rx="15" ry="15" width="860" height="54" />
				<rect x="190" y="330" rx="0" ry="0" width="240" height="192" />
				<rect x="495" y="330" rx="0" ry="0" width="240" height="192" />
				<rect x="800" y="330" rx="0" ry="0" width="240" height="192" />
			</ContentLoader>
		</div>
	);
};

export default HeroSkeleton;
