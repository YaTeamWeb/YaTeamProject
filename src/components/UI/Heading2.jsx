import React from 'react';
import classnames from 'classnames';

export const Heading2 = ({ className, children }) => {
	return (
		<h2 className={classnames('text-4xl font-bold leading-normal', className)}>
			{children}
		</h2>
	);
};
