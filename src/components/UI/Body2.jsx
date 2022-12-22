import React from 'react';
import classnames from 'classnames';

export const Body2 = ({ className, children }) => {
	return (
		<p
			className={classnames(
				'font-Raleway font-medium xs:text-[18px] text-[16px] text-gray-300',
				className
			)}
		>
			{children}
		</p>
	);
};
