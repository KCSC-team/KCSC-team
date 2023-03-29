var $ = document.querySelector.bind (document)
var $$ = document.querySelectorAll.bind (document)

import membersList from "../../members/members.js"

var members = membersList();
var categoryContainer = $('.category-container')
var statusContainer = $('.status-container')
var contentNavOverlay = $('.content-nav-overlay')
var categoryBtn = $('.selected i')
var selected = document.querySelector('.selected')
var allMemberContainer = document.querySelector ('.members-container-all .members-container')
var tabAll = document.querySelector ('.members-container-all')
var statusList = statusContainer.querySelectorAll ('div:nth-child(-n+2)')
var categoryOptions = categoryContainer.querySelectorAll ('ul > li')
var optionContainer = categoryContainer.querySelector ('ul')
var roleTabOptions = document.querySelectorAll (".members-type-container > div");
var roleTab = document.querySelector ('.members-type-container');
var seeMore = document.querySelector ('.see-more')
var seeAll = document.querySelector ('.see-all')
var memberTag = document.querySelector ('.members-tag')
var percentLine = document.querySelector ('.inner-line')
var loadingScreen = document.querySelector ('.loading-screen')
console.log (loadingScreen)
var percent = 10;
const percentLoading = setInterval(() => {
    percentLine.style.width = `${percent++}%`
    if (percent === 90) {
        console.log (true)
        clearInterval (percentLoading)
    }
}, 1000);

    percentLine.onchange = () => {
        if (percent === 90) {
            clearInterval (percentLoading)
        }
    }

window.onload = () => {
    memberTag.style.opacity = '1';
    console.log ("100%")
    percentLine.style.width = `100%`
    clearInterval(percentLoading);   
    setTimeout (() => {
        loadingScreen.style.display = 'none'
    }, 500)
}

console.log (roleTab)



var renderLimit = (members, limit) => {
    
    var html = []
    for (let i = 0; i < limit; i++) {
        if (members[i]) {
            html.push ( `
                <div class="member">
                    <div class="member-avt">
                            <img src="${members[i].img}">
                            <div class="member-slogan">
                                <div>${members[i].name} says:</div>
                                <p>${members[i].slogan}</p>
                            </div>
                            <div class="member-overlay"></div>
                    </div>
                        <div class="menber-info">
                            <div class="name">${members[i].name}</div>
                            <div class="role">${members[i].role}</div>
                        </div>
                </div>`)
        } 
    }


        setTimeout(() => {
            allMemberContainer.innerHTML = html.join('')
        }, 500);
}

renderLimit (members, members.length);


function renderCurrentMembers (years, team, limit) {
    var html = []
    var defaultLimit = 8;
    console.log (categoryOptions);
    members.forEach (member => {
        var end = (member.to != 'now') ? parseInt (member.to) : (new Date().getFullYear())
        console.log (end)
        if (member.team === team && parseInt (member.from) <= parseInt (years) && (end) >= parseInt (years)) {
            html.push (member)
        }
    })
    if (html.length <= limit) {
        seeAll.style.display = "none"
        seeMore.style.display = "none"
    }
    renderLimit (html, limit);

    seeMore.onclick = () => {
        defaultLimit += limit;
        if (defaultLimit >= html.length) {
            seeMore.style.display = "none"
            seeAll.style.display = "none"
        }
        renderLimit (html, defaultLimit)
    }
    
    
    
    seeAll.onclick = () => {
        seeMore.style.display = 'none'
        seeAll.style.display = 'none'
        renderLimit (html ,members.length)
    }
} 



function init() {
    seeMore.style.display = 'block'
    seeAll.style.display = 'block'
    var defaultLimit = 8;
    renderLimit (members, 8)
            statusContainer.style.width = "100%"
            categoryContainer.style.width = "0%"
            document.querySelector('.selected i').style.opacity = '0'
            document.querySelector('.selected i').style.transform = 'none'
            document.querySelector('.selected').style.opacity = '0'
            optionContainer.style.opacity ='0'
            seeMore.onclick = () => {
                 defaultLimit += 8;
                if (defaultLimit >= members.length) {
                    seeMore.style.display = "none"
                    seeAll.style.display = "none"
                }
                renderLimit (members, defaultLimit)
            }
            
            
            
            seeAll.onclick = () => {
                seeMore.style.display = 'none'
                seeAll.style.display = 'none'
                renderLimit (members ,members.length)
            }
}


