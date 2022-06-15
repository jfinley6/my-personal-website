//Declare variables for Toggle Button and Menu Item Elements
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuItem = document.getElementsByClassName("menuItem");

//When the toggle button is clicked display the menu items
toggleButton.addEventListener("click", () => {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle("active");
    }
});

// searchElements = document.getElementsByClassName("searchElement");

// let searchArray = [...searchElements];

// function checkTags() {

//     arr = [];
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     for (let i = 0; i < searchArray.length; i++) {
//         arr.push(searchArray[i].innerText.replaceAll(",", "").toUpperCase());
//         if (arr[i].includes(filter)) {
//             searchArray[i].parentNode.parentNode.style.display = "";
//         } else {
//             searchArray[i].parentNode.parentNode.style.display = "none";
//         }

//     }
// }

// arr = [];
// input = document.getElementById("myInput");
// filter = input.value.toUpperCase();
// for (let i = 0; i < searchArray.length; i++) {
//     arr.push(searchArray[i].innerText.replaceAll(",", "").toUpperCase());
//     if (arr[i].includes(filter)) {
//         searchArray[i].parentNode.parentNode.style.display = "";
//     } else {
//         searchArray[i].parentNode.parentNode.style.display = "none";
//     }

// }
// console.log(arr)
// console.log(arr[0].includes("H"))