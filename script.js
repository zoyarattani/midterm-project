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

        cozyButton.textContent = "Switch to Cozy Reading Mode";

    }

});


recommendButton.addEventListener("click", function () {

    const genre = genreSelect.value;

    if (genre === "romance") {

        result.textContent =
            "Start with Better Than the Movies by Lynn Painter. It's cute, funny, and really easy to get into.";

    } else if (genre === "fantasy") {

        result.textContent =
            "I'm sending you straight to Fourth Wing by Rebecca Yarros. If you want dragons and drama, this is it.";

    } else if (genre === "thriller") {

        result.textContent =
            "Go with Verity by Colleen Hoover. I can't promise you'll trust anyone by the end.";

    } else {

        result.textContent =
            "You have to pick a genre first. Give me something to work with.";

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

    const randomNumber =
        Math.floor(Math.random() * books.length);

    result.textContent =
        "Okay, I'm choosing for you: " + books[randomNumber] + ".";

});