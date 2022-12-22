import React from 'react';
import classnames from 'classnames';
export const SupTitle = ({ className, children }) => {
	return (
		<p
			className={classnames(
				'dark:text-fuchsia-50 duration-500 w-fit text-gray-200 relative font-semibold xl:text-xl lg:text-[20px] md:text-[18px] text-[16px] before:content-[""] before:right-[-130px] before:absolute before:top-1/2 before:translate-y-1/2 before:bg-primary before:w-[120px] before:h-px',
				className
			)}
		>
			{children}
		</p>
	);
};
