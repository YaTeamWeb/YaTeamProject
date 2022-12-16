import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const onClickWrapper = (onClickMethod, isDark, event) => {
	const html = document.querySelector('html');
	if (
		JSON.parse(localStorage.getItem('theme')) === true ||
		html.classList.contains('dark')
	) {
		html.classList.remove('dark');
	} else {
		html.classList.add('dark');
	}
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
	localStorage.setItem('theme', isDark);
	dispatchEvent(darkModeToggleEvent);
};

const DarkModeToggle = ({ isDark, onClickMethod }) => (
	<button
		type="button"
		aria-label="Dark Mode Toggle"
		onClick={(event) => onClickWrapper(onClickMethod, !isDark, event)}
		className={'mr-2.5 relative w-8 h-8 bg-primary rounded-full'}
	>
		<div
			className={classnames(
				isDark ? 'scale-100' : 'w-6 h-6 scale-0',
				'absolute w-6 h-6 left-2.5 bottom-2.5 rounded-full z-50 bg-dark ease-in-out duration-300'
			)}
		/>
	</button>
);

DarkModeToggle.propTypes = {
	isDark: PropTypes.bool.isRequired,
	onClickMethod: PropTypes.func.isRequired,
};

export default DarkModeToggle;
