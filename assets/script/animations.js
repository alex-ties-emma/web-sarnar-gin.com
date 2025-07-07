import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateVista() {

    let heroImageBoundingRect = document.querySelector('.eds-vista__hero-image').getBoundingClientRect();
    let heroEndBoundingRect = document.querySelector('.eds-vista__intro-spacer').getBoundingClientRect();

    let introTextBoundingRect = document.querySelector('.eds-vista__hero-text').getBoundingClientRect();


    let pixelStartPositionGinX = heroImageBoundingRect.x + heroImageBoundingRect.width / 2;
    let pixelStartPositionGinY = heroImageBoundingRect.y + heroImageBoundingRect.height / 2;

    let pixelEndPositionGinX = heroEndBoundingRect.x + heroEndBoundingRect.width / 2;
    let pixelEndPositionGinY = heroEndBoundingRect.y + heroEndBoundingRect.height / 2;


    console.log({
        x: pixelStartPositionGinX,
        y: pixelStartPositionGinY,
    });

    console.log({
        x: pixelEndPositionGinX,
        y: pixelEndPositionGinY,
    });


    gsap.fromTo(".eds-vista__fly-image-gin", {
        x: pixelStartPositionGinX,
        y: pixelStartPositionGinY,
        rotate: '25deg'
    }, {
        x: pixelEndPositionGinX,
        y: pixelEndPositionGinY,
        rotate: 0,

        scrollTrigger: {
            trigger: ".eds-vista",
            start: "top top",
            end: "bottom center",
            scrub: true,
        }
    });

    let pixelStartPositionFlowerX = pixelStartPositionGinX - 150;
    let pixelStartPositionGineproX = pixelStartPositionGinX + 170;
    let pixelStartPositionGineproY = pixelStartPositionGinY + 20;

    let decoScrollTrigger = {
        trigger: ".eds-vista",
        start: "top top",
        end: "+=150",
        scrub: true,
    };

    gsap.fromTo(".eds-vista__fly-image-rosa-canina", {
        x: pixelStartPositionFlowerX,
        y: pixelStartPositionGinY,
        opacity: 1,
        rotate: '-20deg'
    }, {
        opacity: 0,
        scale: 0.9,
        translateY: pixelStartPositionGinY,
        scrollTrigger: decoScrollTrigger
    });

    gsap.fromTo(".eds-vista__fly-image-ginepro", {
        x: pixelStartPositionGineproX,
        y: pixelStartPositionGineproY,
        opacity: 1,
        rotate: '-14deg'
    }, {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: decoScrollTrigger
    });

    let decoScrollTrigger2 = {
        trigger: ".eds-vista",
        start: "top top",
        end: "bottom center",
        scrub: true,
        markers: true // optional for debugging
    };

    let pixelStartPositionBaccheY = introTextBoundingRect.y + introTextBoundingRect.height - 50;
    let pixelStartPositionRamettoY = introTextBoundingRect.y + introTextBoundingRect.height + 50;
    let pixelStartPositionBaccheX = introTextBoundingRect.x;

    gsap.fromTo(".eds-vista__fly-image-bacche", {
        x: pixelStartPositionBaccheX,
        y: pixelStartPositionBaccheY,
    }, {
        x: pixelStartPositionBaccheX,
        y: pixelStartPositionBaccheY - 20,

        scrollTrigger: decoScrollTrigger2
    });

    gsap.fromTo(".eds-vista__fly-image-rametto", {
        x: pixelStartPositionBaccheX,
        y: pixelStartPositionRamettoY
    }, {
        x: pixelStartPositionBaccheX,
        y: pixelStartPositionRamettoY - 30,

        scrollTrigger: decoScrollTrigger2
    });


}