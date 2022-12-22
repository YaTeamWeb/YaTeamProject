import React from 'react';
import classnames from 'classnames';

export const Heading2 = ({ className, children }) => {
	return (
		<h2
			className={classnames(
				'xl:text-4xl lg:text-[36px] md:text-[32px] sm:text-[24px] text-[20px] font-bold',
				className
			)}
		>
			{children}
		</h2>
	);
};
