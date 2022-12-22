import React from 'react';
import classnames from 'classnames';

export const Body3 = ({ className, children }) => {
	return (
		<p
			className={classnames(
				'font-Raleway font-semibold md:text-xl ',
				className
			)}
		>
			{children}
		</p>
	);
};
