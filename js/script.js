/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;
do{
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
} while (numberOfFilms === '' || numberOfFilms.length >= 50 || numberOfFilms === false)

const personalMovieDB = {                                             
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1,
    answer2;
      
for (let index = 0; index < 2; index++) {
    do{
        answer1 = prompt("Один из последних просмотренных фильмов?", "");
    } while (answer1 === '' || answer1.length >= 50 || answer1 === false)
    
    do{
        answer2 = prompt("На сколько оцените его?", "");
    } while (answer2 === '' || answer2.length >= 50 || answer2 === false) 

    personalMovieDB.movies[answer1] = answer2;
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else {
    alert('Вы киноман');
}

console.log(personalMovieDB);






