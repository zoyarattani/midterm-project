const cozyButton = document.getElementById("cozy-button");
const recommendButton = document.getElementById("recommend-button");
const randomButton = document.getElementById("random-button");

const genreSelect = document.getElementById("genreSelect");
const result = document.getElementById("bookResult");

cozyButton.addEventListener("click", function () {
    document.body.classList.toggle("cozy-mode");

    if (document.body.classList.contains("cozy-mode")) {
        cozyButton.textContent = "☀️ Regular Reading Mode";
    } else {
        cozyButton.textContent = "☕ Cozy Reading Mode";
    }
});

recommendButton.addEventListener("click", function () {
    const genre = genreSelect.value;

    if (genre === "romance") {
        result.textContent =
            "❤️ You should read Better Than the Movies by Lynn Painter!";
    } else if (genre === "fantasy") {
        result.textContent =
            "🐉 You should read Fourth Wing by Rebecca Yarros!";
    } else if (genre === "thriller") {
        result.textContent =
            "🔎 You should read Verity by Colleen Hoover!";
    } else {
        result.textContent =
            "Choose a genre first so I know what you are in the mood for!";
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
        "📖 You should read " + books[randomNumber] + "!";
});