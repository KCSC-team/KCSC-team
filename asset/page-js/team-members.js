import membersList from "../../members/members.js";


// **************



// MEMBERS NAV

// Year navigation
var members = membersList();
var yearValue = document.querySelector(".main-value");
var yearNav = document.querySelector (".years-nav");
var yearNavOptions = document.querySelectorAll (".years-nav li");
var yearNavModal = document.querySelector (".years-nav ul");
var memberRedirect = document.querySelectorAll (".role-btn");
var membersContainer = document.querySelectorAll (".members-container");
var formerContainer = document.querySelector ("#Former");
var mediaContainer = document.querySelector ("#Media");
var ctferContainer = document.querySelector ("#Ctfer");
var mainContainer = document.querySelector ("#content");


var renderDefault = function () {
    var html1 = members.map((value) => {
        if (value.team === "Former" && value.year == "2019") {
            return `
            <div class="member">
                           <div class="member-avt">
                                <img src="${value.img}">
                                <div class="member-slogan">
                                    <div>${value.name} say:</div>
                                    <p>${value.slogan}</p>
                                </div>
                                <div class="member-overlay"></div>
                           </div>
                            <div class="menber-info">
                                <div class="name">${value.name}</div>
                                <div class="role">${value.role}</div>
                            </div>
                       </div>`
        }
    }) 
    formerContainer.innerHTML = html1.join("");

    var html2 = members.map((value) => {
        if (value.team === "Media" && value.year == "2019") {
            return `
            <div class="member">
                           <div class="member-avt">
                                <img src="${value.img}">
                                <div class="member-slogan">
                                    <div>${value.name} say:</div>
                                    <p>${value.slogan}</p>
                                </div>
                                <div class="member-overlay"></div>
                           </div>
                            <div class="menber-info">
                                <div class="name">${value.name}</div>
                                <div class="role">${value.role}</div>
                            </div>
                       </div>`
        }
    }) 
    mediaContainer.innerHTML = html2.join("");

    var html3 = members.map((value) => {
        if (value.team === "CTF" && value.year == "2019") {
            return `
            <div class="member">
                           <div class="member-avt">
                                <img src="${value.img}">
                                <div class="member-slogan">
                                    <div>${value.name} say:</div>
                                    <p>${value.slogan}</p>
                                </div>
                                <div class="member-overlay"></div>
                           </div>
                            <div class="menber-info">
                                <div class="name">${value.name}</div>
                                <div class="role">${value.role}</div>
                            </div>
                       </div>`
        }
    }) 
    ctferContainer.innerHTML = html3.join("");

}


renderDefault();

var renderFormer = function () {
    yearNavOptions.forEach ((year) => {
        year.addEventListener ("click", () => {
            var html = members.map((value) => {
                if (value.team === "Former" && value.year == year.innerText) {
                    return `
                    <div class="member">
                           <div class="member-avt">
                                <img src="${value.img}">
                                <div class="member-slogan">
                                    <div>${value.name} say:</div>
                                    <p>${value.slogan}</p>
                                </div>
                                <div class="member-overlay"></div>
                           </div>
                            <div class="menber-info">
                                <div class="name">${value.name}</div>
                                <div class="role">${value.role}</div>
                            </div>
                       </div>`
                }
            }) 
            mainContainer.style.height = "auto";
            formerContainer.innerHTML = html.join("");
        })
    })
}

renderFormer ();


var renderCTF = function () {
    yearNavOptions.forEach ((year) => {
        year.addEventListener ("click", () => {
            var html = members.map((value) => {
                if (value.team === "CTF" && value.year == year.innerText) {
                    return `
                    <div class="member">
                           <div class="member-avt">
                                <img src="${value.img}">
                                <div class="member-slogan">
                                    <div>${value.name} say:</div>
                                    <p>${value.slogan}</p>
                                </div>
                                <div class="member-overlay"></div>
                           </div>
                            <div class="menber-info">
                                <div class="name">${value.name}</div>
                                <div class="role">${value.role}</div>
                            </div>
                       </div>`
                }
            }) 
            ctferContainer.innerHTML = html.join("");
        })
    })
}

