/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// my code:
// // 1st task
// const divPromo = document.querySelector('.promo__adv');
// const imgPromo = divPromo.querySelectorAll('img');

// imgPromo.forEach(item => {
//     item.remove();
// });

// // 2nd task
// const divChangeGenre = document.querySelector('.promo__genre');
// divChangeGenre.innerText = "Драма";

// // 3rd task
// const divChangeBG = document.querySelector('.promo__bg');
// divChangeBG.style.background = 'url(img/bg.jpg) center center/cover no-repeat';

// // 4th task
// const listOfRecentMovies = document.querySelectorAll('.promo__interactive-item');
// let arrayOfMovies = [], NodeIterator = 0;

// for (let i = 0; i < listOfRecentMovies.length; i++) {
//     arrayOfMovies[i] = listOfRecentMovies[i].innerText;
// }

// arrayOfMovies.sort();

// for (let i = 0; i < listOfRecentMovies.length; i++) {
//     listOfRecentMovies[i].innerText = arrayOfMovies[i];
// }

// // 5th task
// for (let i = 0; i < listOfRecentMovies.length; i++) {
//     listOfRecentMovies[i].innerText = `${i + 1}. ` + listOfRecentMovies[i].innerText;
// }

// code from lesson:

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(advItem => {
    advItem.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>   
    `;
});
