var addTask = document.getElementById("addBtn"); // access to add button
var close = document.getElementsByClassName("close"); //access to close button
var ulElement = document.querySelector("ul");
var getPreLoader = document.getElementById("preLoader"); // get an div container with pre-loader
var restore = document.getElementById("restore");
var refresher = setInterval(function () { //refresh function sum() every 1 sec to price calculating of visible goods blocks
    sum();
}, 1000);
var saveAllLi = document.getElementById("save"); // get the "save" button
var help = document.getElementById("help"); // get the "help" button
var closeHelp = document.getElementById("closeHelp");
var helpText = document.getElementById("helpText");

window.addEventListener("DOMContentLoaded", function() { //function to restore li elements from the localStore
    for (var i = 0; i < localStorage.length; i++) { //get loop through array of key and values
        var item = document.createElement("li"); //create new li
        item.style.display = "flex"; //add dispaly style
        var localKey = localStorage.getItem(localStorage.key(i)); //var localKey get value by keys from localStore
        item.innerHTML = JSON.parse(localKey); //insert values in HTML or new li elements
        ulElement.appendChild(item); //new li element insert to ul element
        for (var j = 0; j < close.length; j++){ //loop fore close button
            close[j].onclick = function () { // on click event fire function
                var div = this.parentElement; // get parent element of child span with "X" (output will be li element)
                div.classList.add("zoomOut"); // and that li element get zoom out animation
                var async = setInterval(function () { //asynchronous function fore remove li element when user click on "X" span
                    div.style.display = "none";
                    clearInterval(async);
                    div.classList.remove("zoomOut");
                    div.classList.add("restore");
                },1000) // time fore remove li element must be equal animation time in css animation description
            }
        }
    }
});

// changing visibility by decrementing opacity from 1 to 0 and change style element to display "none".
function fadeOut(el){
    el.style.opacity = 1; //container get opacity = 1
    var decrementOpacity = setInterval(function(){ //start decrement Opacity function every 20 milisec
        el.style.opacity = el.style.opacity - 0.05;// which which takes 0,05 opacity every 20 milisec
        if (el.style.opacity <=0.05){ // so when container get 0 opacity
            clearInterval(decrementOpacity); //the function will finish taking the transparency of the element
            getPreLoader.style.display = "none"; // and hide this PreLoader container
        }
    }, 20);
}
// call the function fadeOut.
window.onload = function loadStart(){ //all this pre-loading "taking the transparency of container" start when page will being fully load
    setTimeout(function(){
        fadeOut(getPreLoader);
    },1000);
};

//makes li element checked by click event
ulElement.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){ //show to the function which li element was clicked
        ev.target.classList.toggle("checked"); //and add or remove checked class to "this" li element
    }
},false);

