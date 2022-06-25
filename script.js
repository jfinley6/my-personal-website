//Declare variables for Toggle Button and Menu Item Elements
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuItem = document.getElementsByClassName("menuItem");

//When the toggle button is clicked display the menu items
toggleButton.addEventListener("click", () => {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle("active");
    }
});

searchElement1 = document.querySelectorAll(".container")[0];
searchElement2 = document.querySelectorAll(".container")[1];
searchElement3 = document.querySelectorAll(".container")[2];

function checkTags() {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();

    for (let i = 1; i < searchElement1.children[2].children.length; i++) {
        arr1.push(searchElement1.children[2].children[i].innerText.replace(",", ""))
        if (arr1[i - 1].toUpperCase().indexOf(filter) > -1) {
            searchElement1.style.display = "";
            break;
        } else {
            searchElement1.style.display = "none";
        }
    }

    for (let i = 1; i < searchElement2.children[2].children.length; i++) {
        arr2.push(searchElement2.children[2].children[i].innerText.replace(",", ""))
        if (arr2[i - 1].toUpperCase().indexOf(filter) > -1) {
            searchElement2.style.display = "";
            break;
        } else {
            searchElement2.style.display = "none";
        }
    }
    
    for (let i = 1; i < searchElement3.children[2].children.length; i++) {
        arr3.push(searchElement3.children[2].children[i].innerText.replace(",", ""))
        if (arr3[i - 1].toUpperCase().indexOf(filter) > -1) {
            searchElement3.style.display = "";
            break;
        } else {
            searchElement3.style.display = "none";
        }
    }
}