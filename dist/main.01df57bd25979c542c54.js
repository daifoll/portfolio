!function(){var t={394:function(){"use strict";for(var t=document.querySelector(".footer-projects__wrapper"),e=document.querySelectorAll(".projects-item"),i=0;i<e.length;i++){var s=document.createElement("a");s.classList.add("footer-projects__item"),s.innerText=e[i].querySelector(".projects-header__item").innerText.slice(1,-1),s.href=e[i].querySelector(".projects-button__watchBtn").href,s.target="_blank",t.append(s)}document.querySelector(".footer-date__item").innerText=(new Date).getFullYear()+" г."},997:function(t,e){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var n,c=function(t){return t},a=document,l=a.documentElement,p=a.body,u=window,d=u.requestAnimationFrame||u.mozRequestAnimationFrame||u.webkitRequestAnimationFrame||u.msRequestAnimationFrame,f=u.cancelAnimationFrame||u.mozCancelAnimationFrame,_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e.querySelector(t)},h=function(t,e){Array.prototype.forEach.call(t,e)},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,i=!0;try{"string"==typeof t?_(t,e):g(t)&&e.contains(t)}catch(t){i=!1}return i},g=function(t){return function(t){try{return t instanceof Node}catch(e){return"object"===i(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName&&"object"===i(t.ownerDocument)}}(t)||function(t){try{return t instanceof HTMLElement}catch(e){return"object"===i(t)&&1===t.nodeType&&"object"===i(t.style)&&"object"===i(t.ownerDocument)}}(t)},v=function(){return u.pageYOffset||p.scrollTop||l.scrollTop},j=function(){return u.performance&&"now"in u.performance?performance.now():(new Date).getTime()},b=function(t){var e=new RegExp("("+location.hash+")?$");return(t.baseURI||a.URL).replace(e,"")},y=function(){return Math.max(p.scrollHeight,p.offsetHeight,p.clientHeight,l.scrollHeight,l.offsetHeight,l.clientHeight)},S=function(){return u.innerHeight||l.clientHeight||p.clientHeight},x=function(t){return t+"px"},w="data-scrolltosmooth-expand",k="top",A="bottom";function T(t){var e="";return"href"===this.settings.targetAttribute&&t.href?e=t.href.replace(b(t),""):t.getAttribute(this.settings.targetAttribute)&&(e=t.getAttribute(this.settings.targetAttribute)),this.settings.topOnEmptyHash&&"#"==e?this.container:m(e,this.container)?_(e,this.container):null}function E(){var t=this,e=[];return h(this.elements,(function(i){T.call(t,i)&&("href"===t.settings.targetAttribute&&-1!=i.href.indexOf(b(i))&&-1!=i.href.indexOf("#")&&(""!=i.hash||t.settings.topOnEmptyHash)||"href"!=t.settings.targetAttribute)&&e.push(i)})),e}function O(t,e){e.stopPropagation(),e.preventDefault();var i=T.call(this,t);i&&this.scrollTo(i)}function P(t){var e=Math.max(1,this.settings.duration);if(this.settings.durationRelative){var i="number"==typeof this.settings.durationRelative?this.settings.durationRelative:1e3;e=Math.max(this.settings.duration,t*(e/i))}return this.settings.durationMin&&e<this.settings.durationMin&&(e=this.settings.durationMin),this.settings.durationMax&&e>this.settings.durationMax&&(e=this.settings.durationMax),e}function M(t,e,i){var s=function(t,e,i){var s=e-i;return t<0?{to:k,px:-1*t}:t>s&&{to:A,px:-1*(s-t)}}(t,e,i),r=C.call(this),o=r.filter((function(t){return t.getAttribute(w)===k}))[0],n=r.filter((function(t){return t.getAttribute(w)===A}))[0];s&&o&&s.to===k?o.style.height=x(s.px):s&&n&&s.to===A?n.style.height=x(s.px):h(r,(function(t){t.style.removeProperty("height")}))}function C(){return Array.prototype.slice.call(this.container.children).filter((function(t){return t.hasAttribute(w)}))}function F(t,e,i,s,r){var o=this,c=t-e,a=c<0?-1*c:c,l=P.call(this,a),p=Math.min(l,j()-i),f=p/l,_="string"==typeof this.settings.easing?function(t,e){return Function('"use strict"; return ('+t+"("+e+"))")()}(this.settings.easing,f):this.settings.easing(f),h=e+c*_;this.settings.onScrollUpdate&&"function"==typeof this.settings.onScrollUpdate&&this.settings.onScrollUpdate({startPosition:e,currentPosition:h,endPosition:t}),u.scroll(0,h),s||(s=y()),r||(r=S()),M.call(this,h,s,r),p>=l?this.settings.onScrollEnd&&"function"==typeof this.settings.onScrollEnd&&this.settings.onScrollEnd({startPosition:e,endPosition:t}):n=d((function(){F.call(o,t,e,i,s,r)}))}var N=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"elements",void 0),r(this,"container",void 0),r(this,"settings",void 0);var s={container:a,targetAttribute:"href",topOnEmptyHash:!0,offset:null,duration:400,durationRelative:!1,durationMin:null,durationMax:null,easing:c,onScrollStart:null,onScrollUpdate:null,onScrollEnd:null};for(var o in i=i||s,s)Object.prototype.hasOwnProperty.call(s,o)&&!Object.prototype.hasOwnProperty.call(i,o)&&(i[o]=s[o]);this.settings=i;var n=p;"string"==typeof this.settings.container&&m(this.settings.container)?n=_(this.settings.container):"string"!=typeof this.settings.container&&g(this.settings.container)&&m(this.settings.container)&&(n=this.settings.container),n=n===a||n===l?p:n,this.container=n,this.elements="string"==typeof e?function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:a).querySelectorAll(t)}(e,this.container):e}var e,d;return e=t,(d=[{key:"init",value:function(){var t=this;this.destroy();var e=a.createElement("div");e.setAttribute(w,k),this.container.insertBefore(e,this.container.firstChild);var i=a.createElement("div");i.setAttribute(w,A),this.container.appendChild(i),h(E.call(this),(function(e){e.addEventListener("click",O.bind(t,e),!1)})),h(["mousewheel","wheel","touchmove"],(function(e){u.addEventListener(e,(function(){t.cancelScroll()}))}))}},{key:"destroy",value:function(){var t=this;this.settings&&(this.cancelScroll(),h(C.call(this),(function(t){t.parentNode.removeChild(t)})),h(E.call(this),(function(e){e.removeEventListener("click",O.bind(t,e),!1)})))}},{key:"scrollTo",value:function(t){var e=v(),s=y(),r=S(),o=0;if(isNaN(t)){if(("object"===i(t)||"string"==typeof t)&&m(t,this.container)){"string"==typeof t&&(t=_(t,this.container));var n=t.getBoundingClientRect().top+e;o=s-n<r?s-r:n}}else"string"==typeof t&&(t=parseFloat(t)),o=t=s-t<r?s-r:t;if(null!==this.settings.offset){var c=0;if(m(this.settings.offset,this.container)){var a=this.settings.offset;"string"==typeof a&&(a=_(this.settings.offset)),g(a)&&(c=a.getBoundingClientRect().height)}else isNaN(this.settings.offset)||"string"==typeof(c=this.settings.offset)&&(c=parseFloat(c));o-=c}o=o<0?0:o,this.settings.onScrollStart&&"function"==typeof this.settings.onScrollStart&&this.settings.onScrollStart({startPosition:e,endPosition:o}),F.call(this,o,e,j(),s,r)}},{key:"scrollBy",value:function(t){this.scrollTo(v()+t)}},{key:"cancelScroll",value:function(){n&&f(n)}},{key:"update",value:function(t){if("object"===i(t))for(var e=0,s=Object.entries(t);e<s.length;e++){var r=(a=s[e],l=2,function(t){if(Array.isArray(t))return t}(a)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],s=!0,r=!1,o=void 0;try{for(var n,c=t[Symbol.iterator]();!(s=(n=c.next()).done)&&(i.push(n.value),!e||i.length!==e);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==c.return||c.return()}finally{if(r)throw o}}return i}}(a,l)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(a,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],c=r[1];this.settings[n]=c}var a,l}}])&&s(e.prototype,d),t}();e.So=N},138:function(t,e,i){var s=i(55);t.exports=function(t){var e,r="";return r+'<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon"'+s.attr("href",i(324),!0,!0)+'><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;700&amp;display=swap" rel="stylesheet"><script src="https://kit.fontawesome.com/7504f878a6.js" crossorigin="anonymous"><\/script><title>Кобыхнов Кирилл - портфолио</title></head><body>\x3c!--Подключаем блок header--\x3e'+(null==(e=i(320).call(this,t))?"":e)+"\x3c!--Подключаем блок projects--\x3e"+(null==(e=i(353).call(this,t))?"":e)+"\x3c!--Подключаем блок footer--\x3e"+(null==(e=i(598).call(this,t))?"":e)+"</body></html>"}},598:function(t,e,i){i(55),t.exports=function(t){return""+'<footer class="footer" id="footer"><div class="footer__wrapper">  <div class="footer__column footer-header"><span class="footer-header__name">Кобыхнов Кирилл.   </span><span class="footer-header__description">Портфолио.  </span></div><div class="footer__column footer-projects"><div class="footer-projects__wrapper"></div></div><div class="footer__column footer-contacts"><div class="footer-contacts__wrapper"><a class="footer-contacts__item" href="tel:+79965003886">+7 996 500 38 86 </a><a class="footer-contacts__item" href="https://github.com/daifoll" target="__blank">Github</a><a class="footer-contacts__item" href="mailto: kobykhnov.bl@gmail.com" target="__blank">kobykhnov.bl@gmail.com</a><a class="footer-contacts__item" href="https://drive.google.com/file/d/1tUr66ly-v6v5PVE_GS9_JCZQ5YPOi7AS/view?usp=share_link" target="_blank">Посмотреть резюме </a></div></div></div><div class="footer__column footer-date"><span class="footer-date__item date"> </span></div></footer>'}},320:function(t,e,i){var s=i(55);t.exports=function(t){var e="";return e+'<header class="header" id="started"><div class="container"> <div class="header__top"><div class="header__column left-header"><h1 class="left-header__name">Кобыхнов Кирилл.</h1><h2 class="left-header__description">Портфолио.</h2><div class="left-header__contacts contacts"><a class="contacts__item item-contacts" href="https://github.com/daifoll" target="__blank"><img class="item-contacts__icon"'+s.attr("src",i(859),!0,!0)+' alt=""><span class="item-contacts__text">/daifoll</span></a><a class="contacts__item item-contacts" href="tel:+79965003886"><img class="item-contacts__icon"'+s.attr("src",i(283),!0,!0)+' alt=""><span class="item-contacts__text">+7 996 500 38 86</span></a><a class="contacts__item item-contacts" href="mailto: kobykhnov.bl@gmail.com"><img class="item-contacts__icon"'+s.attr("src",i(711),!0,!0)+' alt=""><span class="item-contacts__text">kobykhnov.bl@gmail.com</span></a><a class="contacts__item item-contacts" href="https://drive.google.com/file/d/1tUr66ly-v6v5PVE_GS9_JCZQ5YPOi7AS/view?usp=share_link" target="_blank"><img class="item-contacts__icon"'+s.attr("src",i(150),!0,!0)+' alt=""><span class="item-contacts__text">Посмотреть резюме</span></a></div><div class="header__column anchors-navigation"><a class="anchors-navigation__item" href="#started"></a><a class="anchors-navigation__item" href="#tech-english"></a><a class="anchors-navigation__item" href="#ecommerce"></a><a class="anchors-navigation__item" href="#projex"></a><a class="anchors-navigation__item" href="#nftmusic"></a><a class="anchors-navigation__item" href="#todolist"></a><a class="anchors-navigation__item" href="#footer"></a></div><div class="header__column look-projects"><a class="look-projects__item" href="#tech-english">Проекты </a></div></div></div></div></header>'}},353:function(t,e,i){var s=i(55);t.exports=function(t){var e="";return e+'<section class="projects"><div class="projects-container"><div class="projects__column projects-item" id="tech-english"><div class="projects-item__img projects-image"><img class="projects-image__img"'+s.attr("src",i(248),!0,!0)+' alt="Tech-english"></div><div class="project-item__info projects-info"><div class="projects-info__header projects-header"><span class="projects-header__item">«Tech English»</span></div><div class="projects-info__description projects-description"><p class="projects-description__item">Используемые технологии:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">React.js</li><li class="projects-description-list__item">Typescript</li><li class="projects-description-list__item">Tailwind CSS</li><li class="projects-description-list__item">Material UI</li></ul><p class="projects-description__item">Что реализовано:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">SPA приложение</li><li class="projects-description-list__item">Получение наборов слов по <a href="https://jsonbin.io" target="_blank">API (JSONBIN)</a></li><li class="projects-description-list__item">Функция "добавления в словарь", позволяет добавлять слова в хранилище, доступное из любого места приложения</li><li class="projects-description-list__item">Выбор набора слов - сейчас доступны переводы с английского на русский, а также с русского на английский</li><li class="projects-description-list__item">Просмотр результов после прохождения теста, с показом ошибок и набранных баллов</li><li class="projects-description-list__item">Адаптация под маленькие экраны и мобильные устройства</li></ul><div class="projects-info__button projects-button"> <a class="projects-button__watchBtn" href="https://tech-english.vercel.app" target="_blank"><img class="projects-button__img"'+s.attr("src",i(810),!0,!0)+' alt="Посмотреть проект"><span class="projects-button__text">Посмотреть проект  </span></a></div></div></div></div><div class="projects__column projects-item" id="ecommerce"><div class="projects-item__img projects-image"><img class="projects-image__img"'+s.attr("src",i(70),!0,!0)+' alt="E-Commerce"></div><div class="project-item__info projects-info"><div class="projects-info__header projects-header"><span class="projects-header__item">«Интернет-магазин»</span></div><div class="projects-info__description projects-description"><p class="projects-description__item">Используемые технологии:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">Next.js</li><li class="projects-description-list__item">Redux (Toolkit)</li><li class="projects-description-list__item">Typescript</li><li class="projects-description-list__item">Stripe (для тестовой оплаты)</li><li class="projects-description-list__item">API: <a class="link" href="https://fakeapi.platzi.com/" target="_blank">Platzi Fake Store API </a></li><li class="projects-description-list__item">Tailwind CSS</li></ul><p class="projects-description__item">Что реализовано:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">Статическая генерация страниц</li><li class="projects-description-list__item">Получение списка категорий и товаров </li><li class="projects-description-list__item">Пагинация</li><li class="projects-description-list__item">Сортировка товаров по цене</li><li class="projects-description-list__item">Поиск по ключевому слову</li><li class="projects-description-list__item">Добавление / удаление товаров в корзине</li><li class="projects-description-list__item">Тестовая оплата с помощью сервиса <a href="https://stripe.com" target="_blank">Stripe</a></li><li class="projects-description-list__item">Адаптация под маленькие экраны и мобильные устройства</li><li class="projects-description-list__item">Skeleton loading для каждой страницы</li></ul></div><div class="projects-info__button projects-button"> <a class="projects-button__watchBtn" href="https://e-commerce-daifoll.vercel.app" target="_blank"><img class="projects-button__img"'+s.attr("src",i(810),!0,!0)+' alt="Посмотреть проект"><span class="projects-button__text">Посмотреть проект                         </span></a></div></div></div><div class="projects__column projects-item" id="projex"><div class="projects-item__img projects-image"><img class="projects-image__img"'+s.attr("src",i(956),!0,!0)+' alt="Projex"></div><div class="project-item__info projects-info"><div class="projects-info__header projects-header"><span class="projects-header__item">«Projex»</span></div><div class="projects-info__description projects-description"><p class="projects-description__item">Используемые технологии:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">HTML</li><li class="projects-description-list__item">CSS</li><li class="projects-description-list__item">JavaScript</li><li class="projects-description-list__item">Webpack 5</li><li class="projects-description-list__item">Библиотеки: scrolltosmooth.js, docSlider.js</li></ul><p class="projects-description__item">Что реализовано:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">Адаптивная верстка по макету из Figma</li><li class="projects-description-list__item">Fixed Header</li><li class="projects-description-list__item">Плавный скролл к якорям</li><li class="projects-description-list__item">Форма с валидацией</li><li class="projects-description-list__item">Слайдер по кнопке</li><li class="projects-description-list__item">Touch slider </li><li class="projects-description-list__item">Модальное окно при отправке формы</li></ul></div><div class="projects-info__button projects-button"> <a class="projects-button__watchBtn" href="https://daifoll.github.io/projex/" target="_blank"><img class="projects-button__img"'+s.attr("src",i(810),!0,!0)+' alt="Посмотреть проект"><span class="projects-button__text">Посмотреть проект                         </span></a></div></div></div><div class="projects__column projects-item" id="nftmusic"><div class="projects-item__img projects-image"><img class="projects-image__img"'+s.attr("src",i(915),!0,!0)+' alt="Projex"></div><div class="project-item__info projects-info"><div class="projects-info__header projects-header"><span class="projects-header__item">«NFTMusic»</span></div><div class="projects-info__description projects-description"><p class="projects-description__item">Используемые технологии:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">HTML</li><li class="projects-description-list__item">CSS</li><li class="projects-description-list__item">JavaScript</li><li class="projects-description-list__item">Webpack 5</li><li class="projects-description-list__item">Библиотеки: scrolltosmooth.js, docSlider.js</li></ul><p class="projects-description__item">Что реализовано:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">Адаптивная верстка по макету из Figma</li><li class="projects-description-list__item">Burger-menu</li><li class="projects-description-list__item">Плавный скролл к якорям</li><li class="projects-description-list__item">Сортировка карточек альбомов по жанрам</li><li class="projects-description-list__item">Выгрузка карточек альбомов из объекта</li></ul></div><div class="projects-info__button projects-button"> <a class="projects-button__watchBtn" href="https://daifoll.github.io/NFTMusic/" target="_blank"><img class="projects-button__img"'+s.attr("src",i(810),!0,!0)+' alt="Посмотреть проект"><span class="projects-button__text">Посмотреть проект</span></a></div></div></div><div class="projects__column projects-item" id="todolist"><div class="projects-item__img projects-image"><img class="projects-image__img"'+s.attr("src",i(262),!0,!0)+' alt="Calculator"></div><div class="project-item__info projects-info"><div class="projects-info__header projects-header"><span class="projects-header__item">«Список задач»</span></div><div class="projects-info__description projects-description"><p class="projects-description__item">Используемые технологии:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">HTML</li><li class="projects-description-list__item">CSS</li><li class="projects-description-list__item">JavaScript</li></ul><p class="projects-description__item">Что реализовано:</p><ul class="projects-description__list projects-description-list"><li class="projects-description-list__item">Добавление новой задачи</li><li class="projects-description-list__item">Редактирование существующей задачи</li><li class="projects-description-list__item">Отметка о выполнении задачи</li><li class="projects-description-list__item">Удаление задачи</li><li class="projects-description-list__item">Очистка всего списка задача</li><li class="projects-description-list__item">Сортировка задач на "Выполненые" и "Невыполненные"</li><li class="projects-description-list__item">Использование localstorage для сохранения списка задач после перезагрузки страницы</li></ul></div><div class="projects-info__button projects-button"> <a class="projects-button__watchBtn" href="https://daifoll.github.io/ToDoList/" target="_blank"><img class="projects-button__img"'+s.attr("src",i(810),!0,!0)+' alt="Посмотреть проект"><span class="projects-button__text">Посмотреть проект</span></a></div></div></div></div></section>'}},55:function(t,e,i){"use strict";var s=Object.prototype.hasOwnProperty;function r(t,e){return Array.isArray(t)?function(t,e){for(var i,s="",o="",n=Array.isArray(e),c=0;c<t.length;c++)(i=r(t[c]))&&(n&&e[c]&&(i=a(i)),s=s+o+i,o=" ");return s}(t,e):t&&"object"==typeof t?function(t){var e="",i="";for(var r in t)r&&t[r]&&s.call(t,r)&&(e=e+i+r,i=" ");return e}(t):t||""}function o(t){if(!t)return"";if("object"==typeof t){var e="";for(var i in t)s.call(t,i)&&(e=e+i+":"+t[i]+";");return e}return t+""}function n(t,e,i,s){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(s?t:t+'="'+t+'"');var r=typeof e;return"object"!==r&&"function"!==r||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),i||-1===e.indexOf('"'))?(i&&(e=a(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,i){if(1===arguments.length){for(var s=e[0],r=1;r<e.length;r++)s=t(s,e[r]);return s}for(var n in i)if("class"===n){var c=e[n]||[];e[n]=(Array.isArray(c)?c:[c]).concat(i[n]||[])}else if("style"===n){c=(c=o(e[n]))&&";"!==c[c.length-1]?c+";":c;var a=o(i[n]);a=a&&";"!==a[a.length-1]?a+";":a,e[n]=c+a}else e[n]=i[n];return e},e.classes=r,e.style=o,e.attr=n,e.attrs=function(t,e){var i="";for(var c in t)if(s.call(t,c)){var a=t[c];if("class"===c){i=n(c,a=r(a),!1,e)+i;continue}"style"===c&&(a=o(a)),i+=n(c,a,!1,e)}return i};var c=/["&<>]/;function a(t){var e=""+t,i=c.exec(e);if(!i)return t;var s,r,o,n="";for(s=i.index,r=0;s<e.length;s++){switch(e.charCodeAt(s)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}r!==s&&(n+=e.substring(r,s)),r=s+1,n+=o}return r!==s?n+e.substring(r,s):n}e.escape=a,e.rethrow=function t(e,s,r,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&s||o))throw e.message+=" on line "+r,e;var n,c,a,l;try{o=o||i(835).readFileSync(s,{encoding:"utf8"}),n=3,c=o.split("\n"),a=Math.max(r-n,0),l=Math.min(c.length,r+n)}catch(i){return e.message+=" - could not read from "+s+" ("+i.message+")",void t(e,null,r)}n=c.slice(a,l).map((function(t,e){var i=e+a+1;return(i==r?"  > ":"    ")+i+"| "+t})).join("\n"),e.path=s;try{e.message=(s||"Pug")+":"+r+"\n"+n+"\n\n"+e.message}catch(t){}throw e}},324:function(t,e,i){"use strict";t.exports=i.p+"assets/images/favicon/icon.100f4f023f8c08a011fe.png"},150:function(t,e,i){"use strict";t.exports=i.p+"assets/images/header/contacts/download.f2502f66a1e7aaecd1ab.svg"},711:function(t,e,i){"use strict";t.exports=i.p+"assets/images/header/contacts/email.1000e6a671a9c6cdd3c4.svg"},859:function(t,e,i){"use strict";t.exports=i.p+"assets/images/header/contacts/github.33b808a55440bd3c0fd0.svg"},283:function(t,e,i){"use strict";t.exports=i.p+"assets/images/header/contacts/phone.b38c9fd1fbefd704f569.svg"},915:function(t,e,i){"use strict";t.exports=i.p+"assets/images/projects/NFTMusic/NFTMusicScreen.9556de5d7e5de6ca5205.png"},70:function(t,e,i){"use strict";t.exports=i.p+"assets/images/projects/ecommerce/commerce.fa299d975725ee9b0bd2.png"},810:function(t,e,i){"use strict";t.exports=i.p+"assets/images/projects/projex/check-project.c11fd2c1e637f59fad77.svg"},956:function(t,e,i){"use strict";t.exports=i.p+"assets/images/projects/projex/projexScreen.bdd59055f8fe06fe8a74.png"},248:function(t,e,i){"use strict";t.exports=i.p+"assets/images/projects/tech-english/tech-english.11f1925f334411c050d3.png"},262:function(t,e,i){"use strict";t.exports=i.p+"assets/images/projects/todolist/todoluistScreen.b319995a26a42613c087.png"},835:function(){}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t}(),function(){"use strict";var t=i(997);function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var s,r=[],o=function(t,i){var s="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!s){if(Array.isArray(t)||(s=function(t,i){if(t){if("string"==typeof t)return e(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?e(t,i):void 0}}(t))){s&&(t=s);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,a=!1;return{s:function(){s=s.call(t)},n:function(){var t=s.next();return c=t.done,t},e:function(t){a=!0,n=t},f:function(){try{c||null==s.return||s.return()}finally{if(a)throw n}}}}(document.querySelectorAll('[href^="#"]'));try{for(o.s();!(s=o.n()).done;){var n=s.value.href.split("#")[1],c=document.querySelector("#"+n);r.push(c)}}catch(t){o.e(t)}finally{o.f()}new t.So("a",{duration:400,onScrollStart:function(t){},onScrollUpdate:function(t){},onScrollEnd:function(t){}}).init();var a=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting?document.querySelector('[href^="#'.concat(t.target.id,'"]')).classList.add("anchors-navigation__itemActive"):document.querySelector('[href^="#'.concat(t.target.id,'"]')).classList.remove("anchors-navigation__itemActive")}))}),{threshold:.5});r.forEach((function(t){a.observe(t)})),i(394),i(138)}()}();
//# sourceMappingURL=main.01df57bd25979c542c54.js.map