$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".showcase").addClass("sticky");

        } else {
            $(".showcase").removeClass("sticky");

        }
    });
    $(".menubtn").click(function() {
        $(" .menu").toggleClass("active");
        $(".content .header .logs").toggleClass("active");
        $(".menubtn i").toggleClass("active");
    });

    $(".carousel2").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            270: {
                items: 1,
                nav: false,
            },
            380: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: false,
            },

            1080: {
                items: 3,
                nav: false,
            },
        },
    });

});

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".stats").addClass("scroll");

        } else {
            $(".stats").removeClass("scroll");

        }
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 500) {
            $(".tech").addClass("scrollc");

        } else {
            $(".tech").removeClass("scrollc");

        }
    });
});


function dayUpdate() {
    const currentdate = new Date();
    const ISOdays = currentdate / 86400000;
    const myClock = ISOdays + 374;
    const daysOfCode = myClock - 18845;
    console.log(daysOfCode);
    document.getElementById('days').innerHTML = Math.round(daysOfCode);

}
dayUpdate();

function eventupdate() {
    const currentdate = new Date();
    const ISOdays = currentdate / 1209600000;
    const myClock = ISOdays + 16;
    const numberOfEvents = myClock - 1346;

    document.getElementById('events').innerHTML = Math.round(numberOfEvents);
};
eventupdate()

function projectsupdate() {
    const currentdate = new Date();
    const ISOdays = currentdate / 604800000;
    const myClock = ISOdays + 59;
    const numberOfProjects = myClock - 2692;
    document.getElementById('projects').innerHTML = Math.round(numberOfProjects);
};
projectsupdate();


const sr = ScrollReveal({
    distance: '70px',
    duration: 2500,
    delay: 700,
    reset: true
})

sr.reveal(`.stats`, { delay: 600 })
sr.reveal(`.footer`, { delay: 700 })
sr.reveal(`.cloud`, { delay: 1900, origin: 'left' })