renderCTF ();


var renderMedia = function () {
    yearNavOptions.forEach ((year) => {
        year.addEventListener ("click", () => {
            var html = members.map((value) => {
                if (value.team === "Media" && value.year == year.innerText) {
                    return `
                    <div class="member">
                           <div class="member-avt">
                                <img src="${value.img}">
                                <div class="member-slogan">
                                    <div>${value.name} say:</div>
                                    <p>${value.slogan}</p>
                                </div>
                                <div class="member-overlay"></div>
                           </div>
                            <div class="menber-info">
                                <div class="name">${value.name}</div>
                                <div class="role">${value.role}</div>
                            </div>
                       </div>`
                }
            }) 
            mediaContainer.innerHTML = html.join("");
        })
    })
}

renderMedia ();


var navOpen = function () {
    yearNav.addEventListener ("click", () => {
        yearNavModal.classList.toggle("active");
    } )
}


var NavOptionsClick = function () { 
    yearNavOptions.forEach ((value) => {
        value.addEventListener ("click", () => {
            yearValue.innerText = value.innerText;
        })
    })
}

NavOptionsClick ();
navOpen();
// **********


// Role navigation
var roleBtn = document.querySelectorAll (".role-nav ul a");


var roleBtnActive = function () {
    roleBtn.forEach ((value) => {
        value.addEventListener ("click", (e) => {
            e.preventDefault();
            if (value.innerText === "Former") {
                formerContainer.classList.add ("active");
                membersContainer.forEach ((value) => {
                    if (value != formerContainer) {
                        value.classList.remove ("active");
                    }
                })
            }
            if (value.innerText === "Media") {
                mediaContainer.classList.add ("active");
                membersContainer.forEach ((value) => {
                    if (value != mediaContainer) {
                        value.classList.remove ("active");
                    }
                })
            } 
            if (value.innerText === "Ctfer") {
                ctferContainer.classList.add ("active");
                membersContainer.forEach ((value) => {
                    if (value != ctferContainer) {
                        value.classList.remove ("active");
                    }
                })
            } 
            location.href = value.href;
            value.classList.add ("active");
            roleBtn.forEach ((current) => {
                if (current != value) {
                    current.classList.remove ("active");
                }
            })
        })
    })
}

roleBtnActive ();


var checkActiveRole = () => {
    roleBtn.forEach ((value) => {
        if (value.classList.contains ("active")) {
            if (value.innerText == "Former") {
                formerContainer.classList.add ("active");
            }
        }
    })
}

checkActiveRole(); 



var checkLocationHref = function () {
    var currentLink = location.href;
    if (currentLink.includes ("#Former")) {
        roleBtn.forEach ((current) => {
            if (current.innerText === "Former") {
                current.classList.add ("active");
            }
            else {
                current.classList.remove ("active");
            }
        })
        formerContainer.classList.add ("active");
        membersContainer.forEach ((value) => {
            if (value != formerContainer) {
                value.classList.remove ("active");
            }
        })
    }
    else if (location.href.includes ("#Media")) {
        roleBtn.forEach ((current) => {
            if (current.innerText === "Media") {
                current.classList.add ("active");
            }
            else {
                current.classList.remove ("active");
            }
        })
        mediaContainer.classList.add ("active");
        membersContainer.forEach ((value) => {
            if (value != mediaContainer) {
                value.classList.remove ("active");
            }
        })
    }
    else if (location.href.includes ("#Ctfer")) {
        roleBtn.forEach ((current) => {
            if (current.innerText === "Ctfer") {
                current.classList.add ("active");
            }
            else {
                current.classList.remove ("active");
            }
        })
        ctferContainer.classList.add ("active");
        membersContainer.forEach ((value) => {
            if (value != ctferContainer) {
                value.classList.remove ("active");
            }
        })
    }
}

checkLocationHref ();



