AOS.init();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


var tl = gsap.timeline();

tl.from("#a", {
  y: 50,
  opacity:0,
  duration:0.3,
});
tl.from("#b", {
  y: 50,
  opacity:0,
  duration:0.3,
});
tl.from("#c", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#d", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#e", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#f", {
  y: 30,
  opacity:0,
  duration:0.3,
});
tl.from("#g", {
  y: 30,
  opacity:0,
  duration:0.3,
});
   


 const text = document.querySelector('.text');
    text.innerHTML = text.textContent
      .split("")
      .map(letter => `<span>${letter}</span>`)
      .join("");

    // 2. Select all spans
    const letters = document.querySelectorAll('.text span');

    // 3. Create timeline


    tl.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.1,  // delay between each letter
      duration: 0.6,
      ease: "back.out(1.7)"
    });