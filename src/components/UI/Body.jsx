import React from 'react';
import classnames from 'classnames';
export const Body = ({ className, children }) => {
	return (
		<p className={classnames('text-2xl text-dark font-medium', className)}>
			{children}
		</p>
	);
};
