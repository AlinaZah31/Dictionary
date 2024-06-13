var arrayOfWords = [""];

function checkWord() {
    const currentWord = document.getElementById("dictionary").value.toLowerCase();
    if (arrayOfWords.includes(currentWord)) {
        document.getElementById("Initial-text").innerHTML = "The word already exists!";
    } else {
        document.getElementById("Initial-text").innerHTML = "NEW WORD SAVED!";
        arrayOfWords = arrayOfWords + Array(currentWord) + " ";
    }
}

