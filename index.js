

gsap.registerPlugin(ScrollTrigger);
//page 4----------------------------------------------
gsap.to(".biggorup h1", {
  y: 1,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 50%", 
    end: "bottom 50%", 
    
  },
});
gsap.to("#progress1", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 50%", 
    end: "bottom 50%", 
    
  },
});
gsap.to("#progress2", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 50%", 
    end: "bottom 50%", 
    
  },
});
gsap.to("#progress3", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#progress-bar1",
    start: "top 50%", 
    end: "bottom 50%", 
    
  },
});
gsap.to("#progress4", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#progress-bar1",
    start: "top 50%", 
    end: "bottom 50%", 
    
  },
});



