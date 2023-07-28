import Header from "./Header.js";
import Footer from "./Footer.js";


const headerContainer = document.querySelector ('#header');
const footerContainer = document.querySelector ("#footer");

headerContainer.innerHTML = Header();
footerContainer.innerHTML = Footer();



var checkActive = {
    'members': {
        render () {
            document.querySelector ('.members').style.backgroundColor = "var(--white)"
            document.querySelector ('.members > a').style.color = "var(--blue)" 
        }
    },
    'about_us': {
        render () {
            document.querySelector ('.about_us').style.backgroundColor = "var(--white)"
            document.querySelector ('.about_us > a').style.color = "var(--blue)" 
        }
    },
    'history': {
        render () {
            document.querySelector ('.history').style.backgroundColor = "var(--white)"
            document.querySelector ('.history > a').style.color = "var(--blue)" 
        }
    },
    'write_up': {
        render () {
            document.querySelector ('.write_up').style.backgroundColor = "var(--white)"
            document.querySelector ('.write_up > a').style.color = "var(--blue)" 
        }
    },
    'writeup': {
        render () {
            document.querySelector ('.write_up').style.backgroundColor = "var(--white)"
            document.querySelector ('.write_up > a').style.color = "var(--blue)" 
        }
    },
    'achievement': {
        render () {
            document.querySelector ('.achievement').style.backgroundColor = "var(--white)"
            document.querySelector ('.achievement > a').style.color = "var(--blue)" 
        }
    },
    
}



const activeBtn = (string) => {
    for (const key in checkActive) {
        if (string.includes (key)) {
            checkActive[key].render();
        }
    }
}


activeBtn (location.href);