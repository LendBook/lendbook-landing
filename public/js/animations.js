window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);


  gsap.from("h1", {
    y: 30,
    opacity: 0,
    stagger: 0.05,
    delay: 0.05,
    duration: 0.5,
  });

  gsap.from(".h1-paragraph", {
    y: -20,
    opacity: 0,
    stagger: 0.5,
    delay: 0.5,
    duration: 1,
  });


  gsap.from(".up-left-leverage-feat", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".up-left-leverage-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".down-left-leverage-feat", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".down-left-leverage-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".down-right-leverage-feat", {
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".down-right-leverage-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".up-right-leverage-feat", {
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".up-right-leverage-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".up-left-lender-feat", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".up-left-lender-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".up-right-lender-feat", {
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".up-right-lender-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".down-left-lender-feat", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".down-left-lender-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".down-right-lender-feat", {
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".down-right-lender-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".up-left-market-feat", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".up-left-market-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });

  gsap.from(".up-right-market-feat", {
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".up-right-market-feat",
      start: "top bottom",
      end: "top+=100px center",
      scrub: true,
      /* markers: true, */
    },
  });


  gsap.from(".footer-cta", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "footer",
      start: "top+=100px bottom",
      end: "top-=150px 60%",
      scrub: 1,
      /* markers: true, */
    },
  });

  gsap.from(".footer-illustration", {
    opacity: 0,
    stagger: 0.5,
    delay: 1,
    duration: 0.5,
  });
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("scroll", () => {
  ScrollTrigger.refresh();
});
