// JavaScript Document
// auteur: Sanne 't Hooft



//-----------------------------   VERHAAL CARDS
(function () {

    var cmdaCards = document.querySelectorAll("article");
    for (var i = 0; i < cmdaCards.length; i++) {

        var handvat = document.createElement("span");
        handvat.classList.add("card-handvat");
        cmdaCards[i].appendChild(handvat);

        handvat = cmdaCards[i].querySelector(".card-handvat");
        handvat.addEventListener("click", function (event) {
            this.parentNode.classList.toggle("active");
        });
    }
})();


//-----------------------------   LEESLIJST BUTTON
var leeslijstButton = document.querySelector("#boekenlijst");
var leeslijstButton2 = document.querySelector("#boekenlijst2");
var leeslijstButton3 = document.querySelector("#boekenlijst3");
//leeslijst button toggle wordt aangeroepen
leeslijstButton.addEventListener("click", toggleLeeslijst);
leeslijstButton2.addEventListener("click", toggleLeeslijst2);
leeslijstButton3.addEventListener("click", toggleLeeslijst3);
// leeslijst button wordt getoggled met css class
function toggleLeeslijst() {
    leeslijstButton.classList.toggle("checked");
}

function toggleLeeslijst2() {
    leeslijstButton2.classList.toggle("checked");
}

function toggleLeeslijst3() {
    leeslijstButton3.classList.toggle("checked");
}


//-----------------------------   DOWNLOAD
var downloadButton = document.querySelector("#download");
var downloadButton2 = document.querySelector("#download2");
var downloadButton3 = document.querySelector("#download3");

downloadButton.addEventListener("click", toggleDownload);
downloadButton2.addEventListener("click", toggleDownload2);
downloadButton3.addEventListener("click", toggleDownload3);


function toggleDownload() {
    downloadButton.classList.add("downloading");
    if (downloadButton.innerHTML = "Download") {
        downloadButton.innerHTML = "Downloading";
        setTimeout(function () {
            downloadButton.innerHTML = "Gedownload";
        }, 4000);
    } else {
        downloadButton.innerHTML = "Download";
    }
}

function toggleDownload2() {
    downloadButton2.classList.toggle("downloading");
    if (downloadButton2.innerHTML = "Download") {
        downloadButton2.innerHTML = "Downloading";
        setTimeout(function () {
            downloadButton2.innerHTML = "Gedownload";
        }, 4000);
    } else {
        downloadButton2.innerHTML = "Download";
    }
}

function toggleDownload3() {
    downloadButton3.classList.toggle("downloading");
    if (downloadButton3.innerHTML = "Download") {
        downloadButton3.innerHTML = "Downloading";
        setTimeout(function () {
            downloadButton3.innerHTML = "Gedownload";
        }, 4000);
    } else {
        downloadButton3.innerHTML = "Download";
    }
}
