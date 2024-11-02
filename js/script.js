'use strict';

let numberOfFilms;

function start () {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function detectPersonalLevel() {
	if(personalMovieDB.count < 10) {
		console.log('вы просмотрели довольно мало фильмов')
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log('вы просмотрели много фильмов')
	} else if(personalMovieDB.count >= 30){
		console.log('Да вы киноман')
	} else{
		console.log('Ошибка')
	}
}
detectPersonalLevel()
function rememberMyFilms(){
	for ( let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');
	
		if(a != '' && b != '' && a != null && b != null && a.length <40 & b < 101){
			personalMovieDB.movies[a] = b;
		} else {
			i--;
		}
	}
}
rememberMyFilms()


function showMyDb (hiden) {
	if(!hiden) {
		console.log(personalMovieDB);
	}
}
showMyDb(personalMovieDB.privat)
function writeYourGenres() {
	for( let i = 1; i <=3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres();

//========================================================================================================================================================
