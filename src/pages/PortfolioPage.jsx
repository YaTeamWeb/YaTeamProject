import React, { useEffect, useRef, useState } from 'react';

import { Heading2, SupTitle, SvgIcon } from '../components/index.jsx';
import { ProjectCard } from '../components/UI/ProjectCard.jsx';
import { Button } from '../components/UI/Button.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectLangItems } from '../store/slices/lang/selectors.js';
import {
	selectItemsCount,
	selectItemsLimit,
	selectProjectCategory,
	selectProjectItems,
} from '../store/slices/projects/selectors.js';
import classnames from 'classnames';
import {
	setCategoryItems,
	setCurrentCategory,
	setItemsLimit,
	setSearchItems,
} from '../store/slices/projects/index.js';
import { debounce } from '../utils/Limitors.jsx';

const PortfolioPage = () => {
	const perLimitCount = 2;
	const { portfolio } = useSelector(selectLangItems);
	const dispatch = useDispatch();
	const items = useSelector(selectProjectItems);
	const currCategory = useSelector(selectProjectCategory);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const isMounted = useRef(true);
	const limit = useSelector(selectItemsLimit);
	const count = useSelector(selectItemsCount);
	const onSetCategory = (id) => {
		dispatch(setCurrentCategory(id));
		dispatch(setCategoryItems(id));
		dispatch(setItemsLimit(perLimitCount));
		dispatch(setSearchItems(value));
	};
	const onChangeSearch = debounce((v) => {
		dispatch(setSearchItems(v));
	}, 500);

	const onClickMore = () => {
		dispatch(setItemsLimit(limit + perLimitCount));
		dispatch(setSearchItems(value));
	};
	useEffect(() => {
		onChangeSearch(value);
		if (isMounted.current === true) {
			window.scrollTo(0, 0);
			isMounted.current = false;
		}
		return () => {
			isMounted.current = true;
		};
	}, [value]);
	return (
		<>
			<div className="container pt-[124px] overflow-hidden">
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
					className="ml-2"
				>
					<SupTitle>{portfolio.suptitle}</SupTitle>
					<Heading2 className={'mb-10 dark:text-light duration-500'}>
						{portfolio.title}
					</Heading2>
				</div>
				<form
					onSubmit={(event) => event.preventDefault()}
					className={
						'h-[42px] flex items-center justify-center relative w-full mb-10'
					}
				>
					<div
						className={classnames(
							'absolute top-0  duration-500 z-10',
							open ? 'translate-x-0 left-0' : 'left-[50%] translate-x-[-50%]'
						)}
					>
						<button
							onClick={() => setOpen(true)}
							className={classnames(
								'group h-[42px] px-2.5 border border-primary rounded-lg ',
								open
									? 'border-none cursor-auto	relative z-50'
									: 'hover:bg-primary duration-300'
							)}
						>
							<SvgIcon
								className={classnames(
									'fill-dark ',
									open
										? ''
										: 'group-hover:fill-light dark:group-hover:fill-dark duration-300 dark:fill-light'
								)}
								name={'search'}
								size={21}
							/>
						</button>
					</div>
					<input
						type="text"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						autoFocus={true}
						className={`outline-none ${
							open ? 'h-[42px] w-full relative ' : 'w-0 border-none invisible'
						}  border border-primary rounded-lg font-OpenSans font-semibold placeholder:text-gray-300 duration-500 px-[40px]`}
						placeholder={portfolio.search}
					/>
					{value && (
						<button
							onClick={() => setValue('')}
							className={'absolute right-0 top-0 h-[42px] px-2.5'}
						>
							<SvgIcon size={20} name={'close'} />
						</button>
					)}
				</form>

				<div className={'flex items-center justify-center mb-10'}>
					{portfolio.categories.map((el, id) => (
						<button
							key={el + id}
							onClick={() => onSetCategory(id)}
							className={classnames(
								'mr-1.5 py-2 px-4 hover:bg-primary duration-300 rounded font-OpenSans font-semibold hover:text-light dark:text-light dark:hover:text-dark',
								currCategory === id
									? 'text-light dark:text-dark bg-primary'
									: ''
							)}
						>
							{el}
						</button>
					))}
				</div>

				<ul className="grid gap-y-10 gap-x-5 grid-cols-12 mb-8">
					{items.map((item) => (
						<li
							key={item.id}
							className="col-span-6"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay="0"
							data-aos-offset="400"
						>
							<ProjectCard
								imageAlt={item.title}
								project={item.images[0].src}
								imageFigcaption={item.title}
								projectId={item.id}
							/>
						</li>
					))}
				</ul>
				{limit < count && (
					<div
						className="flex justify-center items-center mt-10"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="0"
						data-aos-offset="100"
					>
						<Button
							onClick={onClickMore}
							className="text-dark hover:text-light dark:text-light duration-500 mb-[120px]"
						>
							{portfolio.portfolioPageButton}
						</Button>
					</div>
				)}
			</div>
		</>
	);
};

export default PortfolioPage;
