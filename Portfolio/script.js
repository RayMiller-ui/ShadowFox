
// Everything under this eventlistener!!
document.addEventListener("DOMContentLoaded", () => {

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // --- Magnetic Buttons ---
    const magneticBtns = document.querySelectorAll(".btn, .contact, .nav-link");
    magneticBtns.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {

            // Defining x and y movement variables for gsap 
            const bound = btn.getBoundingClientRect();
            const x = e.clientX - bound.left - bound.width/2;
            const y = e.clientY - bound.top - bound.height/2;

            gsap.to(btn, {

                //x: x*3, is telekinesis 😅
                x:x*0.3,
                y: y*0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
            });
        });
    });

    /* --- Scroll Reveal (Global) --- */
    // const fadeUpElements = document.querySelectorAll(
    //   ".section-title, .section-text, .about-card, .project-card, .contact-form, .contact-grid > div"
    // );
  
    // fadeUpElements.forEach((el) => {
    //   gsap.from(el, {
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top 85%",
    //       toggleActions: "play none none reverse"
    //     },
    //     y: 40,
    //     opacity: 0,
    //     duration: 0.8,
    //     ease: "power3.out"
    //   });
    // });


});

