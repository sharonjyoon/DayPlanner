//inputting the current date onto the page.
$(document).ready(function () {
  let today = moment().format(`MMMM Do YYYY`)
  console.log(today)
  $(`#currentDay`).append(today);
})

//variable for the current time. 
let currentTime = parseInt(moment().format(`HH`));
//having the variable name correspond to the name in HTML
$(`textarea`).each(function () {
  let name = parseInt($(this).attr(`name`));

//if statements to color code the text area.
if(name > currentTime){
  $(this).addClass(`future`)
};
if(name < currentTime){
  $(this).addClass(`past`)
};
if(name === currentTime) {
  $(this).addClass(`present`)
};
})


//declare global variables for text area 
let $textarea9 = $("#textarea9");
let $textarea10 = $("#textarea10");
let $textarea11 = $("#textarea11");
let $textarea12 = $("#textarea12");
let $textarea13 = $("#textarea13");
let $textarea14 = $("#textarea14");
let $textarea15 = $("#textarea15");
let $textarea16 = $("#textarea16");
let $textarea17 = $("#textarea17");


//individual functions to save to local storage upon clicking each button
$(`#btn9`).on(`click`, function () {
  localStorage.setItem(`9A.M.`, $textarea9.val())
});

$(`#btn10`).on(`click`, function () {
  localStorage.setItem(`10A.M.`, $textarea10.val())
});

$(`#btn11`).on(`click`, function () {
  localStorage.setItem(`11A.M.`, $textarea11.val())
});

$(`#btn12`).on(`click`, function () {
  localStorage.setItem(`12P.M.`, $textarea12.val())
});

$(`#btn1`).on(`click`, function () {
  localStorage.setItem(`1P.M.`, $textarea13.val())
});

$(`#btn2`).on(`click`, function () {
  localStorage.setItem(`2P.M.`, $textarea14.val())
});

$(`#btn3`).on(`click`, function () {
  localStorage.setItem(`3P.M.`, $textarea15.val())
});

$(`#btn4`).on(`click`, function () {
  localStorage.setItem(`4P.M.`, $textarea16.val())
});

$(`#btn5`).on(`click`, function () {
  localStorage.setItem(`5P.M.`, $textarea17.val())
});
//getting item from local storage to display on page and make it persist.
$(`#textarea9`).append(localStorage.getItem(`9A.M.`));
$(`#textarea10`).append(localStorage.getItem(`10A.M.`));
$(`#textarea11`).append(localStorage.getItem(`11A.M.`));
$(`#textarea12`).append(localStorage.getItem(`12P.M.`));
$(`#textarea13`).append(localStorage.getItem(`1P.M.`));
$(`#textarea14`).append(localStorage.getItem(`2P.M.`));
$(`#textarea15`).append(localStorage.getItem(`3P.M.`));
$(`#textarea16`).append(localStorage.getItem(`4P.M.`));
$(`#textarea17`).append(localStorage.getItem(`5P.M.`));
