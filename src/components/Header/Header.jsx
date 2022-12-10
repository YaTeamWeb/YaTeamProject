import React from 'react';

import { SvgIcon } from '../UI/index.jsx';
import logo from '../../assets/images/MainPageImages/logo.png';

import classnames from 'classnames';

import styles from './styles.module.css';

export const Header = () => {
	return (
		<header
			className={
				'fixed top-0 left-0 flex items-center justify-between w-full bg-black text-light px-8 h-16'
			}
		>
			<a href='/'><img className={classnames(styles.Logo)} src={logo}/></a>
			<nav className={'grid grid-cols-3 gap-2 grow'}>
				
				<section>
					<a href={'#hero'} className={'hover:text-primary w-min ' + classnames(styles.NavigationLink)}>
						Домой
					</a>
				</section>
				<section>
					<a href={'#about'} className={'hover:text-primary ' + classnames(styles.NavigationLink)}>
						О нас
					</a>
				</section>
				<section>

					<a href={'#'} className={'hover:text-primary ' + classnames(styles.NavigationLink)}>
						Сервисы
					</a>
				</section>
			</nav>
			<div className={'grow grid justify-items-end'}>
				<button>Переключить тему</button>
				<button>Сменить язык</button>
			</div>
		</header>
	);
};
