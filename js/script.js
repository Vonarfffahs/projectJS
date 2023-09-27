/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {                                             
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 1; i++) {
            const answer1 = prompt("Один из последних просмотренных фильмов?", ""),
                    answer2 = prompt("На сколько оцените его?", "");
        
            if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50 && answer2.length < 50) {
                personalMovieDB.movies[answer1] = answer2;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },

    writeYourGenres: function() {
        for (let index = 1; index < 2; index++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${index}`, "");

            // if(genre == '' || genre == null) {
            //     alert(`Вы ввели некорректные данные или не ввели их вовсе`);
            //     index--;
            // } else {
            //     personalMovieDB.genres[index - 1] = genre;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую`, "");
             if(genres == '' || genres == null) {
                alert(`Вы ввели некорректные данные или не ввели их вовсе`);
                index--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },

    showMyDB: function(hidden) {
        if (!hidden)
            console.log(personalMovieDB);
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);