var addTask = document.getElementById("addBtn"); // access to add button
var close = document.getElementsByClassName("close");
var check = document.querySelector("ul");
var getPreLoader = document.getElementById("preLoader"); // get an element
// changing visibility by decrementing opacity from 1 to 0 and change style element to display "none".

function fadeOut(el){
    el.style.opacity = 1;
    var decrementOpacity = setInterval(function(){
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){
            clearInterval(decrementOpacity);
            getPreLoader.style.display = "none";
        }
    }, 20);
}
// calling the function fadeOut.
window.onload = function loadStart(){
    setTimeout(function(){
        fadeOut(getPreLoader);
    },1000);
};

check.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
},false);

addTask.onclick = function addTask() {
    var newLi = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var lowerCaseInputValue = inputValue.toLowerCase();
    var taskText = document.createTextNode(inputValue);
    newLi.appendChild(taskText);
    if (inputValue === ""){
        document.getElementById("alert").innerHTML = "Your goods does not have a name?";
    }else {
        document.getElementById("myUl").appendChild(newLi);
        document.getElementById("alert").innerHTML = "";
    }
    document.getElementById("myInput").value = "";

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

    for(var y = 0; y < goods.length; y++) {
        if (lowerCaseInputValue === goods[y].name) {
            var spanPrice = document.createElement("span");
            var quality = document.createTextNode('price: ' + goods[y].price + '$' + goods[y].q);
            spanPrice.className = "cost";
            spanPrice.setAttribute("data-cost", goods[y].price);
            spanPrice.appendChild(quality);
            newLi.appendChild(spanPrice);
        }
    }

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newLi.appendChild(span);

    for (var j = 0; j < close.length; j++){
        close[j].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    sum();
};

function sum() {
    var totalPrice = document.getElementsByClassName("cost");
    var sum = 0;
    for(var f = 0; f < totalPrice.length; f++){
        sum += Number(totalPrice[f].getAttribute("data-cost"));
    }
    document.getElementById("total").innerHTML ='Total cost: ' + sum.toFixed(2) + "$";
}

