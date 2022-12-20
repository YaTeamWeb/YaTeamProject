import lang from './lang.json';
import project_1 from '../assets/images/ProjectsImages/portfolio-1.png';
import project_2 from '../assets/images/ProjectsImages/portfolio-2.jpg';
import project_3 from '../assets/images/ProjectsImages/portfolio-3.png';
import project_4 from '../assets/images/ProjectsImages/portfolio-4.jpg';

export const projects = [
	{
		id: '1',
		category: 1,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[0], lang: el.lang };
			}),
		],
		images: [
			{ src: project_1 },
			{ src: project_1 },
			{ src: project_1 },
			{ src: project_1 },
		],
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
		createdDate: '20.12.2022',
		link: 'www.yateam.site',
	},
	{
		id: '2',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[1], lang: el.lang };
			}),
		],
		images: [
			{ src: project_2 },
			{ src: project_2 },
			{ src: project_2 },
			{ src: project_2 },
		],
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
		createdDate: '20.12.2022',
		link: 'www.yateam.site',
	},
	{
		id: '3',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[2], lang: el.lang };
			}),
		],
		images: [
			{ src: project_3 },
			{ src: project_3 },
			{ src: project_3 },
			{ src: project_3 },
		],
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
		createdDate: '20.12.2022',
		link: 'www.yateam.site',
	},
	{
		id: '4',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[3], lang: el.lang };
			}),
		],
		images: [
			{ src: project_4 },
			{ src: project_4 },
			{ src: project_4 },
			{ src: project_4 },
		],
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
		createdDate: '20.12.2022',
		link: 'www.yateam.site',
	},
	{
		id: '5',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[4], lang: el.lang };
			}),
		],
		images: [
			{ src: project_3 },
			{ src: project_3 },
			{ src: project_3 },
			{ src: project_3 },
		],
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
		createdDate: '20.12.2022',
		link: 'www.yateam.site',
	},
];
