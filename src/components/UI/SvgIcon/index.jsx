import React from 'react';
import Sprites from '../../../assets/images/sprite.svg';

export const SvgIcon = ({ name, size, className }) => (
	<svg className={className} width={size} height={size}>
		<use href={`${Sprites}#sprite-${name}`} />
	</svg>
);

// Настройки по умолчанию
SvgIcon.defaultProps = {
	size: 30,
	className: 'fill-dark',
};
