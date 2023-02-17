// WRITE UP 
import writeupInfo from "./writeup-info.js";
var writteUp = writeupInfo(); 

// RENDER WRITE UP 

var isShowMore = false;

var writeUpContainer = document.querySelector (".write-up-container");
var moreBTN = document.querySelector (".more-btn");
var renderWritepUp = function () {
    var html = writteUp.map ((value) => {
            return `<a class="writeup-tag" href="${value.link}" style = "display: none">
            <div class="img-container" style="background-image: url(${value.img});">
            </div>
            <div class="info-container">
                <h1 class="name">${value.name}</h1>
                <p class="description">${value.description}</p>
                <div class="data-and-time">
                    <span class="date">${value.date}</span>
                    <span class="time">${value.time}</span>
                </div>
            </div>
        </a>`
    })

    writeUpContainer.innerHTML = html.join("");
}





renderWritepUp();


var writeUpTag = document.querySelectorAll (".writeup-tag");

var limit = 4;

var showWriteUp = function (limit) {
    var count = 0;
    writeUpTag.forEach ((value) => {
        count++;
        if (count <= limit) {
            value.style.display = "flex";
        }
    })
} 

showWriteUp(limit);

var showMore = function () {
    var times = 2;
    moreBTN.addEventListener ("click", () => {
        times++;
        showWriteUp (limit*times);
        if (limit*times >= writteUp.length) {
            moreBTN.style.display = "none";
        } 
        localStorage.setItem('isShowMore', true);
    })
}

showMore ();

if (localStorage.getItem ('isShowMore') === 'true') {
    showMore ();
    showWriteUp(writteUp.length);
    moreBTN.style.display = "none";
}


// ***************

