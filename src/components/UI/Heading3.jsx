import React from 'react';
import classnames from 'classnames';

export const Heading3 = ({ className, children }) => {
	return (
		<h3
			className={classnames(
				className,
				'font-Raleway font-bold text-dark text-2xl'
			)}
		>
			{children}
		</h3>
	);
};
