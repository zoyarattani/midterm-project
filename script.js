

function toggleCozyMode() {

    document.body.classList.toggle("cozy-mode");

}


function recommendBook() {

    let genre = document.getElementById("genreSelect").value;

    let result = document.getElementById("bookResult");


    if (genre == "romance") {

        result.innerHTML =
            "❤️ You should read Better Than the Movies by Lynn Painter!";

    }

    else if (genre == "fantasy") {

        result.innerHTML =
            "🐉 You should read Fourth Wing by Rebecca Yarros!";

    }

    else if (genre == "thriller") {

        result.innerHTML =
            "🔎 You should read Verity by Colleen Hoover!";

    }

    else {

        result.innerHTML =
            "Please choose a genre first!";

    }

}


function randomBook() {

    let books = [
        "Better Than the Movies by Lynn Painter",
        "Flawless by Elsie Silver",
        "Fourth Wing by Rebecca Yarros",
        "A Court of Thorns and Roses by Sarah J. Maas",
        "Verity by Colleen Hoover",
        "The Guest List by Lucy Foley"
    ];


    let randomNumber =
        Math.floor(Math.random() * books.length);


    document.getElementById("bookResult").innerHTML =
        "📖 You should read " +
        books[randomNumber] +
        "!";

}