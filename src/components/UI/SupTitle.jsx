import React from 'react';
import classnames from 'classnames';
export const SupTitle = ({ className, children }) => {
	return (
		<p
			className={classnames(
				'w-fit text-gray-200 relative font-semibold text-xl before:content-[""] before:right-[-130px] before:absolute before:top-1/2 before:translate-y-1/2 before:bg-primary before:w-[120px] before:h-px',
				className
			)}
		>
			{children}
		</p>
	);
};
