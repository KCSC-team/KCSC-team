// WRITE UP 

var writterUp = [
    {
        id: 1,
        img: "/asset/img/write-up-img/umdctf-2022.png",
        name: "WRITE-UP UMDCTF 2022",
        description: "Challenge type Web Pwn Crypto Forensic Misc Forensic Blue Description Larry gave me this python...",
        date: "2022, Mar 10",
        time: "36 minute read",
        link: "/asset/writeup/UMD-CTF-2022.html"
    },

    {   
        id: 2,
        img: "/asset/img/write-up-img/pragyanctf-2022.png",
        name: "WRITE-UP Pragyan CTF 2022",
        description: "Challenge type   Web   Pwnable   Reverse   Crypto   Reverse Oak Bài Này...",
        date: "2022, Mar 10",
        time: "60 minute read",
        link: "/asset/writeup/PRAGYAN-CTF-2022.html"
    },

    {
        id: 3,
        img: "/asset/img/write-up-img/svattt-2021-quals.png",
        name: "WRITE-UP SVATTT-CTF-2021-QUALS",
        description: "Challenge type * WEB * MISC * CRYPTO * REVERSE Crypto NoOne Link trên dẫn...",
        date: "2021, Oct 18",
        time: "17 minute read",
        link: "/asset/writeup/SVATTT-CTF-2021-QUALS.html"
    },

    {
        id: 4,
        img: "/asset/img/write-up-img/kma-ctf-2021.png",
        name: "WRITE-UP KMA-CTF-2021 LAN 2",
        description: "Challenge type  WEB  PWNABLE REVERSE   CRYPTOGRAPHY   FORENSIC   PWN 🌱...",
        date: "2021, Aug 30",
        time: "26 minute read",
        link: "/asset/writeup/KMA-CTF-2021-LAN-2.html"
    },

    {
        id: 5,
        img: "/asset/img/write-up-img/hpbd-ctf-2021.png",
        name: "KCSC BIRTHDAY CTF EVENT",
        description: "KCSC xin trân trọng giới thiệu sự kiện BIRTHDAY-CTF nhân dịp sinh nhật 2 tuổi...",
        date: "2021, Jul 08",
        time: "2 minute read",
        link: "/asset/writeup/KCSC-BIRTHDAY-CTF-EVENT.html"
    },


    {
        id: 6,
        img: "/asset/img/write-up-img/hcmus-ctf-2021.jpg",
        name: "WRITE-UP HCMUS-CTF-2021-FINAL",
        description: "Challenge type WEB WEB MIX PWNABLE CRYPTOGRAPHY REVERSE WEB GenshinWiki Description: Flag stored at ./flag.txt...",
        date: "2021, Jun 07",
        time: "43 minute read",
        link: "/asset/writeup/HCMUS-CTF-2021-FINAL.html"
    },


    {   
        id: 7,
        img: "/asset/img/write-up-img/hcmus-ctf-2021.jpg",
        name: "WRITE-UP HCMUS-CTF-2021-AQUALS",
        description: "*nOnSlaS* Challenge type   WEB   PWNABLE   REVERSE   CRYPTOGRAPHY   MISC   FORENSIC...",
        date: "2021, May 29",
        time: "33 minute read",
        link: "/asset/writeup/HCMUS-CTF-2021-AQUALS.html"
    },
    

]

// ****************


// RENDER WRITE UP 

var writeUpContainer = document.querySelector (".write-up-container");
var moreBTN = document.querySelector (".more-btn");
var renderWritepUp = function () {
    var html = writterUp.map ((value) => {
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
        if (limit*times >= writterUp.length) {
            moreBTN.style.display = "none";
        } 
    })
}

showMore ();

// ***************

