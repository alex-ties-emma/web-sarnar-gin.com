import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

export function animateVista() {

    if (document.querySelector('.eds-vista')) {
        document.querySelector('.eds-vista').classList.remove('invisible');

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
        for (let i = 0; i < 4; i++) {
            gsap.fromTo(".eds-vista__hero-line:nth-child(" + i + ")", {

                opacity: 0,
                scale: 0.9,
                translateY: '4em',
                translateX: '4em',
            }, {
                delay: 0.2 * i,
                duration: 2,
                ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                opacity: 1,
                scale: 1,
                translateY: 0,
                translateX: 0,
            })
        }

        for (let i = 0; i < 3; i++) {
            let item = document.querySelector('.eds-vista__intro-wrapper').children[i];
            gsap.fromTo(item, {

                opacity: 0,
                scale: 0.9,
                translateY: '2em',
                translateX: '2em',
            }, {
                delay: 1 + (0.2 * i),
                duration: 2,
                ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                opacity: 1,
                scale: 1,
                translateY: 0,
                translateX: 0,

                scrollTrigger: {
                    trigger: '.eds-vista__intro-wrapper',
                    start: 'top 90%'
                }
            })
        }

        gsap.fromTo(".eds-vista", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.75
        })

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
            scale: 1,
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
            scale: 1,
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
            scrub: true
        };

        let pixelStartPositionBaccheY = introTextBoundingRect.y + introTextBoundingRect.height - 50;
        let pixelStartPositionRamettoY = introTextBoundingRect.y + introTextBoundingRect.height + 50;
        let pixelStartPositionBaccheX = introTextBoundingRect.x;

        gsap.fromTo(".eds-vista__fly-image-bacche", {
            x: pixelStartPositionBaccheX,
            y: pixelStartPositionBaccheY,
        }, {
            x: pixelStartPositionBaccheX,
            y: pixelStartPositionBaccheY - 40,

            scrollTrigger: decoScrollTrigger2
        });

        gsap.fromTo(".eds-vista__fly-image-rametto", {
            x: pixelStartPositionBaccheX,
            y: pixelStartPositionRamettoY
        }, {
            x: pixelStartPositionBaccheX,
            y: pixelStartPositionRamettoY - 50,

            scrollTrigger: decoScrollTrigger2
        });
    }

}

export function animateTextVista() {


    if (document.querySelector('.eds-vista-text')) {
        document.querySelector('.eds-vista-text').classList.remove('invisible');
        for (let i = 0; i < 4; i++) {
            gsap.fromTo(".eds-vista-text__hero-line:nth-child(" + i + ")", {

                opacity: 0,
                scale: 0.9,
                translateY: '4em',
                translateX: '4em',
            }, {
                delay: 0.2 * i,
                duration: 2,
                ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                opacity: 1,
                scale: 1,
                translateY: 0,
                translateX: 0,
            })
        }
    }
}

export function animateTextImage() {

    if (document.querySelector('.eds-text-image')) {
        document.querySelectorAll('.eds-text-image').forEach(item => {
            item.classList.remove('invisible');


            let scrollTrigger = {
                trigger: item,
                start: "top 75%"
            }

            gsap.fromTo(item.querySelector('.eds-text-image__decorations'), {
                opacity: 0,
                translateY: '1.5em'
            }, {
                opacity: 1,
                translateY: '0',
                ease: 'power2.out',
                duration: 0.8,
                delay: 0.25,
                scrollTrigger: scrollTrigger
            })


            gsap.fromTo(item.querySelector('.eds-text-image__main-text'), {
                opacity: 0,
                scale: 0.9,
                translateY: '4em',
                translateX: '4em',
            }, {
                delay: 0.2,
                duration: 2,
                ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                opacity: 1,
                scale: 1,
                translateY: 0,
                translateX: 0,
                scrollTrigger: scrollTrigger
            })


            gsap.fromTo(item.querySelector('.eds-text-image__image'), {
                opacity: 0
            }, {
                opacity: 1,
                ease: 'power2.out',
                duration: 0.8,
                delay: 0.25,
                scrollTrigger: scrollTrigger
            })


            gsap.fromTo(item.querySelector('.eds-text-image__image img'), {
                scale: 1.05,
            }, {
                scale: 1,
                ease: 'power2.out',
                duration: 0.8,
                delay: 0.25,
                scrollTrigger: scrollTrigger
            })
        });
    }

}

