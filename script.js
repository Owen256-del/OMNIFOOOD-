console.log("Hello world!");

const h1 = document.querySelector(".heading-primary");
const myName = "Mukwaya Owen";
h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});
// SET CURRENT YEAR
const currentYear = document.querySelector(".current-year");
currentYear.textContent = new Date().getFullYear();

// MAKE MOBILE NAVIGATION WORK

const btnNavigation = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navList = document.querySelectorAll(".main-nav-link");

btnNavigation.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  btnNavigation.classList.toggle("nav-open");
});
navList.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    btnNavigation.classList.remove("nav-open");
  });
});

//////////////////////////////////////////////////////
//smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/////////////////////////////////////////////////////////////
// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (enteries) {
    const ent = enteries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Inthe view Port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*

*/
