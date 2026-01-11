import gsap from 'gsap'
// pari and aradhya and hero

const contact = document.querySelector(".contact");

gsap.to(contact, {
    y:2,
    duration: 3,
    ease: "power2.out",
    repeat: -1,
    yoyo: true,
});