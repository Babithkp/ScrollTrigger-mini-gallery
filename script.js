gsap.registerPlugin(ScrollTrigger);

gsap.to(".page-gallery--2, .page-gallery--4", {
  y: 1570,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-gallery--3",
    start: "25% bottom",
    end: "bottom top",
    scrub: 1,
    toggleActions: "restart none none none",
    //play pause resume reverse restart reset complete
    //onEnter onLeave onEnterBack onLeaveBack
    // markers: true,
  },
});
// gsap.to(".page-gallery--2", {