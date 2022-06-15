//Declare variables for Toggle Button and Menu Item Elements
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuItem = document.getElementsByClassName("menuItem")


//When the toggle button is clicked display the menu items
toggleButton.addEventListener('click', () => {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle("active")
    }
})

// function checkTags() {
//     //Declare variables
//     let input, container, filter, ul, li, i, txtValue;

//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = document.getElementsByClassName("liTag");
//     container = document.getElementsByClassName("container")

//     let searchArray = [];

//     for (i = 0; i < container.length; i++) {
//         for (i = 1; i < container[i].children[2].children.length; i++) {
//             txtValue = container[i].children[2].children[i].innerText;
//             searchArray.push(txtValue);
//             console.log(searchArray)
//         }
//     }
// }
// container = document.getElementsByClassName("container")
// let txtValue = container[0].children[2].children[1].innerText
// console.log(txtValue)

// Declare variables 








