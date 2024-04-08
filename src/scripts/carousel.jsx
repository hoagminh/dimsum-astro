const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
let i = 0,
  j = 1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 90}deg`;

    // biome-ignore lint/complexity/noForEach: <explanation>
    slides.forEach((slide) => {
      slide.style.rotate = `${i * 90}deg`;
      console.log("slide", slide);
    });

    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
    activeSlide.classList.add("active");
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    j === 4 && (j = 0);
  }, 7000);
};

intervalFn();

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
