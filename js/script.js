'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10) {
	console.log('вы просмотрели довольно мало фильмов')
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
	console.log('вы просмотрели много фильмов')
} else if(personalMovieDB.count >= 30){
	console.log('Да вы киноман')
} else{
	console.log('Ошибка')
}


for ( let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', '');

	if(a != '' && b != '' && a != null && b != null && a.length <40 & b < 101){
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}

console.log(personalMovieDB);


