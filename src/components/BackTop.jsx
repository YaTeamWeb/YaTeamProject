import React from 'react';
import * as Scroll from 'react-scroll';
import { SvgIcon } from './UI/SvgIcon';
import classnames from 'classnames';

export const BackTop = ({ className }) => {
	const LinkAnchor = Scroll.Link;
	const scroll = Scroll.animateScroll;
	return (
		<LinkAnchor
			onClick={() => scroll.scrollToTop()}
			className={classnames(className, 'cursor-pointer bg-primary p-4 rounded')}
			to="top"
		>
			<SvgIcon name={'arrowTop'} size={20} />
		</LinkAnchor>
	);
};