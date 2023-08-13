const backdrop = document.getElementsByClassName("backdrop")[0];
const mobileBar = document.getElementsByClassName("mobile-bar")[0];
const button = document.getElementById("mobile-bar-button");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

let isMenuOpen = false;

function toggleBarAndBackdropClasses(action) {
  if (action === "open") {
    mobileBar.classList.add("open");
    backdrop.classList.add("open");
  } else if (action === "close") {
    mobileBar.classList.remove("open");
    backdrop.classList.remove("open");
  }
}

function toggleRowsOnEnter(action) {
  if (action === "open") {
    row1.classList.add("enter");
    row2.classList.add("enter");
  } else if (action === "close") {
    row1.classList.remove("enter");
    row2.classList.remove("enter");
  }
}

function toggleRowsOnClick(action) {
  if (action === "open") {
    row1.classList.add("open");
    row2.classList.add("open");
  } else if (action === "close") {
    row1.classList.remove("open");
    row2.classList.remove("open");
  }
}

button.addEventListener("click", () => {
  if (!isMenuOpen) {
    isMenuOpen = true;
    toggleBarAndBackdropClasses("open");
    toggleRowsOnClick("open");
    toggleRowsOnEnter("close");
  } else {
    isMenuOpen = false;
    toggleBarAndBackdropClasses("close");
    toggleRowsOnClick("close");
    toggleRowsOnEnter("open");
  }
});

button.addEventListener("mouseenter", () => {
  if (!isMenuOpen) {
    toggleRowsOnEnter("open");
  }
});

button.addEventListener("mouseleave", () => {
  if (!isMenuOpen) {
    toggleRowsOnEnter("close");
  }
});

backdrop.addEventListener("click", () => {
  isMenuOpen = false;
  toggleBarAndBackdropClasses("close");
  toggleRowsOnClick("close");
});
