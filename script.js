const arrayOfStrings = [" "];

function checkWord() {
    const currentSaveWord = document.getElementById("save").value.toLowerCase();
    if (!arrayOfStrings.includes(currentSaveWord)) {
        arrayOfStrings.push(currentSaveWord);
    }
    const currentSearchWord = document.getElementById("search").value.toLowerCase();
    const hasWord = (arrayOfStrings, currentSearchWord) => 
        arrayOfStrings.includes(currentSearchWord);
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
