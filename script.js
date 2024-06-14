let arrayOfWords = [""];

function checkWord() {
    const currentSaveWord = document.getElementById("save").value.toLowerCase();
    arrayOfWords = arrayOfWords + Array(currentSaveWord) + " ";
    const currentSearchWord = document.getElementById("search").value.toLowerCase();
    const hasWord = (arrayOfWords, currentSearchWord) => 
        arrayOfWords.split(/\s+/).includes(currentSearchWord);
    if (currentSearchWord != "") {
        if (hasWord(arrayOfWords, currentSearchWord)) {
            document.getElementById("Initial-text").innerHTML = "Word already saved!";
        } else {
            document.getElementById("Initial-text").innerHTML = "WORD NOT SAVED!";
        }
    } else {
        document.getElementById("Initial-text").innerHTML = "Dictionary";
    }
}



