const movies = [
	{
		title: "The Shawshank Redemption",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "The Godfather",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "The Dark Knight",
		poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
	},
	{
		title: "The Godfather: Part II",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "12 Angry Men",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "Schindler's List",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "Pulp Fiction",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "The Good, the Bad and the Ugly",
		poster: "https://via.placeholder.com/300x400"
	},
	{
		title: "Forrest Gump",
		poster: "https://via.placeholder.com/300x400"
	}
];

const movieContainer = document.getElementById("movie-container");

// function to create movie cards
function createMovieCard(movie) {
	const movieCard = document.createElement("div");
	movieCard.classList.add("movie");

	const movieImage = document.createElement("img");
	movieImage.src = movie.poster;
	movieImage.alt = `${movie.title} poster`;
	movieCard.appendChild(movieImage);

	const movieTitle = document.createElement("h2");
	movieTitle.textContent = movie.title;
	movieCard.appendChild(movieTitle);

	return movieCard;
}

// function to display all movies
function displayAllMovies() {
	movieContainer.innerHTML = "";
	for (let movie of movies) {
		const movieCard = createMovieCard(movie);
		movieContainer.appendChild(movieCard);
	}
}

// function to filter movies by search query
function filterMovies(searchQuery) {
	const filteredMovies = movies.filter(movie => {
		return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
	});
	movieContainer.innerHTML = "";
	if (filteredMovies.length > 0) {
		for (let movie of filteredMovies) {
			const movieCard = createMovieCard(movie);
			movieContainer.appendChild(movieCard);
		}
	} else {
		const noResult = document.createElement("h2");
		noResult.textContent = "No results found.";
		movieContainer.appendChild(noResult);
	}
}

// function to search movies
function searchMovies() {
	const searchInput = document.querySelector("input[type=text]");
	const searchQuery = searchInput.value.trim();
	if (searchQuery !== "") {
		filterMovies(searchQuery);
		searchInput.value = "";
	}
}

displayAllMovies();

function createMovieCard(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
  
    const movieImage = document.createElement("img");
    movieImage.src = movie.poster;
    movieImage.alt = `${movie.title} poster`;
    movieCard.appendChild(movieImage);
  
    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;
    movieCard.appendChild(movieTitle);
  
    return movieCard;
  }
  