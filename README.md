# Gulp-pack: Сборка Gulp + Webpack для фронтенд-разработки

## Возможности

-   Компонентый подход к работе: структура файлов компонентов реализована по БЭМ
-   Автоматические создание директории компонента с файлами.
-   Использование Html-препроцессора Pug
-   Использование Css-препроцессора Scss
-   Использование Webpack для сборки javascript-модулей
-   Сборка иконок в спрайты: svg, png
-   Использование полифила Babel для поддержки старых браузеров при использовании современного синтаксиса ES6 в javaScript
-   Включен фреймворк Bootstrap последней версии по умолчанию
-   Проверка js-кода на наличие ошибок линтером Eslint
-   Автоматическое исправление ошибок в js-коде линтером Eslint
-   Конвертация изображений в современный веб-формат webp
-   Автоматическая генерация фавиконок для разных устройств с файлом манифеста приложения
-   Стартовый шаблон для быстрого начала верстки

## Установка

Для работы сборки вам понадобится скачать и установить [node.js](https://nodejs.org).

Также установите систему контроля версии [Git](https://git-scm.com/downloads). Для работы сборки Git не обязателен, но для удобства установки и дальнейшей разработки лучше все же установить.

> Все команды пишутся от корня проекта!

После того как все исходники будут скачаны из удаленного репозитория, введите в консоли команду `npm install` для установки проекта. Все зависимости установятся автоматически.

Во избежании всевозможных ошибок вам необходимо установить gulp глобально, но это в том случае если вы этого еще не делали в других проектах.

`npm i gulp -g`

Эта процедура делается один раз и в следующий раз, когда будете разворачивать новый проект повторять эту команду не потребуется.

## Запуск и основные команды

Когда все зависимости были установлены для запуска проекта достаточно в консоли написать команду <code>npm run start</code>. Если нет ошибок, то в браузере по умолчанию откроется домен http://localhost:3000 со стартовым шаблоном для верстки.

### Дополнительные команды

В файле package.json в секции `scripts` вы найдете команды для запуска проекта:

-   Start - для запуска проекта в режиме разработки (development)
-   Minify - минимизация файлов Html, Css, Js
-   MinifyHtml - минимизация файлов Html
-   MinifyJs - минимизация файлов Js
-   MinifyCss - минимизация файлов Css
-   StartFtp - запуск проекта в режиме разработки с копированием файлов из папки dist (кроме файлов html) в директорию ftp.
-   Ftp - запуска таска (задачи) Ftp. Необходимо, если по той или иной причине файлы не скопировались в директорию Ftp.
-   lint:scripts - команда для показа ошибок в файлах js в папке src.
-   lint:scripts --fix - команда для показа и автоматического исправления (возможного исправления) ошибок в файлах js в папке src.
-   zip - создание архива с исходниками проекта + папка dist.
-   clean - удаление папки dist

Для запуска команды в консоли пишем "npm run имя_команды", например

`npm run lint:scripts`

## Структура файлов проекта

```
gulp-pack
|— dist
|— gulp
|— src
|    |— base
|    |    |— data
|    |    |    |— data.json
|    |    |— js
|    |    |    |— index.js
|    |    |— pug
|    |    |    |— base.pug
|    |    |    |— head.pug
|    |    |— scss
|    |    |    |— _base.scss
|    |    |    |— _fonts.scss
|    |    |    |— _png-icons.scss
|    |    |    |— _typography.scss
|    |    |    |— _variables.scss
|    |    |    |— main.scss
|    |— layouts
|    |    |— ***
|    |    |— ***
|    |    |— ***
|    |    |— _layouts.scss
|    |    |— layouts.js
|    |— components
|    |    |— ***
|    |    |— ***
|    |    |— ***
|    |    |— _components.scss
|    |    |— components.js
|    |— elenments
|    |    |— ***
|    |    |— ***
|    |    |— ***
|    |    |— _elements.scss
|    |    |— elements.js
|    |— images
|    |    |— icons
|    |    |    |— png
|    |    |    |— svg
|    |    |— favicon-lg.png
|    |    |— favicon-sm.png
|    |— mixins
|    |    |— pug
|    |    |— scss
|    |— resources
|    |    |— form-submit
|    |— vendor
|    |    |— bootstrap
|    |    |— ***
|    |    |— ***
|    |    |— ***
|    |    |— _vendor.scss
|    |    |— vendor.js
|    index.pug
| package.json
| gulpfile.js
| webpack.config.js
| .babelrc
| .bemrc.js
| .eslintrc
| .eslintignore
| .gitignore
```

-   dist — в данную папку генерируются файлы из исходников: html, css, img. То есть эта конечная папка с версткой, еще ее называют production.
-   gulp — здесь лежат все таски сборщика gulp
-   src — папка с исходниками проекта
-   package.json — файл с настройками проекта с указанием списка зависимостей для установки
-   gulpfile.js — файл настроек для сборщика Gulp
-   webpack.config.js — файл настроек сборщика Webpack
-   .babelrc — настройки Babel
-   .bemrc.js — настройки инструмента bem-tools-create
-   .eslintrc — настройки правил Eslint
-   .eslintignore — список исключений для Eslint
-   .gitignore — список исключений для Git

## Работа со сборкой

### Хранилище текстовых данных (импровизированная база данных)

Чтобы не захламлять код pug-файлов текстовыми данными желательно вынести все текста в отдельный файл. Под текстами подразумевается, например, текст статьи или какие либо списки, или те же пункты меню в шапке, в подвале, в сайдбаре и т.д. Все это ведет к удобочитаемости кода, да и править ошибки будет проще, когда все в одном месте.

Все текста Вы можете хранить в файле data.json (src/base/data/data.json). Html-разметка допустима, но для ее вывода в pug необходимо использовать интерполяцию вывода `!=`. Например, `p!= variable`. Файл data.json по умолчанию уже подключен во всех файлах pug, так что дополнительных подключений делать не нужно.

В качестве примера пункты главного меню вынесены как раз в данный файл.

### Компонентный подход

Каждый блок, который необходимо сверстать создается в качестве компонента, элемента или лейаута.
Все компоненты лежат в директории `src/components`.
Все элементы лежат в директории `src/elements`.
Все лейауты лежат в директории `src/layouts`.
Они включает в себя 2 типа файла - .pug, .scss и .js если требуеться. Название имен файлов совпадает с названием сущностей. Все это сделано для легкого переиспользования. Например, компоненты при таком подходе легко копируются из проекта в проект.

Вот пример создания структуры компонента header с его файлами.

```
|— header
|   |— header.pug
|   |— _header.scss
|   |— header.js*
| ***
| ***
```

Файлы pug подключаются в том файле, где это необходимо.
Файлы scss

-   компонентов подключаются в файле \_components.scss, который лежит в директории `src/components/`.
-   элементов подключаются в файле \_elements.scss, который лежит в директории `src/elements/`.
-   лейаутов подключаются в файле \_layouts.scss, который лежит в директории `src/layouts/`.
    Файлы js
-   компонентов подключаются вручную в файле components.js, который лежит в директории `src/components/`.
-   элементов подключаются вручную в файле elements.js, который лежит в директории `src/elements/`.
-   лейаутов подключаются вручную в файле layouts.js, который лежит в директории `src/layouts/`.

Компоненты могут содержать в себе и изображения в форматах: jpg, jpeg, png, gif. Все изображения конвертируются автоматически в формат webp. Изображения из компонентов складываются в папку `dist/images/component-name`. Component-name - это название компонента. Например, если в компонент header мы добавим изображение header.jpg, то в папке dist мы найдем его последующему пути - `dist/images/header/header.webp`.

### Автоматизация создания компонентов \ элементов \ лейаутов

Для автоматизации создания компонентов \ элементов \ лейаутов используется gulp-таск `create`.
Для его запуска необходимо в консоли ввести команду :
`COMPONENT=<new_component_name> gulp create` - для создания компонента
`ELEMENT=<new_element_name> gulp create` - для создания элемента
`LAYOUT=<new_layout_name> gulp create` - для создания лейаута

### Создание спрайтов иконок

Для лучшей производительности конечной верстки файлы иконок svg и/или png лучше объединять в спрайты. Здесь это делается довольно легко.

#### SVG

Копируем иконку svg в папку `src/images/icons/svg`. Далее в pug файле, где это необходимо выводим иконку используя миксин `+icon('filename')`. Filename - название файла svg-иконки. Можно указать дополнительный класс вторым параметром в миксине - `+icon('filename', 'ms-3')`.

По умолчанию из svg иконки вырезаются такие атрибуты, как fill, stroke, style. Если они вам нужны, то в файле svg-sprite.js (лежит в корневой папке gulp) gulp-таска закомментируйте строки 8-10.

#### PNG

Копируем png-иконку в папку `src/images/icons/png`. Далее в нужном месте файла pug выводим i.icon.filename. Filename - название файла иконки.

### Сторонние библиотеки

Для установки сторонних библиотек можно воспользоваться возможностями nodejs и npm. Например, установим библиотеку Owl carousel - `npm i owl.carousel --save`. При подобных установках все библиотеки копируются в папку node_modules. Далее для подключения файлов импортируем нужные типы:

-   js - импортируем в том файле компонента, где вызываем данный плагин `import 'owl.carousel'`. Вообще, какие объекты импортировать смотрите в документации библиотек.
-   scss - ипортируем в файле \_vendor.scss (src/vendor/)

```
@import './owl-carousel/owl.carousel'
@import './owl-carousel/owl.theme.default'
```

Js-файлы всего проекта, разбитые на модуля, собирает webpack.

Если необходимо вносить правки в сторонние библиотеки, то сохраняем в папку `src/vendor/`. Под каждую библиотеку создается отдельная папка, которая содержит типы файлов scss/css и js. Js-файлы подключаем в файле `src/vendor/vendor.js`.

### Создание фавиконок

Для создания фавиконок используются 2 изображения: favicon-lg.png и favicon-sm.png. Лежат они в директории `src/images/`.

-   favicon-lg - служит для создания большой иконки приложения
-   favicon-sm - служит именно для создания фавиконок. Создаются файлы с названием favicon-\*\*. Всего создаются 4 файла фавиконок с размерами: favicon-16x16.png, favicon-32x32.png, favicon-48x48.png и общий favicon.ico.

favicon-lg.png - это картинка с размером не менее 1024x1024 пикс. Здесь указывается полный формат логотипа сайта.
favicon-sm.png - картинка размером от 100 до 300 пикс. Здесь указывается упрощенный логотип сайта.

В папке `dist/images` появляется папка favicons с иконками и файлом манифеста. Убедитесь, что пути в файлах manifest.json, browserconfig.xml, yandex-browser-manifest.json указаны правильные. Править пути можно в таске gulp - favicons, который лежит в корневой директории gulp. Ищите свойство path в методе favicons.

### Шрифты

Шрифты подключаются в файле `src/base/scss/_fonts.scss`. По умолчанию подключен шрифт Roboto из google fonts. По возможности подключайте шрифты именно из google fonts. Если же дизайнер указал шрифт, которого нет в Гугл фонтс, то вам необходимо его сконвертировать самостоятельно, используя сервис, например [этот](https://www.fontsquirrel.com/tools/webfont-generator). Для подключения разных начертаний используем миксин fontFace. Для него необходимо передать следующие параметры:

-   'Font name' - имя шрифта, для всех начертаний должно быть одним
-   'filename' - имя файла шрифта
-   'font-weight-normal' - указываем начертание font-weight, например, 700
-   'font-style-normal' - указываем начертание style, например, italic
-   'woff2' - формат файла, желательно использовать woff2

Пример шрифта 'Open Sans', начертания font-weight 600 и font-style normal:

`@include fontFace('Open Sans', 'open-sans-fw-600', 600, 'normal', 'woff2')`

После всего необходимо записать в переменную `$font-family-base` название подключенного шрифта. Делается это в файле `src/base/scss/_variables.scss`. Данное присваивание вы найдете в самом начале файла.

В моем случае это будет

`$font-family-base: "Open Sans", sans-serif;`

### Изображения

Изображения в данном сборке автоматически конвертируются в веб-формат webp. Если вам не нужен формат webp, то переходим в таск images `gulp/img.js` и комментируем строку `.pipe($.plugins.webp())`. Перезагружаем проект.

### Создание архива проекта

Для создания архива файлов проекта необходимо в консоли написать команду:

`npm run zip`

Директория node_modules из архива будет исключена. В корне проекта создается директория zip с файлами архивов. Файл архива содержит название проекта + время и дата создания, например, gulp-pack_2021_07_27_11_23.

### Удаление папки dist

Когда долго работаем с проектом бывает такое, что папка dist засоряется ненужными файлами. Это происходит потому, что из исходников мы можем удалить некоторые файлы, а из dist они автоматом не удаляются. Особенно это происходит с изображениями. Поэтому имеет смыслы удалить всю папку dist и она заново сгенерируется автоматически при старте проекта.

Мы можем удалить папку dist как в ручную, так и воспользовавшись командой:

`npm run clean`

### Дополнительные ресурсы в проекте

Если вы хотите добавить в ваш проект какие-то дополнительные ресурсы, то достаточно создать дополнительную папку в каталоге `src/resources` и она автоматически будет скопирована в корневую папку dist. Например, если мне нужно загрузить видео я создаю каталог - `src/resources/video` и загружаю все видео в данную папку. На выходе получим:

`dist/video/***`
