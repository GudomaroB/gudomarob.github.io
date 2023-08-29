// Category Drop
const category = document.querySelector(".category");
const categoryDropMenu = document.querySelector(".category__drop-menu");
const categorySpan = document.querySelector(".category__span");
category.addEventListener("click", function () {
  categoryDropMenu.classList.toggle("dn");
  categorySpan.classList.toggle("rotatespan");
});

// login PopUp
const popUpBtn = document.querySelector(".login__block-login");
const popUpMenu = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__flex-close");
const overflow = document.querySelector(".oveflow");

popUpBtn.addEventListener("click", function () {
  popUpMenu.classList.toggle("dn");
  overflow.classList.toggle("dn");
  signModal.classList.add("dn");
});

closeBtn.addEventListener("click", function () {
  popUpMenu.classList.toggle("dn");
  overflow.classList.toggle("dn");
});

overflow.addEventListener("click", function () {
  popUpMenu.classList.toggle("dn");
  overflow.classList.toggle("dn");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !popUpMenu.classList.contains("dn")) {
    popUpMenu.classList.toggle("dn");
    overflow.classList.toggle("dn");
  }
});

// signUp PopUp
const signUpBtn = document.querySelector(".login__block-signup");
const signModal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__flex-close");
const overflowSignUp = document.querySelector(".overflow__signup");

signUpBtn.addEventListener("click", function () {
  signModal.classList.toggle("dn");
  popUpMenu.classList.add("dn");
  overflowSignUp.classList.toggle("dn");
});

modalClose.addEventListener("click", function () {
  signModal.classList.toggle("dn");
  overflowSignUp.classList.toggle("dn");
});

overflowSignUp.addEventListener("click", function () {
  signModal.classList.toggle("dn");
  overflowSignUp.classList.toggle("dn");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !signModal.classList.contains("dn")) {
    signModal.classList.toggle("dn");
    overflowSignUp.classList.toggle("dn");
  }
});
// humburger
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".humburger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });
});

// moreBtn add card

const moreBtn = document.querySelector(".more-btn");
const cardWrapper = document.querySelector(".card--wrapper");
const cardContainer = document.querySelector(".card");

class ClassNew {
  constructor(img, descr, desc1, zvezda, nums, oldaPrice, price, parent) {
    this.img = img;
    this.descr = descr;
    this.desc1 = desc1;
    this.zvezda = zvezda;
    this.nums = nums;
    this.oldaPrice = oldaPrice;
    this.price = price;
    this.parent = parent;
  }

  render() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",
      `
    <div class="card--wrapper">
    <div class="card--wrapper__images">
      <img
        src="${this.img}"
        alt="#"
        class="card--wrapper__img"
      />
    </div>
    <p class="card--wrapper__text">
      Tanah Air Team
    </p>
    <p class="card--wrapper__text1">${this.desc1}</p>
    <div class="rating">
      <div class="rating-flex">
        <span class="rating-span rating-span1">${this.zvezda}</span>
        <span class="rating-span rating-span2">${this.zvezda}</span>
        <span class="rating-span rating-span3">${this.zvezda}</span>
        <span class="rating-span rating-span4">${this.zvezda}</span>
        <span class="rating-span rating-span5">${this.zvezda}</span>
      </div>
      <span class="rating-calc">(${this.nums})</span>
    </div>
    <div class="money">
      <span class="money-skidka">$${this.oldaPrice}</span>
      <span class="money-price">$${this.price}</span>
    </div>
  </div>
    `
    );
  }
}

moreBtn.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    new ClassNew(
      `img/im-${i + 1}.png`,
      `${i + 1}`,
      "привет всем",
      `&#9733;`,
      `${Math.floor(Math.random() * 345) + 1}`,
      `${Math.trunc(Math.random() * 2345) + 1}`,
      `${Math.trunc(Math.random() * 3245) + 1}`,
      ".card"
    ).render();
  }
});

// add-photo

document.querySelector(".add-photo").addEventListener("click", myAddPhoto);

