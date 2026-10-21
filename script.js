const cozyButton = document.getElementById("cozy-button");
const recommendButton = document.getElementById("recommend-button");
const randomButton = document.getElementById("random-button");

const genreSelect = document.getElementById("genreSelect");
const result = document.getElementById("bookResult");


cozyButton.addEventListener("click", function () {

    document.body.classList.toggle("cozy-mode");

    if (document.body.classList.contains("cozy-mode")) {
        cozyButton.textContent = "Back to Daylight";
    } else {
        cozyButton.textContent = "Switch to Cozy Mode";
    }

});


recommendButton.addEventListener("click", function () {

    const genre = genreSelect.value;

    if (genre === "romance") {

        result.textContent =
            "Start with Better Than the Movies by Lynn Painter. This one is such a fun romance.";

    } else if (genre === "fantasy") {

        result.textContent =
            "Go with Fourth Wing by Rebecca Yarros. Dragons, chaos, romance — this is the one.";

    } else if (genre === "thriller") {

        result.textContent =
            "Read Verity by Colleen Hoover. You will have opinions when you finish it.";

    } else {

        result.textContent =
            "Pick a genre first and I'll choose one for you.";

    }

});


randomButton.addEventListener("click", function () {

    const books = [
        "Better Than the Movies by Lynn Painter",
        "Flawless by Elsie Silver",
        "Fourth Wing by Rebecca Yarros",
        "A Court of Thorns and Roses by Sarah J. Maas",
        "Verity by Colleen Hoover",
        "The Guest List by Lucy Foley"
    ];

    const randomNumber = Math.floor(Math.random() * books.length);

    result.textContent =
        "My pick for you: " + books[randomNumber] + ".";

});