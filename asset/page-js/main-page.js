localStorage.setItem("isShowMore", false);
const roleBtn = document.querySelectorAll("#content .role-btn");
console.log(roleBtn);

let init = {
  type: "ALL",
  year: 1,
  role: "",
};
localStorage.setItem("filters", JSON.stringify(init));

roleBtn.forEach((item) => {
  item.onclick = () => {
    let value = item.querySelector("p").innerText;
    if (value != "FORMER") {
      let formData = {
        ...JSON.parse(localStorage.getItem("filters")),
        type: "CURRENT",
        role: value,
        year: 1,
      };
      localStorage.setItem("filters", JSON.stringify(formData));
    }
  };
});
