//Create a Movies Library Page.
//Using fetch() from the following URL: https://movieapp-api-lms1.onrender.com/movies/getMovies
//Display the title of the movies and genre in each card.
//Enhance your pages with additional styling:
//Highlight input fields with errors (e.g., red border).
//Change the submit button's appearance when hovered over.
//Use animations or transitions for error messages.

const moviesContainer = document.getElementById("movies-container");
const fetchMovies = async (e) => {
  try {
    const response = await fetch(
      "https://movieapp-api-lms1.onrender.com/movies/getMovies",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener("load", async () => {
  const data = await fetchMovies();

  document.getElementById("movies-loader")?.remove();

  for (const movie of data.movies) {
    const div = document.createElement("div");
    div.classList.add(
      "bg-white",
      "border",
      "border-gray-100",
      "rounded-xl",
      "p-5",
      "shadow-md",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "transition-all",
      "duration-300",
      "hover:scale-105",
      "hover:shadow-xl",
      "hover:cursor-pointer",
      "overflow-hidden",
      "relative",
    );

    div.id = movie.id;

    const movieImage = document.createElement("img");
    movieImage.src =
      "https://www.iconpacks.net/icons/2/free-movie-icon-2802-thumb.png";
    div.appendChild(movieImage);

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;
    h1.classList.add("text-lg", "font-semibold");
    div.appendChild(h1);

    const pGenre = document.createElement("p");
    pGenre.textContent = movie.genre;
    div.appendChild(pGenre);

    moviesContainer.appendChild(div);
  }
});
