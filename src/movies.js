// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const allDirectors = moviesArr.map((movie) => movie.director);
  let allDirectorsUnique = [...new Set(allDirectors)];
  return allDirectorsUnique;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const allSpielbergDramas = moviesArr.filter((movie) => (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")));
  return allSpielbergDramas.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArr) {
  const avgScore = moviesArr.reduce((aggScore, movie) => {
    const missingScore = movie.score === undefined;
    if (missingScore) {
      aggScore + 0;
    }
    aggScore + movie.score;
    return aggScore;
  }, 0);
  return (moviesArr === []) ? 0 : parseFloat((avgScore/moviesArr.length).toFixed(2));
};


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const allDramas = moviesArr.filter((movie) => movie.genre.includes("Drama"));
  if (allDramas[0] === undefined) {  //why does allDramas === [] not work???
    return 0;
  } else {
    return parseFloat((allDramas.reduce((aggScore, movie) => {
      return aggScore + movie.score}, 0) / allDramas.length).toFixed(2));
    }
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const newMovieOrder = JSON.parse(JSON.stringify(moviesArr));
  return newMovieOrder.sort((a,b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;

    // a.year === b.year
    else { 
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  });
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArr));
  return moviesCopy.sort((a,b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }).splice(0, 20).map((movie) => movie.title);
};



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArr));
  const newFormat = moviesCopy.map((movie) => {
    const hoursAndMin = movie.duration.split(" ");
    return hoursAndMin}).map((movie) => {
      const minFormat = (parseInt(movie[0]) * 60) +  parseInt(movie[1])
      return minFormat})

  function changeFormat(arrayWithNestedObjects) {
    for (let i=0; i < arrayWithNestedObjects.length; i++) {
      arrayWithNestedObjects[i].duration = newFormat
  }
  }
  return changeFormat(moviesCopy);
}
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
