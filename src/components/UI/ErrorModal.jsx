import React from 'react';

export const ErrorModal = ({ show, text }) => {
	if (!show) {
		return null;
	}
	return (
		<div
			className="bg-red-100 rounded-lg text-base text-red-700 py-2 px-2 mb-7 mr-5 inline-flex items-center w-[231px] fixed h-12 bottom-0 left-3/4"
			role="alert"
		>
			{text}
		</div>
	);
};