init ();

0
Array.from (roleTabOptions).forEach (option => {
    var overlay = option.parentElement.querySelector ('.members-tab-overlay')
    option.onclick = () => {
        seeMore.style.display = 'block'
        seeAll.style.display = 'block'
        if (selected.querySelector ("p").innerText === "YEARS") {
            if (option.innerText === "CTFER") {
                var defaultLimit = 8;
                    var html = members.reduce((acc, member) => {
                        if (member.team === "CTF") {
                            acc.push (member)
                        }
                        return acc;
                    }, [])
                    console.log (html);
                    renderLimit (html, 8)
                    seeMore.onclick = () => {
                        defaultLimit += 8;
                        if (defaultLimit >= html.length) {
                            seeMore.style.display = "none"
                            seeAll.style.display = "none"
                        }
                        renderLimit (html, defaultLimit)
                    }
                    
                    
                    
                    seeAll.onclick = () => {
                        seeMore.style.display = 'none'
                        seeAll.style.display = 'none'
                        renderLimit (html ,html.length)
                    }
                    document.querySelector ('.media-tab').classList.remove ('active');
                   option.classList.add ('active')
                    overlay.style.left = option.offsetLeft + "px";
                }
                else {
                    document.querySelector ('.ctfer-tab').classList.remove ('active');
                    option.classList.add ('active')
                    seeMore.style.display = 'block'
                    seeAll.style.display = 'block'
                    var defaultLimit = 8;
                    var html = members.reduce((acc, member) => {
                        if (member.team === "Media") {
                            acc.push (member)
                        }
                        return acc;
                    }, [])
                    renderLimit (html, 8);
                    seeMore.onclick = () => {
                        defaultLimit += 8;
                        if (defaultLimit >= html.length) {
                            seeMore.style.display = "none"
                            seeAll.style.display = "none"
                        }
                        renderLimit (html, defaultLimit);
                    }
                    
                    
                    
                    seeAll.onclick = () => {
                        seeMore.style.display = 'none'
                        seeAll.style.display = 'none'
                        renderLimit (html ,html.length)
                    }
                    overlay.style.left = '50%';
                }
        }
        else {
            if (option.innerText === "CTFER") {
                renderCurrentMembers (selected.querySelector ("p").innerText, "CTF", 8);
                    option.classList.add ("active");
                    roleTabOptions.forEach (item => {
                        if (item != option) {
                            item.classList.remove ('active')
                        }
                    })
                    overlay.style.left = option.offsetLeft + "px";
            }
            else {
                renderCurrentMembers (selected.querySelector ('p').innerText, "Media", 8);
                    option.classList.add ("active");
                    roleTabOptions.forEach (item => {
                        if (item != option) {
                            item.classList.remove ('active')
                        }
                    })
                    overlay.style.left = '50%';
            }
        }
    }
})



