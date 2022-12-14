import React from 'react';
import classnames from 'classnames';

export const Heading4 = ({ className, children }) => {
	return (
		<h4
			className={classnames(
				'font-Raleway font-semibold text-xl',
				className
			)}
		>
			{children}
		</h4>
	);
};
