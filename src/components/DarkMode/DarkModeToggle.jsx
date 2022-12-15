import PropTypes from 'prop-types';
import React from 'react';

const onClickWrapper = (onClickMethod, isDark, event) => {
	const bodyRect = document.body.getBoundingClientRect();
	const elemRect = event.target.getBoundingClientRect();
	const offsetTop = elemRect.top - bodyRect.top;
	const offsetLeft = elemRect.left - bodyRect.left;

	const deviceZoomRatio =
		document.documentElement.clientWidth / window.innerWidth;

	const customEventState = {
		x: offsetLeft + elemRect.width / 2,
		y: (deviceZoomRatio > 1 ? offsetTop : elemRect.top) + elemRect.height / 2,
	};

	const darkModeToggleEvent = new CustomEvent('darkModeToggle', {
		detail: customEventState,
	});
	onClickMethod(isDark);
	dispatchEvent(darkModeToggleEvent);
};

const DarkModeToggle = ({ isDark, onClickMethod }) => (
	<button
		type="button"
		aria-label="Dark Mode Toggle"
		onClick={(event) => onClickWrapper(onClickMethod, !isDark, event)}
		className={`${
			isDark ? 'w-[30px] h-[30px] bg-primary' : 'w-[30px] h-[30px] bg-primary'
		} `}
	>
		<div className={'w-[30px] h-[30px] bg-primary'} />
	</button>
);

DarkModeToggle.propTypes = {
	isDark: PropTypes.bool.isRequired,
	onClickMethod: PropTypes.func.isRequired,
};

export default DarkModeToggle;
