gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline();
t1.from(".blue", {
    yPercent : -1000,
    duration: 1,
    ease: Linear.easeNone
}).from(".pink", {
    xPercent : -100,
    duration: 1,
    ease: Linear.easeNone
}).from(".purple", {
    xPercent: 500,
    duration: 1,
    ease: Linear.easeNone
})

const t2 = gsap.timeline();
t2.from(".orange", {
    xPercent : -100,
    duration: 0,
    ease: Linear.easeNone
}).from(".green", {
    yPercent : -5000,
    duration: 0,
    ease: Linear.easeNone
}).from(".red", {
    xPercent: -500,
    duration: 0,
    ease: Linear.easeNone
})

ScrollTrigger.create({
    trigger: ".panel",
    animation: t2,
 
 
    toggleActions: "play restart complete reverse",
    end :"+=500%",
})


ScrollTrigger.create({
    trigger: ".panel-2",
    animation: t1,
    start: "90% bottom",
    end: "bottom bottom",
  
    toggleActions: "play complete reverse reset"
})
