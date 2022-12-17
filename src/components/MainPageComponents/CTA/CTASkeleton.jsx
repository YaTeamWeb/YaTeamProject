import React from 'react';
import ContentLoader from 'react-content-loader';

export const CtaSkeleton = () => {
	return (
		<section className=" w-full h-[271px] bg-fixed bg-cover bg-no-repeat container">
			<ContentLoader
				speed={2}
				width={1240}
				height={872}
				viewBox="0 0 1240 872"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				<rect x="509" y="60" rx="15" ry="15" width="221" height="32" />
				<rect x="160" y="122" rx="15" ry="15" width="960" height="56" />
				<rect x="552" y="198" rx="15" ry="15" width="135" height="43" />
			</ContentLoader>
		</section>
	);
};
