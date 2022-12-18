import React from 'react';
import ContentLoader from 'react-content-loader';

export const ContactSkeleton = () => {
	return (
		<section className="container py-16">
			<ContentLoader
				speed={2}
				width={1240}
				height={1179}
				viewBox="0 0 1240 1179"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				
			</ContentLoader>
		</section>
	);
};
