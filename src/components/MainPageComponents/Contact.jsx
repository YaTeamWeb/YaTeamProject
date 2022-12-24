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
		event.preventDefault();
		const xmlHttp = new XMLHttpRequest();
		xmlHttp.open('POST', 'http://34.159.168.235:5500/feedback', true);
		xmlHttp.send(new FormData(event.target));
		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState === 4) {
				if (xmlHttp.status === 200) {
					setShow(true);
					console.log('Succes');
					console.log(xmlHttp.status);
					setTimeout(() => setShow(false), 2000);
					event.target.reset();
				} else {
					console.log(xmlHttp.status);
					alert('Error');
				}
			}
		};
	};

	return (
		<section
			className="container py-16 px-[30px]"
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

			<div data-aos="zoom-in" data-aos-delay="0" data-aos-offset="300">
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b8ce5caeefc0863f905a7c7db4c4cea3a8d9e37252825f96627dd39152296e5&amp;source=constructor"
					width="100%"
					height="400"
					frameBorder="0"
				></iframe>
			</div>

			<div className="flex sm:flex-row flex-col sm:pl-[10px] p-0  sm:pt-5 sm:pr-5 sm:pb-5 gap-10">
				<ul
					className="flex flex-col items-start gap-[30px] py-[10px]"
					data-aos="fade-right"
					data-aos-delay="0"
					data-aos-offset="300"
				>
					<li className="flex flex-row gap-5 justify-center items-center">
						<div>
							<SvgIcon name={'location'} size={50} />
						</div>
						<div>
							<p className="font-semibold sm:text-[20px] lg:text-2xl text-4xl dark:text-light mb-[5px] font-Raleway duration-500">
								{contacts.items[0].title}
							</p>
							<p className="font-normal sm:text-[16px] xl:text-base text-[14px] text-gray-300 font-OpenSans">
								{contacts.items[0].description}
							</p>
						</div>
					</li>
					<li className="flex flex-row gap-5 justify-start items-center">
						<div>
							<SvgIcon name={'email'} size={50} />
						</div>
						<div>
							<p className="font-semibold sm:text-[20px] lg:text-2xl text-4xl dark:text-light mb-[5px] font-Raleway duration-500">
								{contacts.items[1].title}
							</p>
							<a
								href={'mailto:info@yateam.site'}
								className="font-normal sm:text-[16px] xl:text-base text-[14px] text-gray-300 hover:text-primary duration-300 font-OpenSans"
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
							<p className="font-semibold sm:text-[20px] lg:text-2xl text-4xl dark:text-light mb-[5px] font-Raleway duration-500">
								{contacts.items[2].title}
							</p>
							<a
								href={'tel:78005553535'}
								className="font-normal hover:text-primary duration-300 sm:text-[16px] xl:text-base  text-[14px] text-gray-300 font-OpenSans font-400"
							>
								{contacts.items[2].description}
							</a>
						</div>
					</li>
				</ul>
				<form
					className="p-0 sm:p-[10px] w-full flex flex-col gap-5"
					data-aos="fade-left"
					onSubmit={ControlForm}
					data-aos-delay="0"
					data-aos-offset="300"
				>
					<div className="grid grid-cols-2 gap-5">
						<input
							type="text"
							name="name"
							placeholder={contacts.form.name}
							required
							className="h-10 p-[10px] rounded-[5px] outline-none font-normal text-[12px] xs:text-[14px] font-OpenSans placeholder:text-gray-300
							border-solid border-2 border-border-input"
						></input>
						<input
							type="email"
							name="email"
							required
							placeholder={contacts.form.email}
							className="h-10 p-[10px] rounded-[5px] outline-none font-normal text-[12px] xs:text-[14px] font-OpenSans placeholder:text-gray-300
							border-solid border-2 border-border-input"
						></input>
						<input
							type="text"
							name="theme"
							required
							placeholder={contacts.form.theme}
							className="h-10 p-[10px] rounded-[5px] outline-none font-normal text-[12px] xs:text-[14px] font-OpenSans  placeholder:text-gray-300 col-span-2
							border-solid border-2 border-border-input"
						></input>
						<textarea
							name="message"
							placeholder={contacts.form.message}
							required
							className="h-[137px] resize-none p-[10px] rounded-[5px] outline-none font-normal text-[12px] xs:text-[14px] font-OpenSans placeholder:text-gray-300 col-span-2
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
							value={contacts.button}
							className="w-[231px] px-[25px] py-[10px] rounded-[4px] bg-primary  text-[14px] xs:text-[16px] hover:bg-hover duration-500 cursor-pointer"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};
