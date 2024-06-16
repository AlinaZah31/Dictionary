let arrayOfStrings = "";

function checkWord() {
    const currentSaveWord = document.getElementById("save").value.toLowerCase();
    if (!arrayOfStrings.split("\n").includes(currentSaveWord)) {
        arrayOfStrings = arrayOfStrings + Array(currentSaveWord) + "\n";
    }
    const currentSearchWord = document.getElementById("search").value.toLowerCase();
    const hasWord = (arrayOfStrings, currentSearchWord) => 
        arrayOfStrings.split("\n").includes(currentSearchWord);
    if (currentSearchWord != "") {
        if (hasWord(arrayOfStrings, currentSearchWord)) {
            document.getElementById("Initial-text").innerHTML = "Word already saved!";
        } else {
            document.getElementById("Initial-text").innerHTML = "WORD NOT SAVED!";
        }
    } else {
        document.getElementById("Initial-text").innerHTML = "Dictionary";
    }
}

