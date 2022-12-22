import React from 'react';
import classnames from 'classnames';

export const Heading3 = ({ className, children }) => {
	return (
		<h3
			className={classnames(
				'font-Raleway font-bold xl:text-2xl md:text-[24px] text-[20px]',
				className
			)}
		>
			{children}
		</h3>
	);
};
