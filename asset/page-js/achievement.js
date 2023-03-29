import list from './achievementList.js'

const achievementList = list();
const root = document.querySelector(".container")

const rendering = () => {
    var container = achievementList.map ((item) => {
        return `<div class='prize-tag'>
            <h2>
                ${item.year}
            </h2>
            <div class="prize-list">
                  
            </div>
        </div>`

    })
    root.innerHTML =container.join('')

    var container = achievementList.forEach ((item, index) => {
        var html = Array.from(item.info).map ((curr) => {
            return `<div class="prize-item">
                <img src=${curr.link} alt="">
                <div class="info">
                    <div class="triangle"></div>
                    <h3 class="title">
                        ${curr.name}
                    </h3>
                    <div class="content">
                        ${curr.award}
                    </div>
                </div>
            </div>`
        })
        document.querySelectorAll('.prize-list')[index].innerHTML = html.join('')
    })
}


rendering();


window.onload = () => {
    const ACMitems = document.querySelectorAll ('.prize-item')
    ACMitems.forEach ((item, index) => {
        item.onmouseover = () => {
            item.querySelector ('.info').style.display = "block"
        }
        item.onmouseout = () => {
            item.querySelector ('.info').style.display = "none"
        }
    })
}
