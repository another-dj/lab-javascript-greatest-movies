/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate(arrayOfMovies) {
   /* let rates = 0; 
    for (i=0; i<arrayOfMovies.length; i++) {
         rates = rates + arrayOfMovies[i].rate;
         let divide = rates/arrayOfMovies.length;
         return divide;
}*/
let rates = arrayOfMovies.reduce((accumulator, value, index, array) => {
return accumulator + value["rate"];
},0);
let average = rates/arrayOfMovies.length;
return average;
}

calculateAverageMovieRate(MOVIES);

// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(arrayOfMovies) {
    const filterDrama = arrayOfMovies.filter((value) => {
      return value["genre"].includes("Drama")
    
    });
    return calculateAverageMovieRate(filterDrama) || 0;
    }
    console.log(calculateAverageDramaRate(MOVIES));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arrayOfMovies) {
    let ordered = arrayOfMovies.sort((a,b) => {
        if (a.year === b.year && a.title > b.title) {
            return 1;
        }
        else if (a.year === b.year && a.title < b.title) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1;
        }
        else if (a.year < b.year){
            return -1;
        }
        else {
            return 0;
        }
    });
return ordered;
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies(arrayOfMovies) {
    const dramaSpiel = arrayOfMovies.filter((a) => {
        if ((a.director) && 
    }
    
    )
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
