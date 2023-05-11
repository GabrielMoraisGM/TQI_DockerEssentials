let buttonEl = document.querySelector(".burguer_button");
let optionsEl = document.querySelector(".options_closed");
let footerEl = document.querySelector(".footer")

buttonEl.addEventListener("click", function(){
    optionsEl.classList.toggle("active")
})
