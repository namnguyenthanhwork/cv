$(document).ready(function () {
    //typing name
    new Typed(".typing", {
        strings: ["Thành Nam"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: !0
    });

    /*------------------- Ripples ------------------------ */
    $("#profile__ripple").ripples({
        resolution: 512,
        dropRadius: 10
    });

    /*---------------------- Progress bar --------------------*/
    const bars = document.querySelectorAll(".progress__bar");
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%";
    });

    /*--------------------- Counter up -----------------------*/
    const counters = document.querySelectorAll(".counter");

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function () {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1);
                } else
                    counter.innerText = target;
            }
            countIt();
        })
    }
    runCounter();

    let counterSection = document.querySelector(".counter__section");
    let options = {
        rootMargin: '0px 0px -50px 0px'
    }
    let done = 0;

    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();
        }
    }, options)
    sectionObserver.observe(counterSection);

    /*------------------------ Filter --------------------*/
    $(window).on("load", function () {
        $('body').addClass('loaded');

        var $wrapper = $('.portfolio__wrapper');

        $wrapper.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear',
            }
        });

        let links = document.querySelectorAll('.tabs a');

        links.forEach(link => {
            let selector = link.dataset.filter;
            link.addEventListener("click", function (e) {
                e.preventDefault();

                $wrapper.isotope({
                    filter: selector,
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                    }
                });

                links.forEach(link => {
                    link.classList.remove('active');
                });
                e.target.classList.add('active');
            });
        })
    });

    // Magnify popup
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    });

    /*--------------------- Slider ----------------------*/
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 700,
    });

    /*-------------------- Alert -------------------------*/
    $('#print').on('click', function () {
        swal("Error!", "Sorry! You can't print CV. Please try the next time. Thanks >_<", "error");
    });
    $('#download').on('click', function () {
        swal("Error!", "Sorry! You can't download CV. Please try the next time. Thanks >_<", "error");
    });
});

// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "11",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#cc3a3b",
    width: "30",
    blending_mode: "normal"
}];

// init paritcles
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#939393"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 4
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 110.48590120982064,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});