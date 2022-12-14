import React from 'react';
import classnames from 'classnames';

export const Heading3 = ({ className, children }) => {
	return (
		<h3
			className={classnames(
				'font-Raleway font-bold text-2xl',
				className
			)}
		>
			{children}
		</h3>
	);
};
