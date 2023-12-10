'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addNewMovieInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    /* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addNewMovieInput.value,
            favorite = checkbox.checked;

        if (newFilm) {
            // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        //4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
        if (favorite && newFilm) {
            console.log("Добавляем любимый фильм");
        }
        e.target.reset(); // clean the form
    });

    const createMovieList = (films, parent) => {
        parent.innerHTML = "";

        // 5) Фильмы должны быть отсортированы по алфавиту
        sortArr(films); 

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>   
            `;
        });

        // 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        document.querySelectorAll('.delete').forEach((btn, i) => {  
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            }); 
        });
    };

    const deleteAdv = (arr) => {
        arr.forEach(advItem => {
            advItem.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});

// const newMovieForm = document.querySelector('.add'), 
//       addNewMovieBtn = newMovieForm.querySelector('button'),
//       newMovieInput = newMovieForm.querySelector('.adding__input');

// addNewMovieBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     movieDB.movies.push(newMovieInput.value);
        
//     movieList.innerHTML += `
//         <li class="promo__interactive-item"> ${movieDB.movies.length} ${movieDB.movies[movieDB.movies.length - 1]}
//             <div class="delete"></div>
//         </li>   
//     `;
// });

// movieDB.movies.forEach((movie) => {
//     if (movie.length > 21) {
//         movie.slice(20)
//         movie += '...';
//     }
// });

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML = `
//         <li class="promo__interactive-item"> ${i + 1} ${film}
//             <div class="delete"></div>
//         </li>   
//     `;
// });

// console.log(movieList);