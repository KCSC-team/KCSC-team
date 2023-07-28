var menuBtn = document.querySelector("#header i");
var navContainer = document.querySelector(".nav-container");
var activeNavContainer = function () {
  menuBtn.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });
};

window.addEventListener("click", (e) => {
  if (e.target != navContainer && e.target != menuBtn) {
    navContainer.classList.remove("active");
  }
});

let headerList = navContainer.querySelectorAll("#header a");
headerList.forEach((item) => {
  item.onclick = () => {
    let init = {
      type: "ALL",
      year: 1,
      role: "",
    };
    localStorage.setItem("filters", JSON.stringify(init));
  };
});

activeNavContainer();
