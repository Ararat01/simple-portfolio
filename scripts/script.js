let position = 0;
let wheelCount = 0;
let sections = [
  document.getElementById("home"),
  document.getElementById("about"),
  document.getElementById("projects"),
  document.getElementById("contact"),
];
let navbar = ["home_nav", "about_nav", "projects_nav", "contact_nav"];
let navbarMobile = ["5", "69", "133", "197"];
let userScroll = false;

sections[position].scrollIntoView();
if (document.body.offsetWidth > 1024) {
  document.getElementById(navbar[position]).style.color = "#7562E0";
}
document.addEventListener("scroll", () => {
  if (userScroll) {
    document.getElementById("circle").style.opacity = "0";
  } else {
    setTimeout(() => {
      userScroll = true;
    }, 600);
  }
});
document.addEventListener(
  "wheel",
  function (event) {
    if (document.body.offsetWidth <= 1024) {
      return;
    }
    event.preventDefault();
    if (event.wheelDelta < 0) {
      wheelCount < 0 ? (wheelCount = 0) : wheelCount++;
    } else if (event.wheelDelta > 0) {
      wheelCount > 0 ? (wheelCount = 0) : wheelCount--;
    }

    if (position != sections.length - 1 && wheelCount >= 4) {
      position += 1;
      sections[position].scrollIntoView();
      navigate(position + 1);
      wheelCount = 0;
    } else if (position > 0 && wheelCount <= -4) {
      position -= 1;
      sections[position].scrollIntoView();
      navigate(position + 1);

      wheelCount = 0;
    }
  },
  { passive: false }
);

function removeNavbar() {
  for (let i = 0; i < navbar.length; i++) {
    document.getElementById(navbar[i]).style.color = "#fff";
  }
}
function navigateMobile(pos) {
  userScroll = false;
  position = pos - 1;
  sections[position].scrollIntoView();
  document.getElementById(
    "circle"
  ).style.transform = `translateX(${navbarMobile[position]}px)`;
  document.getElementById("circle").style.opacity = "1";
}
function navigate(pos) {
  position = pos - 1;
  sections[position].scrollIntoView();
  if (document.body.offsetWidth > 1024) {
    removeNavbar();
    document.getElementById(navbar[position]).style.color = "#7562E0";
  }
}
setInterval(() => {
  wheelCount = 0;
}, 500);
