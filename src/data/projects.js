import lang from './lang.json';
import project_1 from '../assets/images/ProjectsImages/portfolio-1.png';
import project_2_1 from '../assets/images/ProjectsImages/portfolio-2/1.jpg';
import project_2_2 from '../assets/images/ProjectsImages/portfolio-2/2.jpg';
import project_2_3 from '../assets/images/ProjectsImages/portfolio-2/3.jpg';
import project_2_4 from '../assets/images/ProjectsImages/portfolio-2/4.jpg';
import project_2_5 from '../assets/images/ProjectsImages/portfolio-2/5.jpg';
import project_3_1 from '../assets/images/ProjectsImages/portfolio-3/1.png';
import project_3_2 from '../assets/images/ProjectsImages/portfolio-3/2.jpg';
import project_3_3 from '../assets/images/ProjectsImages/portfolio-3/3.jpg';
import project_3_4 from '../assets/images/ProjectsImages/portfolio-3/4.jpg';
import project_4 from '../assets/images/ProjectsImages/portfolio-4.jpg';
import project_5_1 from '../assets/images/ProjectsImages/portfolio-5/1.jpg';
import project_5_2 from '../assets/images/ProjectsImages/portfolio-5/2.jpg';
import project_5_3 from '../assets/images/ProjectsImages/portfolio-5/3.jpg';
import project_5_4 from '../assets/images/ProjectsImages/portfolio-5/4.jpg';
import project_5_5 from '../assets/images/ProjectsImages/portfolio-5/5.jpg';
import project_5_6 from '../assets/images/ProjectsImages/portfolio-5/6.jpg';
import project_6_1 from '../assets/images/ProjectsImages/portfolio-6/1.jpg';
import project_6_2 from '../assets/images/ProjectsImages/portfolio-6/2.jpg';
import project_6_3 from '../assets/images/ProjectsImages/portfolio-6/3.jpg';
import project_6_4 from '../assets/images/ProjectsImages/portfolio-6/4.jpg';
import project_6_5 from '../assets/images/ProjectsImages/portfolio-6/5.jpg';
import project_6_6 from '../assets/images/ProjectsImages/portfolio-6/6.jpg';
import project_7_1 from '../assets/images/ProjectsImages/portfolio-7/1.jpg';
import project_7_2 from '../assets/images/ProjectsImages/portfolio-7/2.jpg';
import project_7_3 from '../assets/images/ProjectsImages/portfolio-7/3.jpg';
import project_8_1 from '../assets/images/ProjectsImages/portfolio-8/1.jpg';
import project_8_2 from '../assets/images/ProjectsImages/portfolio-8/2.jpg';
import project_8_3 from '../assets/images/ProjectsImages/portfolio-8/3.jpg';
import project_9_1 from '../assets/images/ProjectsImages/portfolio-9/1.jpg';
import project_9_2 from '../assets/images/ProjectsImages/portfolio-9/2.jpg';
import project_9_3 from '../assets/images/ProjectsImages/portfolio-9/3.jpg';
import project_9_4 from '../assets/images/ProjectsImages/portfolio-9/4.jpg';
import project_10_1 from '../assets/images/ProjectsImages/portfolio-10/1.jpg';
import project_10_2 from '../assets/images/ProjectsImages/portfolio-10/2.jpg';
import project_10_3 from '../assets/images/ProjectsImages/portfolio-10/3.jpg';
import project_10_4 from '../assets/images/ProjectsImages/portfolio-10/4.jpg';
import project_10_5 from '../assets/images/ProjectsImages/portfolio-10/5.jpg';
import project_11_1 from '../assets/images/ProjectsImages/portfolio-11/1.jpg';
import project_11_2 from '../assets/images/ProjectsImages/portfolio-11/2.jpg';
import project_11_3 from '../assets/images/ProjectsImages/portfolio-11/3.jpg';
import project_11_4 from '../assets/images/ProjectsImages/portfolio-11/4.jpg';
import project_11_5 from '../assets/images/ProjectsImages/portfolio-11/5.jpg';

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
		languages: ['HTML', 'CSS', 'Javascript', 'React', 'Redux Toolkit'],
		createdDate: '10.11.2022',
		link: 'https://renat2006.github.io/intensive_react_homework/',
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
			{ src: project_2_1 },
			{ src: project_2_2 },
			{ src: project_2_3 },
			{ src: project_2_4 },
			{ src: project_2_5 },
		],
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
		createdDate: '25.09.2022',
		link: 'https://nikdimer.github.io/',
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
			{ src: project_3_1 },
			{ src: project_3_2 },
			{ src: project_3_3 },
			{ src: project_3_4 },
		],
		languages: ['HTML', 'CSS', 'Javascript', 'React', 'Redux Toolkit'],
		createdDate: '26.09.2022',
		link: 'https://w3breactor.github.io/Yandex-Task/',
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
		category: 3,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[4], lang: el.lang };
			}),
		],
		images: [
			{ src: project_5_1 },
			{ src: project_5_2 },
			{ src: project_5_3 },
			{ src: project_5_4 },
			{ src: project_5_5 },
			{ src: project_5_6 },
		],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '21.07.2022',
		link: 'https://w3breactor.github.io/createX/',
	},
	{
		id: '6',
		category: 1,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[5], lang: el.lang };
			}),
		],
		images: [
			{ src: project_6_1 },
			{ src: project_6_2 },
			{ src: project_6_3 },
			{ src: project_6_4 },
			{ src: project_6_5 },
			{ src: project_6_6 },
		],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '17.06.2022',
		link: 'https://w3breactor.github.io/Tour/',
	},
	{
		id: '7',
		category: 1,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[6], lang: el.lang };
			}),
		],
		images: [{ src: project_7_1 }, { src: project_7_2 }, { src: project_7_3 }],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '16.06.2022',
		link: 'https://w3breactor.github.io/Shopka/',
	},
	{
		id: '8',
		category: 3,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[7], lang: el.lang };
			}),
		],
		images: [{ src: project_8_1 }, { src: project_8_2 }, { src: project_8_3 }],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '08.06.2022',
		link: 'https://w3breactor.github.io/Konstruct/',
	},
	{
		id: '9',
		category: 1,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[8], lang: el.lang };
			}),
		],
		images: [
			{ src: project_9_1 },
			{ src: project_9_2 },
			{ src: project_9_3 },
			{ src: project_9_4 },
		],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '30.05.2022',
		link: 'https://w3breactor.github.io/Moonriver/',
	},
	{
		id: '10',
		category: 1,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[9], lang: el.lang };
			}),
		],
		images: [
			{ src: project_10_1 },
			{ src: project_10_2 },
			{ src: project_10_3 },
			{ src: project_10_4 },
			{ src: project_10_5 },
		],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '20.05.2022',
		link: 'https://w3breactor.github.io/Coffee/',
	},
	{
		id: '11',
		category: 3,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[10], lang: el.lang };
			}),
		],
		images: [
			{ src: project_11_1 },
			{ src: project_11_2 },
			{ src: project_11_3 },
			{ src: project_11_4 },
			{ src: project_11_5 },
		],
		languages: ['HTML', 'CSS', 'Javascript', 'Gulp'],
		createdDate: '14.05.2022',
		link: 'https://w3breactor.github.io/Agency/',
	},
];
