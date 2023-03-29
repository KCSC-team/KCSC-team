const nextBtn = document.querySelector ('.next-btn')
const prevBtn = document.querySelector ('.prev-btn')
const pages = document.querySelectorAll ('.page')
const pageContainer = document.querySelector ('.page-container')

console.log (nextBtn, prevBtn)


const App = {
    currentIndex: 0,

    currentPagePosition: 0,

    nextPage () {
        this.currentIndex += 1
        this.currentPagePosition += 100
        if (this.currentIndex === pages.length) {
            this.currentIndex = 0;
            this.currentPagePosition = 0;
            pageContainer.style.left = '-' + this.currentPagePosition + '%';
        } else {
            pageContainer.style.left = '-' + this.currentPagePosition + '%';
        }
        console.log (this.currentIndex)
        console.log (this.currentPagePosition)
    },

    prevPage () {
        this.currentIndex -= 1
        this.currentPagePosition -= 100
        if (this.currentIndex === -1) {
            this.currentIndex = pages.length-1;
            this.currentPagePosition = (pages.length - 1) * 100;
            pageContainer.style.left = '-' + this.currentPagePosition + '%';
        } else {
            pageContainer.style.left = '-' + this.currentPagePosition + '%';
        }
        console.log (this.currentIndex)
        console.log (this.currentPagePosition)
    },

    start () {
        nextBtn.onclick = () => {
            console.log (this)
            this.nextPage();
            pages[this.currentIndex].scrollTo (0,0)
        }

        prevBtn.onclick = () => {
            console.log (this)
            this.prevPage();
            pages[this.currentIndex].scrollTo (0,0)
        }
    }

}

App.start()