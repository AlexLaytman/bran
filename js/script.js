'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
	 start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
			npersonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	 detectPersonalLevel: function() {
		if(personalMovieDB.count < 10) {
			console.log('вы просмотрели довольно мало фильмов')
		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
			console.log('вы просмотрели много фильмов')
		} else if(personalMovieDB.count >= 30){
			console.log('Да вы киноман')
		} else{
			console.log('Ошибка')
		}
	},
	rememberMyFilms: function(){
		for ( let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
			b = prompt('На сколько оцените его?', '').trim();
		
			if(a != '' && b != '' && a != null && b != null && a.length <40 & b < 101){
				personalMovieDB.movies[a] = b;
			} else {
				i--;
			}
		}
	},
	showMyDb: function (hiden) {
		if(!hiden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function() {
		for( let i = 1; i <=3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		}
	}

};



//========================================================================================================================================================


