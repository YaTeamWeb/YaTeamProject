import React from 'react';
import Sprites from '../../../assets/images/sprite.svg';

export const SvgIcon = ({ name, color, size, className }) => (
	<svg className={className} fill={color} width={size} height={size}>
		<use href={`${Sprites}#sprite-${name}`} />
	</svg>
);

// Настройки по умолчанию
SvgIcon.defaultProps = {
	size: 30,
	color: 'black',
	className: '',
};
