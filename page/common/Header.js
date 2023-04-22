const initState = () => {
  let init = {
    type: "ALL",
    year: 1,
    role: "",
  };
  localStorage.setItem("filters", JSON.stringify(init));
};

export default function Header() {
  return `<div class="header-container">
        <a href="/index.html" class="club-img">
            <img src="/asset/img/club_logo.jpg" alt="">
        </a>
        <i class="fa-solid fa-list"></i>
        <div class="nav-container">
            <ul>
                <li class="members" onclick=(initState)><a href="/page/team_members/team_members.html">Members</a></li>
                <li class="about_us"><a href="/page/about_us/about_us.html">About us</a></li>
                <li class="history"><a href="/page/team_history/team_history.html">History</a></li>
                <li class="write_up"><a href="/page/write_up/write_up.html">Write up</a></li>
                <li class="achievement"><a href="/page/achievement/achievement.html">Achievement</a></li>
            </ul>
        </div>
    </div>`;
}

//  style="background-color: var(--white);"
//  style="color: var(--blue);"
