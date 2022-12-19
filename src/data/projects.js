import lang from './lang.json';
import project_1 from '../assets/images/MainPageImages/portfolio-1.png';
import project_2 from '../assets/images/MainPageImages/portfolio-2.jpg';
import project_3 from '../assets/images/MainPageImages/portfolio-3.png';
import project_4 from '../assets/images/MainPageImages/portfolio-4.jpg';
export const projects = [
	{
		id: '1',
		category: 1,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[0], lang: el.lang };
			}),
		],
		image: project_1,
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
	},
	{
		id: '2',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[1], lang: el.lang };
			}),
		],
		image: project_2,
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
	},
	{
		id: '3',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[2], lang: el.lang };
			}),
		],
		image: project_3,
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
	},
	{
		id: '4',
		category: 2,
		translations: [
			...lang.map((el) => {
				return { ...el.portfolio.cards[3], lang: el.lang };
			}),
		],
		image: project_4,
		languages: ['HTML', 'CSS', 'React', 'Redux Toolkit'],
	},
];
