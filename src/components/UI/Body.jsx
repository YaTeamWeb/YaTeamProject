import React from 'react';
import classnames from 'classnames';
export const Body = ({ className, children }) => {
	return (
		<p className={classnames('xl:text-2xl lg:text-[24px] md:text-[20px] text-[18px] text-dark font-medium', className)}>
			{children}
		</p>
	);
};
