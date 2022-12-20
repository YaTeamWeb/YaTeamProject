import React from 'react';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body3 } from '../UI/Body3.jsx';
import { Button } from '../UI/Button.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import * as Scroll from 'react-scroll';

export const CTA = () => {
	const { contactToAs } = useSelector(selectLangItems);
	const LinkAnchor = Scroll.Link;

	return (
		<section
			className={
				'bg-dark bg-cta w-full h-[271px] bg-fixed bg-cover bg-no-repeat '
			}
			id="cta"
		>
			<div
				className="flex flex-col gap-[20px] py-[60px] items-center justify-center"
				data-aos="zoom-in"
				data-aos-delay="0"
				data-aos-offset="500"
			>
				<Heading3 className="text-light">{contactToAs.title}</Heading3>

				<Body3 className="text-light text-center max-w-[960px]">
					{contactToAs.description}
				</Body3>
				<LinkAnchor to={'contacts'} smooth={true} duration={1000}>
					<Button className="text-light">{contactToAs.button}</Button>
				</LinkAnchor>
			</div>
		</section>
	);
};
