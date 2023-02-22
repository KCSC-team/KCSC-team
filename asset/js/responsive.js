
    console.log (true)
    var menuBtn = document.querySelector ("#header i");
    var navContainer = document.querySelector (".nav-container");

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