statusList.forEach(option => {
    option.onclick = (e) => {
        var defaultLimit = 8;
        if (option.innerHTML === 'ALL')
        {   
            renderLimit (members ,defaultLimit)
            seeMore.style.display = 'block'
            seeAll.style.display = 'block'
            seeMore.onclick = () => {
                defaultLimit += 8;
                if (defaultLimit >= members.length) {
                    seeMore.style.display = "none"
                    seeAll.style.display = "none"
                }
                renderLimit (members, defaultLimit);
            }
            
            
            
            seeAll.onclick = () => {
                seeMore.style.display = 'none'
                seeAll.style.display = 'none'
                renderLimit (members ,members.length)
            }
            roleTab.style.display = 'none'
            option.classList.add ("active");
            statusList.forEach (item => {
                if (item !== option) {
                    item.classList.remove ('active')
                }
            })
            tabAll.style.display = 'block'
            statusContainer.style.width = "100%"
            categoryContainer.style.width = "0%"
            contentNavOverlay.style.left = option.offsetLeft + "px";
            document.querySelector('.selected i').style.opacity = '0'
            document.querySelector('.selected i').style.transform = 'none'
            document.querySelector('.selected').style.opacity = '0'
            document.querySelector('.selected').style.display = 'none'
            optionContainer.style.opacity ='0'
            optionContainer.style.display = 'none'
            console.log (true)
            document.querySelector('.selected p').innerText = 'YEARS'
            categoryContainer.classList.remove ('active')
        }
        else {
            document.querySelector ('.media-tab').classList.remove ("active");
            document.querySelector ('.ctfer-tab').classList.add ("active");
            document.querySelector (".members-tab-overlay").style.left = 0;
            var defaultLimit = 8;
            var html = members.reduce((acc, member) => {
                if (member.team === "CTF") {
                    acc.push (member)
                }
                return acc;
            }, [])
            console.log (html);
            renderLimit (html, 8)
            seeMore.onclick = () => {
                defaultLimit += 8;
                if (defaultLimit >= html.length) {
                    seeMore.style.display = "none"
                    seeAll.style.display = "none"
                }
                renderLimit (html, defaultLimit)
            }
            
            
            
            seeAll.onclick = () => {
                seeMore.style.display = 'none'
                seeAll.style.display = 'none'
                renderLimit (html ,html.length)
            }
            seeMore.style.display = 'block'
            seeAll.style.display = 'block'
            roleTab.style.display = 'flex'
            option.classList.add ("active");
            roleTab.style.width = "80%";
            statusList.forEach (item => {
                if (item !== option) {
                    item.classList.remove ('active')
                }
            })
            statusContainer.style.width = "80%"
            categoryContainer.style.width = "20%"
            document.querySelector('.selected i').style.opacity = '1'
            document.querySelector('.selected i').style.transform = 'rotate(90deg)'
            document.querySelector('.selected').style.opacity = '1' 
            document.querySelector('.selected').style.display = 'flex'
            categoryContainer.classList.add ('active')
            setTimeout(() => {
            contentNavOverlay.style.left = '50%';
            selected.classList.add ('active')
            optionContainer.style.opacity = '1'
            optionContainer.style.display = 'block';
            }, 50);
        }
    }
});



selected.onclick = function () {
    this.classList.toggle ('active')
    if (this.classList.contains('active')) {
        roleTab.style.width = "80%";
        optionContainer.style.display = 'block';
        optionContainer.style.opacity = '1'
        document.querySelector('.selected i').style.transform = 'rotate(90deg)'
    }
    else {
        roleTab.style.width = "100%";
        optionContainer.style.display = 'none';
        optionContainer.style.opacity = '0'
        document.querySelector('.selected i').style.transform = 'rotate(0deg)'
    }
}



categoryOptions.forEach (item => {
    item.onclick = (e) => {
        seeAll.style.display = "block";
        seeMore.style.display = "block";
        if (document.querySelector('.media-tab').classList.contains('active')) {
            renderCurrentMembers (item.innerText, "Media", 8)
        }
        if (document.querySelector('.ctfer-tab').classList.contains('active')) {
            console.log (item.innerText)
            renderCurrentMembers (item.innerText, "CTF", 8)
        }
        roleTab.style.width = "100%";
        selected.querySelector('p').innerText = item.innerText;
        selected.classList.remove ('active')
        document.querySelector('.selected i').style.transform = 'none'
        optionContainer.style.opacity = '1'
        optionContainer.style.display = 'none'
    }
})


window.onclick = (e) => {
    if (selected.classList.contains ('active')) {
        if (e.target != selected && e.target != selected.querySelector ('p') && e.target != selected.querySelector ('i')) {
            selected.classList.remove ("active");
            optionContainer.style.display = 'none';
            optionContainer.style.opacity = '0'
            roleTab.style.width = "100%"
            document.querySelector('.selected i').style.transform = 'rotate(0deg)'
        }
    }
}




renderLimit (members ,8)









