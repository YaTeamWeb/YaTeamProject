import React from 'react';
import classnames from 'classnames';
export const Button = ({ className, children, onClick }) => {
	return (
		<button
			className={classnames(
				'rounded-[4px] border-2 border-primary border-solid px-[25px] pt-[7px] pb-[8px] text-base font-semibold font-["Open_Sans"] hover:text-black hover:bg-primary duration-500',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
