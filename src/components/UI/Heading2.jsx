import React from 'react';
import classnames from 'classnames';

export const Heading2 = ({ className, children }) => {
	return (
		<h2
			className={classnames(
				'text-4xl text-dark font-bold leading-[60px]',
				className
			)}
		>
			{children}
		</h2>
	);
};
