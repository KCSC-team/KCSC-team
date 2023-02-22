    var menuBtn = document.querySelector ("#header i");
    var navContainer = document.querySelector (".nav-container");
    console.log (menuBtn)
    var activeNavContainer = function () {
        menuBtn.addEventListener ("click", () => {
            navContainer.classList.toggle ("active");
            console.log (true)
        })
    }

    window.addEventListener("click", (e) => {
        if (e.target != navContainer && e.target != menuBtn) {
            navContainer.classList.remove ("active");
        }
    })

    activeNavContainer();