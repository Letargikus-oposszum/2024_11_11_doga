function randomizeSubmit()
{
    let helperArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function randomize(array) {
        return array.sort(() => 0.5 - Math.random());
    }

    const randomizedArray = randomize(helperArray);

    const numberDivs = document.getElementsByClassName("number");

    for (let i = 0; i < numberDivs.length; i++) {
        numberDivs[i].innerHTML = randomizedArray[i]; // Use innerHTML to set the content of each div
    }
}