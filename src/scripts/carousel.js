const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const slide = document.querySelector(".slide");

let i = 0,
  j = 1,
  rot = 0,
  intervalId,
  intervalImg;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 90}deg`;
    intervalImgRot();
    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
    activeSlide.classList.add("active");
    j === 4 && (j = 0);
  }, 7000);
};

const intervalImgRot = () => {
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.transform = `rotate(${-90}deg)`;
  }
};

intervalFn();
//setInterval(intervalImgRot, 7000);

// controlLinks.forEach((control) => {
//   control.addEventListener("click", () => {
//     clearInterval(intervalId);
//     carousel.style.rotate = `-${
//       (i - j + Number(control.dataset.index)) * 90
//     }deg`;

//     document.querySelector(".slide.active").classList.remove("active");
//     const activeSlide = document.querySelector(
//       `.slide:nth-child(${control.dataset.index})`
//     );
//     activeSlide.classList.add("active");

//     document.querySelector("a.active").classList.remove("active");
//     control.classList.add("active");
//   });
// });

carousel.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  console.log("Pause");
});

carousel.addEventListener("mouseleave", () => {
  intervalFn();
  console.log("Play");
});