function myAddPhoto() {
  const addPhotoContainer = document.querySelector(".categorys__grid");
  addPhotoContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="categorys__card">
      <img src="https://source.unsplash.com/random/315x300" alt="" />
    </div>
    <div class="categorys__card">
      <img src="https://source.unsplash.com/random/321x300" alt="" />
    </div>
    <div class="categorys__card">
      <img src="https://source.unsplash.com/random/317x300" alt="" />
    </div>
    <div class="categorys__card">
      <img src="https://source.unsplash.com/random/322x300" alt="" />
    </div>
    <div class="categorys__card">
      <img src="https://source.unsplash.com/random/313x300" alt="" />
    </div>
    <div class="categorys__card">
      <img src="https://source.unsplash.com/random/325x300" alt="" />
    </div>
  `
  );
}
// random solor sectionBest

const best = document.querySelector(".section-best");

function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
}

best.addEventListener("click", function (e) {
  this.style.background = randomColor();
});

// Делигирование

const tabBtn = document.querySelectorAll(".art__btn");
const tabConteinerButton = document.querySelector(".art__grid");
const btnContent = document.querySelectorAll(".contens__wrap");

tabConteinerButton.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".art__btn");

  tabBtn.forEach(function (el) {
    el.classList.remove("art__btn-active");
  });

  clicked.classList.add("art__btn-active");

  btnContent.forEach(function (el) {
    el.classList.remove("conte__wrapp-active");
  });

  console.log(clicked.dataset.tab);

  document
    .querySelector(`.contens__wrap--${clicked.dataset.tab}`)
    .classList.add("conte__wrapp-active");
});
// oapcity nav-menu

const header = document.querySelector(".header");

header.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navopacity")) {
    const link = e.target;
    const siblings = link.closest("header").querySelectorAll(".navopacity");

    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
    });
  }
});
header.addEventListener("mouseout", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navopacity")) {
    const link = e.target;
    const siblings = link.closest("header").querySelectorAll(".navopacity");

    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = 1;
      }
    });
  }
});
//! HEDER POSITION-FIXED / SCROLL
const scrollTops = document.querySelector(".topscroll");
const headers = document.querySelector(".header");
const options = {
  threshold: 0,
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(document.querySelector(".section-best"));

function callBack(entries) {
  if (!entries[0].isIntersecting) {
    headers.classList.add("sticky");
    scrollTops.classList.toggle("dn");
  } else {
    headers.classList.remove("sticky");
    scrollTops.classList.toggle("dn");
  }
}
//! ВСПЛЫТИЕ СЕКЦИЙ\

const opts = {
  threshold: 0.15,
};

const sectionsAll = document.querySelectorAll(".sectionss");
const allSecObserver = new IntersectionObserver(fullFunc, opts);

function fullFunc(entries, obs) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.remove("section--hidden");
    obs.unobserve(entries[0].target);
  }
}

sectionsAll.forEach(function (sec) {
  allSecObserver.observe(sec);
  sec.classList.add("section--hidden");
});

//! скол до верха

const blockcontenth1 = document.querySelector(".block-content__h1");
scrollTops.addEventListener("click", function () {
  blockcontenth1.scrollIntoView({ behavior: "smooth" });
});
//! слайдер

const sliderz = document.querySelector(".sliderz");
const slideAll = document.querySelectorAll(".slide");
const btnLeftSlider = document.querySelector(".btnLeftSlider");
const btnRightSlider = document.querySelector(".btnRightSlider");

let curSlider = 0;
const maxSlider = slideAll.length;

function goToSlider(slide) {
  slideAll.forEach(function (a, b) {
    a.style.transform = `translateX(${100 * (b - slide)}%)`;
  });
}

goToSlider(0);

function nexSlider() {
  if (curSlider === maxSlider - 1) {
    curSlider = 0;
  } else {
    curSlider++;
  }
  goToSlider(curSlider);
}

function prevSlider() {
  if (curSlider === 0) {
    curSlider = maxSlider - 1;
  } else {
    curSlider--;
  }
  goToSlider(curSlider);
}

btnRightSlider.addEventListener("click", nexSlider);
btnLeftSlider.addEventListener("click", prevSlider);
