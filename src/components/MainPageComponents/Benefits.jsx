import React from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import work from '../../assets/images/MainPageImages/benefits.png';
import { SvgIcon } from '../UI/SvgIcon';
import { Heading3 } from '../UI/Heading3.jsx';
import { Body2 } from '../UI/Body2.jsx';

import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
export const Benefits = () => {
	const { benefits } = useSelector(selectLangItems);

	return (
		<section className="container py-16">
			<div data-aos="fade-up" data-aos-offset='450' data-aos-delay='500'>
			<SupTitle>{benefits.suptitle}</SupTitle>
			<Heading2 className="mb-10 dark:text-light duration-500">
				{benefits.title}
			</Heading2>
			</div>
			<div className="flex justify-between" data-aos="fade-up" data-aos-delay="100" data-aos-offset="350">
				<img src={work} alt="Печатание на клавиатуре" data-aos="fade-right" data-aos-delay="700" data-aos-offset="350"/>
				<ul className="ml-7 max-w-[394px]">
					<li className="flex mb-10" data-aos="fade-left" data-aos-delay="100" data-aos-offset="350">
						<div><SvgIcon size={51} name="clock" className="fill-primary" /></div>
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">
								{benefits.items[0].title}
							</Heading3>
							<Body2>{benefits.items[0].description}</Body2>
						</div>
					</li>
					<li className="flex mb-10" data-aos="fade-left" data-aos-delay="100" data-aos-offset="350">
						<div><SvgIcon size={51} name="copy" className="fill-primary" /></div>
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">
								{benefits.items[1].title}
							</Heading3>
							<Body2>{benefits.items[1].description}</Body2>
						</div>
					</li>
					<li className="flex mb-10" data-aos="fade-left" data-aos-delay="100" data-aos-offset="350">
						<div><SvgIcon
							size={48}
							name="trophy"
							className="fill-primary w-[51px]"
						/></div>
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">
								{benefits.items[2].title}
							</Heading3>
							<Body2>{benefits.items[2].description}</Body2>
						</div>
					</li>
					<li className="flex" data-aos="fade-left" data-aos-delay="100" data-aos-offset="350">
						<div><SvgIcon
							size={57}
							name="alchemy"
							className="fill-primary w-[51px]"
						/></div>
						<div className="ml-5 flex flex-col">
							<Heading3 className="mb-2.5 dark:text-light duration-500">
								{benefits.items[3].title}
							</Heading3>
							<Body2>{benefits.items[3].description}</Body2>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