//Main function on click event fire
addTask.onclick = function addTask() {
    var newLi = document.createElement("li"); //create li element
    var inputValue = document.getElementById("myInput").value; //get user input text
    var lowerCaseInputValue = inputValue.toLowerCase(); //transform this text to lower case for compare the entered text with the array goods database keys
    var taskText = document.createTextNode(inputValue); //create text node with entered user text
    newLi.setAttribute("style", "display: flex;");//set attribute display to determine the visibility status of a block and its participation in price calculations
    newLi.appendChild(taskText);//and than add it to new li element
    if (inputValue === ""){ //if user enters "nothing" he or she gets alert
        document.getElementById("alert").innerHTML = "Your goods does not have a name?";
    }else { //in the other case the UL element will get new Li element
        document.getElementById("myUl").appendChild(newLi);
        document.getElementById("alert").innerHTML = ""; // and clear alert massage
    }
    document.getElementById("myInput").value = ""; // and input

    /*
    GOODS ARRAY
     */
    var goods = [ //this object can be moved to a separate file with ajax request
        {
            'name':'potato',
            'price': 3,
            'q': ' /kg'
        },
        {
            'name':'banana',
            'price': 5,
            'q': ' /kg'
        },
        {
            'name':'tomato',
            'price': 7,
            'q': ' /kg'
        },
        {
            'name':'potatoes',
            'price': '4',
            'q': ' /kg'
        },
        {
            'name':'cabbage',
            'price': '0.78',
            'q': ' /kg'
        },
        {
            'name':'carrot',
            'price': '4.5',
            'q': ' /kg'
        },
        {
            'name':'tomatoes',
            'price': '2.5',
            'q': ' /kg'
        },
        {
            'name':'cucumbers',
            'price': '0.56',
            'q': ' /kg'
        },
        {
            'name':'garlic',
            'price': '4',
            'q': ' /kg'
        },
        {
            'name':'bow',
            'price': '6',
            'q': ''
        },
        {
            'name':'beet',
            'price': '0.98',
            'q': ' /kg'
        },
        {
            'name':'greenery',
            'price': '0.99',
            'q': ' /kg'
        },
        {
            'name':'apple',
            'price': '1.2',
            'q': ' /kg'
        },
        {
            'name':'apples',
            'price': '1.2',
            'q': ' /kg'
        },
        {
            'name':'bananas',
            'price': '0.7',
            'q': ' /kg'
        },
        {
            'name':'oranges',
            'price': '1.5',
            'q': ' /kg'
        },
        {
            'name':'lemons',
            'price': '7',
            'q': ' /kg'
        },
        {
            'name':'butter',
            'price': '8',
            'q': ''
        },
        {
            'name':'kefir',
            'price': '6',
            'q': ''
        },
        {
            'name':'milk',
            'price': '5',
            'q': ''
        },
        {
            'name':'sour cream',
            'price': '12',
            'q': ''
        },
        {
            'name':'cottage cheese',
            'price': '0.5',
            'q': ''
        },
        {
            'name':'cheese',
            'price': '2',
            'q': ' /kg'
        },
        {
            'name':'cream cheese',
            'price': '4',
            'q': ''
        },
        {
            'name':'tea',
            'price': '0.95',
            'q': ''
        },
        {
            'name':'coffee',
            'price': '2.98',
            'q': ''
        },
        {
            'name':'sugar',
            'price': '7.99',
            'q': ' /kg'
        },
        {
            'name':'vodka',
            'price': '21.999',
            'q': ''
        },
        {
            'name':'bear',
            'price': '7.99',
            'q': ''
        },
        {
            'name':'juice',
            'price': '2.99',
            'q': ''
        },
        {
            'name':'bread',
            'price': '1.2',
            'q': ''
        },
        {
            'name':'meat',
            'price': '4.69',
            'q': ' /kg'
        },
        {
            'name':'water',
            'price': '7.99',
            'q': ''
        }
    ];

    for(var y = 0; y < goods.length; y++) { //if user enter goods which is located in the database, their price will be shown
        var spanPrice = document.createElement("span"); //fore display price addTask() function create span element
        var quality = document.createTextNode('price: ' + goods[y].price + '$' + goods[y].q); //and text with the price per piece or kilograms
        if (lowerCaseInputValue === goods[y].name) {
            spanPrice.className = "cost"; //add to span style class
            spanPrice.setAttribute("data-cost", goods[y].price); //add data-cost attribute with price value to span html element fore calculating operations
            spanPrice.appendChild(quality); //span element get text with price per piece or kilograms
            newLi.appendChild(spanPrice); //and than li element get this span
        }
    }

    var span = document.createElement("span"); //further our function addTask() create close button
    var txt = document.createTextNode("\u00D7");//with html "X" symbol
    span.className = "close"; // with css style
    span.appendChild(txt); // span get "X" symbol
    newLi.appendChild(span); // and li element get "X" span

    for (var j = 0; j < close.length; j++){ //loop fore close button
        close[j].onclick = function () { // on click event fire function
            var div = this.parentElement; // get parent element of child span with "X" (output will be li element)
            div.classList.add("zoomOut"); // and that li element get zoom out animation
            var async = setInterval(function () { //asynchronous function fore remove li element when user click on "X" span
                div.style.display = "none";
                clearInterval(async);
                div.classList.remove("zoomOut");
                div.classList.add("restore");
            },1000) // time fore remove li element must be equal animation time in css animation description
        }
    }
    sum(); // at the end of addTask() function we call calculation function for price if it was found in goods array
};
/*
sun function for all li element with style display flex
 */
function sum() {
    var totalPrice = document.getElementsByClassName("cost"); // get li collection with class "cost"
    var sum = 0; //star sum price value
    var li = document.querySelectorAll("li"); //select all li elements visible and invisible
    for(var f = 0; f < totalPrice.length; f++){ // loop across all li elements
        if(li[f].getAttribute("style") === "display: flex;") { //check visibility condition of li element/ If the block is visible, it will take part in the summation
            sum += Number(totalPrice[f].getAttribute("data-cost")); //sum all price value of all products found in the database
        }
    }
    document.getElementById("total").innerHTML ='Total cost: ' + sum.toFixed(2) + "$"; //and insert this sum in "total" html container
}

restore.onclick = function () { //button for restore deleted li elements
    var restoreLI = document.getElementsByClassName("restore");
    for(var r = 0; r < restoreLI.length; r++){ //across all li elements
        restoreLI[r].style.display = "flex";//by changing style display
    }
};

/* delete all items from localStore */
function cleanMemoryFunc(){
    window.localStorage.clear();
}

var clearMemory = document.getElementById("cleanMemory"); // fetch the "cleanMemory" button
clearMemory.addEventListener("click", cleanMemoryFunc); // add click event to "cleanMemory" button and run function

 /* Save all "li" items form the list to localStorage */

 saveAllLi.addEventListener("click", function() { // add event listener to "save" button
     window.localStorage.clear(); //clear memory before save new
     var item = document.getElementsByTagName("li"); // get all current "li" items
     for (var s = 0; s < item.length; s++) {
         localStorage.setItem([s], JSON.stringify(item[s].innerHTML)); //and save it key and value to localStore
     }
 });

help.addEventListener("click", function () {
    helpText.style.display = "block";
});
closeHelp.addEventListener("click", function () {
        helpText.style.display = "none";
});
/*
 the program can be perfected indefinitely
 */