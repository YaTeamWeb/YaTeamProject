import React from 'react';
import ContentLoader from 'react-content-loader';

export const CountsSkeleton = () => {
	return (
		<section className="container py-[60px]">
			<ContentLoader
				speed={2}
				width={1240}
				height={520}
				viewBox="0 0 1240 520"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="15" ry="15" width="399" height="520" />
				<rect x="440" y="90" rx="15" ry="15" width="250" height="60" />
				<rect x="440" y="170" rx="15" ry="15" width="345" height="32" />

				<rect x="440" y="242" rx="15" ry="15" width="51" height="51" />
				<rect x="511" y="217" rx="15" ry="15" width="54" height="54" />
				<rect x="511" y="281" rx="15" ry="15" width="289" height="40" />

				<rect x="841" y="242" rx="15" ry="15" width="51" height="51" />
				<rect x="912" y="217" rx="15" ry="15" width="54" height="54" />
				<rect x="912" y="281" rx="15" ry="15" width="289" height="40" />

				<rect x="440" y="366" rx="15" ry="15" width="51" height="51" />
				<rect x="511" y="341" rx="15" ry="15" width="54" height="54" />
				<rect x="511" y="405" rx="15" ry="15" width="289" height="40" />

				<rect x="841" y="366" rx="15" ry="15" width="51" height="51" />
				<rect x="912" y="341" rx="15" ry="15" width="54" height="54" />
				<rect x="912" y="405" rx="15" ry="15" width="289" height="40" />
			</ContentLoader>
		</section>
	);
};
