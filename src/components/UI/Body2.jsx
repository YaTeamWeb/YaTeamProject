import React from 'react';
import classnames from 'classnames';

export const Body2 = ({ className, children }) => {
	return (
		<p
			className={classnames(
				'font-Raleway font-medium text-base text-gray-300 leading-5',
				className
			)}
		>
			{children}
		</p>
	);
};