export function animateDividingTitle() {


    if (document.querySelector('.eds-dividing-title')) {

        document.querySelectorAll('.eds-dividing-title').forEach(item => {
            item.classList.remove('invisible');


            let scrollTrigger = {
                trigger: item,
                start: "top 75%"
            }

            let letters = item.querySelectorAll('.eds-dividing-title__title span');

            for (let i = 0; i < letters.length; i++) {

                gsap.fromTo(letters[i], {
                    opacity: 0,
                    translateY: '1em',
                    translateX: '1em',
                    scale: 0.95,
                }, {
                    delay: 0.2 + 0.025 * i,
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                    translateX: 0,
                    scrollTrigger: scrollTrigger
                })
            }
        });
    }


}

export function animateContact() {
    if (document.querySelector('.eds-contact')) {

        document.querySelectorAll('.eds-contact').forEach(item => {
            item.classList.remove('invisible');

            let scrollTrigger = {
                trigger: item,
                start: "top 75%"
            }

            for (let i = 0; i < 4; i++) {
                gsap.fromTo(item.querySelector(".eds-contact__header span:nth-child(" + i + ")"), {

                    opacity: 0,
                    scale: 0.9,
                    translateY: '4em',
                    translateX: '4em',
                }, {
                    delay: 0.2 * i,
                    duration: 2,
                    ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                    translateX: 0,
                    scrollTrigger: scrollTrigger
                })
            }


            let inputs = item.querySelectorAll('.eds-input');

            for (let i = 0; i < inputs.length; i++) {
                let input = inputs[i];

                gsap.fromTo(input, {
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
                }, {
                    ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                    duration: 1.4,
                    delay: 0.2 * i,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    scrollTrigger: scrollTrigger,
                })

            }

            gsap.fromTo(item.querySelector('.eds-checkbox, .eds-form > :last-child'), {
                opacity: 0,
            }, {
                delay: 0.2 * (inputs.length + 1),
                opacity: 1,
            })


        });
    }
}

export function animateIngredients() {

    if (document.querySelector('.eds-ingredients-gallery')) {

        document.querySelectorAll('.eds-ingredients-gallery').forEach(item => {
            item.classList.remove('invisible');

            let scrollTrigger = {
                trigger: item,
                start: "top 75%"
            }

            let panels = item.querySelectorAll('.eds-ingredients-gallery__item');

            for (let i = 0; i < panels.length; i++) {
                let panel = panels[i];
                console.log({panel});
                gsap.fromTo(panel.querySelector('.eds-ingredients-gallery__item-headline'), {

                    opacity: 0,
                    scale: 0.9,
                    translateY: '4em',
                    translateX: '4em',
                }, {
                    delay: 0.2 * i,
                    duration: 2,
                    ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                    translateX: 0,
                    scrollTrigger: scrollTrigger
                })


                console.log({test: panel.querySelector('.eds-ingredients-gallery__item-image')});

                gsap.fromTo(panel.querySelector('.eds-ingredients-gallery__item-image'), {
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                    opacity: 0,
                }, {
                    opacity: 1,
                    delay: 0.2 * i,
                    duration: 1,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                })

            }

        })

    }


}

export function animateWhereToBuy() {


    if (document.querySelector('.eds-footer')) {
        document.querySelector('.eds-footer').classList.remove('invisible');

        document.querySelectorAll('.eds-footer').forEach(item => {
            item.classList.remove('invisible');

            let scrollTrigger = {
                trigger: item,
                start: "top 75%"
            }

            let panels = item.querySelectorAll('.eds-footer__item');

            gsap.fromTo(item.querySelector('.eds-footer__image'), {

                opacity: 0,
            }, {
                opacity: 1,
                scrollTrigger: scrollTrigger
            })


            for (let i = 0; i < panels.length; i++) {
                let panel = panels[i];

                gsap.fromTo(panel.querySelector('.eds-footer__title'), {

                    opacity: 0,
                    scale: 0.9,
                    translateY: '4em',
                    translateX: '4em',
                }, {
                    delay: 0.2 * i,
                    duration: 2,
                    ease: CustomEase.create("custom", "M0,0 C0,0.782 0.516,1 1,1 "),
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                    translateX: 0,
                    scrollTrigger: scrollTrigger
                })
                gsap.fromTo(panel.querySelector('.eds-footer__description'), {

                    opacity: 0,
                }, {
                    delay: 0.6 + (0.2 * i),
                    opacity: 1,
                    scrollTrigger: scrollTrigger
                })



            }
        });
    }

}

export function animateFooter() {
    if (document.querySelector('.eds-footer')) {

        document.querySelectorAll('.eds-footer').forEach(item => {
            item.classList.remove('invisible');

            let scrollTrigger = {
                trigger: item,
                start: "top 100%",
                markers: true
            }

            gsap.fromTo(item, {

                opacity: 0,
            }, {
                delay: 0.2,
                opacity: 1,
                scrollTrigger: scrollTrigger
            })

        });
    }
}