// var testimonialItems = document.querySelectorAll(".item label");
// var timer;
// function cycleTestimonials(index) {
//    timer = setTimeout(function() {
//     var evt;
//     if (document.createEvent){
//       //If browser = IE, then polyfill
//       evt = document.createEvent('MouseEvent');
//       evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//     } else {
//       //If Browser = modern, then create new MouseEvent
//       evt = new MouseEvent("click", {
//             view: window,
//             bubbles: true,
//             cancelable: true,
//             clientX: 20
//           });
//     }
//     var ele = "." + testimonialItems[index].className;
//     var ele2 = document.querySelector(ele)
//     ele2.dispatchEvent(evt);
//     index++; // Increment the index
//     if (index >= testimonialItems.length) {
//       index = 0; // Set it back to `0` when it reaches `3`
//     }
//     cycleTestimonials(index); // recursively call `cycleTestimonials()`
//     document.querySelector(".testimonials").addEventListener("click", function() {
//       clearTimeout(timer); //stop the carousel when someone clicks on the div
//     });
//   }, 2000); //adjust scroll speed in miliseconds
// }
// //run the function
// cycleTestimonials(0);






var testimonialItems = document.querySelectorAll(".item label");
var timer;

function cycleTestimonials(index) {
    timer = setTimeout(function() {
        var ele2 = testimonialItems[index]; // Берём сам label
        var radioInput = ele2.previousElementSibling; // Получаем <input> перед <label>
        
        if (radioInput) {
            radioInput.checked = true; // Выбираем нужный radio
        }
        
        index++; // Следующий индекс
        if (index >= testimonialItems.length) {
            index = 0; // Вернёмся к первому
        }
        
        cycleTestimonials(index); // Рекурсивный вызов
    }, 2000); // Скорость в мс
}

// Останавливаем карусель при клике
document.querySelector(".testimonials").addEventListener("click", function() {
    clearTimeout(timer);
});

// Запускаем карусель
cycleTestimonials(0);
