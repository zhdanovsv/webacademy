// Кнопка добавить элемент
var addbtn = document.getElementById("addbtn");
// Кнопка удалить элемент
var delbtn = document.getElementById("delbtn");
// переменная возвращает элемент main - основной контейнер на странице
// var main = document.getElementById("main");
// Список элементов на форме
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");


console.log(story);
// console.log(ul[0]);

// main.style.background = "green";

// Добавление элемента

function addItem(){
	var newElLi = document.createElement("li");
	newElLi.innerHTML = "Новый пункт списка";
	newElLi.className = "item";
	myList.appendChild(newElLi);
	popup.style.display = "none";
}

function delItem(){
	myList.removeChild(story[0]);
	if (story.length == 0) {
		popup.style.display = "block";
	}
}

function closePopup(){
	// popup.style.display = "none";
	document.getElementsByClassName("popup")[0].style.display = "none";
}


addbtn.addEventListener("click", addItem);
delbtn.addEventListener("click", delItem);
close.addEventListener("click", closePopup);


