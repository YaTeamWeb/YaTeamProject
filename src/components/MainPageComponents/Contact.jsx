import React, { useState } from 'react';
import { SvgIcon } from '../UI/SvgIcon.jsx';
import { Heading2 } from '../UI/Heading2.jsx';
import { SupTitle } from '../UI/SupTitle.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../store/slices/lang/selectors.js';
import { SuccessModal } from '../UI/SuccessModal';

export const Contact = () => {
	const { contacts } = useSelector(selectLangItems);

	const [show, setShow] = useState(false);

	const ControlForm = (event) => {
		const xmlHttp = new XMLHttpRequest();
		xmlHttp.open('POST', 'http://localhost:5500/feedback', false);
		xmlHttp.send(new FormData(event.target));
		event.target.reset();
		console.log(xmlHttp.status);
		setShow(true);
		setTimeout(() => setShow(false), 2000);
		event.preventDefault();
	};

	return (
		<section
			className="container"
			data-aos="fade-up"
			data-aos-delay="0"
			id="contacts"
		>
			<SuccessModal show={show} text={'Сообщение отправлено'} />
			<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
				<SupTitle>{contacts.suptitle}</SupTitle>

				<Heading2 className="mb-10 dark:text-light duration-500">
					{contacts.title}
				</Heading2>
			</div>

			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b8ce5caeefc0863f905a7c7db4c4cea3a8d9e37252825f96627dd39152296e5&amp;source=constructor"
				width="100%"
				height="400"
				frameBorder="0"
				data-aos="zoom-in"
				data-aos-delay="0"
				data-aos-offset="500"
			></iframe>

			<div className="flex flex-row pl-[10px] pt-5 pr-5 pb-5 gap-10">
				<ul
					className="flex flex-col items-start gap-[30px] min-w-[334px] py-[10px]"
					data-aos="fade-right"
					data-aos-delay="0"
					data-aos-offset="300"
				>
					<li className="flex flex-row gap-5 justify-center items-center">
						<div>
							<SvgIcon name={'location'} size={50} />
						</div>
						<div>
							<p className="font-semibold text-2xl dark:text-light mb-[5px] font-Raleway">
								{contacts.items[0].title}
							</p>
							<p className="font-normal text-base text-gray-300 font-OpenSans">
								{contacts.items[0].description}
							</p>
						</div>
					</li>
					<li className="flex flex-row gap-5 justify-start items-center">
						<div>
							<SvgIcon name={'email'} size={50} />
						</div>
						<div>
							<p className="font-semibold text-2xl dark:text-light mb-[5px] font-Raleway">
								{contacts.items[1].title}
							</p>
							<a
								href={'mailto:info@yateam.site'}
								className="font-normal text-base text-gray-300 hover:text-primary duration-300 font-OpenSans"
							>
								{contacts.items[1].description}
							</a>
						</div>
					</li>
					<li className="flex flex-row gap-5 justify-start items-center">
						<div>
							<SvgIcon name={'phone'} size={50} />
						</div>
						<div>
							<p className="font-semibold text-2xl dark:text-light mb-[5px] font-Raleway">
								{contacts.items[2].title}
							</p>
							<a
								href={'tel:78005553535'}
								className="font-normal hover:text-primary duration-300 text-base text-gray-300 font-OpenSans font-400"
							>
								{contacts.items[2].description}
							</a>
						</div>
					</li>
				</ul>
				<form
					className="p-[10px] w-full flex flex-col gap-5"
					data-aos="fade-left"
					onSubmit={ControlForm}
					data-aos-delay="0"
					data-aos-offset="300"
				>
					<div className="grid grid-cols-2 gap-5">
						<input
							type="text"
							name="name"
							placeholder="Ваше имя"
							required
							className="h-10 p-[10px] rounded-[5px] outline-none font-normal text-sm font-OpenSans placeholder:text-gray-300
							border-solid border-2 border-border-input"
						></input>
						<input
							type="email"
							name="email"
							required
							placeholder="Ваш email"
							className="h-10 p-[10px] rounded-[5px] outline-none font-normal text-sm font-OpenSans placeholder:text-gray-300
							border-solid border-2 border-border-input"
						></input>
						<input
							type="text"
							name="theme"
							required
							placeholder="Тема"
							className="h-10 p-[10px] rounded-[5px] outline-none font-normal text-sm font-OpenSans  placeholder:text-gray-300 col-span-2
							border-solid border-2 border-border-input"
						></input>
						<textarea
							name="message"
							placeholder="Сообщение"
							required
							className="h-[137px] resize-none p-[10px] rounded-[5px] outline-none font-normal text-sm font-OpenSans placeholder:text-gray-300 col-span-2
							border-solid border-2 border-border-input"
						></textarea>
					</div>
					<div
						className="self-center"
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-offset="100"
					>
						<input
							type="submit"
							value="Отправить Сообщение"
							className="w-[231px] px-[25px] py-[10px] rounded bg-primary hover:bg-hover duration-500 cursor-pointer"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};
