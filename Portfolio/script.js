// Everything under this eventlistener!!
document.addEventListener("DOMContentLoaded", () => {

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // --- Detecting if the user is on android ---
    (function detectAndroid() {
      const isAndroid = /Android/i.test(navigator.userAgent);
        
      if (isAndroid) {
        document.body.classList.add("is-android");
      }
    })();


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

    // Animations!! My bread and butter
    // --- Hero Intro --- 
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
  
    heroTl
      .from(".header", {
        y: -80,
        opacity: 0,
        duration: 1
      })
      .from(
        ".hero-text .creative-developer",
        {
          y: 30,
          opacity: 0,
          duration: 0.8
        },
        "-=0.6"
      )
      .from(
        ".hero-title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          // skewY: 5
        },
        "-=0.6"
      )
      .from(
        ".hero-subtitle",
        {
          y: 30,
          opacity: 0,
          duration: 0.8
        },
        "-=0.7"
      )
      .from(
        ".hero-actions",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1
        },
        "-=0.6"
      )
      .from(
        ".hero-core",
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)"
        },
        "-=0.8"
      )
      /* We leave the rings alone since CSS spins them, but we fade them in */
      .from(
        ".hero-orbit-ring",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out"
        },
        "-=0.8"
      )
      .from(
        ".hero-orbit-Ring",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out"
        },
        "-=0.8"
      )
      .from(
        ".floating-badge",
        {
          y: 20,
          opacity: 0,
          duration: 0.6
        },
        "-=0.5"
      );


    /* --- Scroll Reveal (Global) --- */
    const fadeUpElements = document.querySelectorAll(
      ".section-title, .section-text, .about-card, .about-me, .project-card, .contact-form, .contact-grid > div"
    );
  
    fadeUpElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });


});

