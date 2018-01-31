//-----------------------------   VERDER LEZEN

var verderLezen = document.querySelector("#progressbar");
var leesblok = document.querySelector("#lezen");
var trigger = document.querySelector("#verderlezen");
var nietVerderLezen = document.querySelector("#nietverder");

function leesProgress() {
    verderLezen.classList.add("progress");
    setTimeout(function () {
        leesblok.classList.add("stopverderlezen");
        var body = document.documentElement;
        body.scrollTop += 800;
    }, 5000);

}

function nietVerder() {
    leesblok.classList.add("stopverderlezen");
}


trigger.addEventListener("click", leesProgress);
nietVerderLezen.addEventListener("click", nietVerder);
