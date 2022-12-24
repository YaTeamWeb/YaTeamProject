[![Netlify Status](https://api.netlify.com/api/v1/badges/8758d867-e311-4c78-8e61-1e8674bf6ecc/deploy-status)](https://app.netlify.com/sites/tiny-moonbeam-f33e03/deploys)

### YaTeam - Web Studio from Saratov
<h1 align='center'>Документация / Documentation</h1>
<h2>Основная Информация</h2>
<ul>
    <li><h3>Кто мы? Мы Веб-Студия из города Саратов. Наша задача - воплотить вашу мечту в реальность. А именно сделать сайт при помощи нашей креативности и ваших идей. </h3></li>
    <li><h3>Почему вы должны выбрать именно нас? Скорость, качество, дизайн - это то, что мы умеем. У нас нет халтуры и лени. В каждый проект мы вложимся по максимуму.</h3></li>
    <li><h3>Ссылка на сайт нашей Веб-Студии Netlify: <a href='https://yateam.site/'>https://yateam.site/</a></h3></li>
</ul>

<h2>Main Information</h2>
<ul>
    <li><h3>Who are we? We are a Web Studio from the city of Saratov. Our task is to make your dream come true. Namely, to make a website with the help of our creativity and your ideas. </h3></li>
    <li><h3>Why should you choose us? Speed, quality, design - this is what we can do. We don't have hack work and laziness. We will invest to the maximum in each project.</h3></li>
    <li><h3>Link to the website of our Netlify Web Studio: <a href='https://yateam.site/'>https://yateam.site/</a></h3></li>
</ul>

<hr/>

<h2>(RU) Для разработчиков сайта / For website developers </h2>
<h3>Структура</h3>
<ul>
    <li><h4>.eslintrc.json - Линтер js/jsx</h4></li>
    <li><h4>.prettierrc.json - Форматирование кода по линтеру</h4></li>
    <li><h4>index.html - Корневой html-документ</h4></li>
    <li><h4>tailwind.config.cjs - Конфигурирование Tailwind</h4></li>
    <li><h4>vite.config.js - Сборщик проекта Vite</h4></li>
    <li><h4>postcss.config.cjs - Конфигурирование Postcss (используется вместе с Tailwind) </h4></li>
    <li><h4>Папка src - Хранение файлов для разработки</h4>
        <ul>
            <li><h4>App.jsx - Корневой jsx-файл</h4>
            <li><h4>Папка assets - Хранение шрифтов, картинок, стилей</h4>
                <ul>
                    <li><h4>Папка fonts - Хранение шрифтов</h4></li>
                    <li><h4>Папка images - Хранение картинок</h4>
                        <ul>
                            <li><h4>Папка svg - Хранение svg-спрайтов</h4></li>
                            <li><h4>sprite.svg - Svg-спрайты</h4></li>
                        </ul>
                    </li>
                    <li><h4>Папка styles - Хранение основных стилей (index.scss и настроек шрифтов (_fonts.scss) </h4> </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li><h4>Папка components - UI-Компоненты</h4>
                <ul>
                    <li><h4>Папка UI - Компоненты, которые будут повторяться (button, p, h1, h2, h3, h4...)</h4></li>
                    <li><h4>index.jsx - Re-Export'ы</h4></li>
                </ul>
            </li>
            <li><h4>Папка data - Хранение mock данных</h4></li>
            <li><h4>Папка pages - Компоненты страниц</h4></li>
            <li><h4>Папка store - Хранение BLL-Данных (State-Менеджер)</h4>
                <ul>
                    <li><h4>Папка slices - Слайсы</h4></li>
                    <li><h4>index.js - Конфигурирование</h4></li>
                </ul>
            </li>
            <li><h4>Папка utils - Файлы, которые оправдывают своё существование</h4>
        </ul>
    </li>
</ul>

<hr/>
<h2>Технологии, которые используются в проекте:</h2>
<ul>
    <li><h3>React - <a href='https://reactjs.org/'>https://reactjs.org/</a></h3></li>
    <li><h3>React-Router-Dom - <a href='https://reactrouter.com/en/main'>https://reactrouter.com/en/main</a></h3></li>
    <li><h3>Redux Toolkit - <a href='https://redux-toolkit.js.org/'>https://redux-toolkit.js.org/</a></h3></li>
    <li><h3>React-Redux - <a href='https://react-redux.js.org/'>https://react-redux.js.org/</a></h3></li>
    <li><h3>PureCounter - <a href='https://github.com/srexi/purecounterjs'>https://github.com/srexi/purecounterjs</a></h3></li>
    <li><h3>Swiper - <a href='https://swiperjs.com/react'>https://swiperjs.com/react</a></h3></li>
    <li><h3>React-Scroll - <a href='https://www.npmjs.com/package/react-scroll'>https://www.npmjs.com/package/react-scroll</a></h3></li>
    <li><h3>Aos - <a href='https://michalsnik.github.io/aos/'>https://michalsnik.github.io/aos/</a></h3></li>
    <li><h3>Classnames - <a href='https://www.npmjs.com/package/classnames'>https://www.npmjs.com/package/classnames</a></h3></li>
    <li><h3>AutoPrefixer - <a href='https://autoprefixer.github.io/ru/'>https://autoprefixer.github.io/ru/</a></h3></li>
    <li><h3>Tailwind - <a href='https://tailwindcss.com/'>https://tailwindcss.com/</a></h3></li>
    <li><h3>Sass - <a href='https://sass-scss.ru/'>https://sass-scss.ru/</a></h3></li>
    <li><h3>Eslint - <a href='https://eslint.org/'>https://eslint.org/</a></h3></li>
    <li><h3>Prettier - <a href='https://prettier.io/'>https://prettier.io/</a></h3></li>
</ul>

<hr/>
<h2>Запуск скриптов</h2>
<ul>
    <li><h3>npm run dev - Запуск локального проекта</h3></li>
    <li><h3>npm run build - Сборка проекта</h3></li>
    <li><h3>npm run preview - Запуск собранного проекта</h3></li>
    <li><h3>npm run lint - Линтирование кода</h3></li>
    <li><h3>npm run deploy - Линтирование кода + Сборка проекта</h3></li>
</ul>
