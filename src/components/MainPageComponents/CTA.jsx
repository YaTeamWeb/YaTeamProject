import React from 'react';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body3 } from '../UI/Body3.jsx';
import { Button } from '../UI/Button.jsx';

export const CTA = () => {
	return (
		<section
			className={
				'bg-cta w-full h-[271px] bg-fixed bg-cover bg-no-repeat '
			}
			id="cta"
			
		>	
			<div className='flex flex-col gap-[20px] py-[60px] items-center justify-center' data-aos="zoom-in" data-aos-delay='200' data-aos-offset='800'>
			<Heading3 className="text-light">Свяжитесь с нами!</Heading3>

			<Body3 className="text-light text-center max-w-[960px]">
				Не нужно ждать — нужно действовать! Закажи разработку сайта прямо сейчас
				и не переживай об удобстве клиентов.
			</Body3>

			<Button className="text-light">Связаться</Button>
			</div>
		</section>
	);
};
