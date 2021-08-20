$(document).ready(function () {
   // console.log('Сайт готов к манипуляциям');
var currentFloor = 2; // переменная где хранится текущий этаж
var currentUp = $(".counter-up");// увеличение этажа по кнопке вверх
var currentDown = $(".counter-down");// уменьшение этажа по кнопке вниз
var floorPath = $(".home-image path"); // Каждый отдельный этаж в svg
var modal = $(".modal");
var modalCloseButton = $(".modal-close-button");
var viewFlatsButton = $(".view-flats");

// on('click' при клике или on('mouseover' при наведении
   floorPath.on('mouseover', function(){
       floorPath.removeClass('current-floor');  // удаляем активный класс у этажей
currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик
    $(`[data-floor=${currentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж, чтобы после ухода с этажа он был подсвеченный
});

   floorPath.on('click', toggleModal); // при клике на этаж, открывается модальное окно
   modalCloseButton.on('click', toggleModal); // при клике на кнопку закрыть, закрывается модальное окно
   viewFlatsButton.on('click', toggleModal); // при клике на кнопку закрыть, закрывается модальное окно
    

currentUp.on('click', function(){ // отслеживаем клик по кнопке вверх
if(currentFloor<18) { // проверяем  значение этажа, оно не должно быть больше 18
    currentFloor++; // прибовляем один этаж
usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем номер этажа с 1 например в формат 01 
$(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик
//$(".home-image path");
floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
}
});

currentDown.on('click', function(){
if(currentFloor > 2) {
    currentFloor--;
usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
$(".counter").text(usCurrentFloor);
//$(".home-image path");
floorPath.removeClass('current-floor');
$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
}
});

function toggleModal(){ // функция открыть/закрыть окно
    modal.toggleClass("is-open");
}


});