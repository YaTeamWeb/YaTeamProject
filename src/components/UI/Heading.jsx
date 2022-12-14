import React from 'react';
import classnames from 'classnames';
export const Heading = ({ className, children }) => {
	return (
		<h1
			className={classnames(
				'font-bold text-6xl leading-normal',
				className
			)}
		>
			{children}
		</h1>
	);
};
