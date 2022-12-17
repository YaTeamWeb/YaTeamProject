import React from 'react';
import * as Scroll from 'react-scroll';
import { SvgIcon } from './UI/SvgIcon.jsx';
import classnames from 'classnames';

export const BackTop = ({ className }) => {
	const LinkAnchor = Scroll.Link;
	const scroll = Scroll.animateScroll;
	return (
		<div className="BackToTopContainer" style={{ opacity: '0' }}>
			<LinkAnchor
				onClick={() => scroll.scrollToTop()}
				className={classnames(
					className,
					'cursor-pointer bg-primary p-2.5 rounded'
				)}
				to="top"
			>
				<SvgIcon name={'arrowTop'} size={20} />
			</LinkAnchor>
		</div>
	);
};
