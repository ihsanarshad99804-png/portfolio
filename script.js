// =============================================================
// PROJECT DATA — 7 PROJECTS
// =============================================================

const projectsData = [

    {
        id: 'luxora',

        name: 'Luxora — E-Commerce Store',

        shortDesc:
            'Modern e-commerce fashion store with curated collections and seamless shopping.',

        desc:
            'A full-featured fashion e-commerce platform with product browsing, filtering, quick-add carts, and a premium brand experience. Built with modern UI/UX principles.',

        url:
            'https://e-commerce-store-tcjo.vercel.app',

        tech: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind'
        ],

        thumb:
            'all projects pictures/1ss luxora.png',

        screenshots: [
            'all projects pictures/1ss luxora.png',
            'all projects pictures/2nd ss luxora.png',
            'all projects pictures/3rd ss luxora.png',
            'all projects pictures/4ry ss luxora.png',
            'all projects pictures/5th ss luxora.png',
            'all projects pictures/6th ss luxora.png'
        ]
    },

    {
        id: 'ember-ivy',

        name: 'Ember & Ivy — Restaurant',

        shortDesc:
            'Contemporary grill with fire-kissed ingredients and unforgettable dining.',

        desc:
            'A premium restaurant website showcasing signature dishes, menu exploration, online reservations, and a vibrant brand identity for a contemporary grill in downtown New York.',

        url:
            'https://ember-ivy-resturent.vercel.app',

        tech: [
            'React',
            'Next.js',
            'CSS Modules',
            'Framer Motion'
        ],

        thumb:
            'all projects pictures/1st ss ember-ivy-resturent.png',

        screenshots: [
            'all projects pictures/1st ss ember-ivy-resturent.png',
            'all projects pictures/2nd ss ember-ivy-resturent.png',
            'all projects pictures/3nd ss ember-ivy-resturent.png',
            'all projects pictures/4nd ss ember-ivy-resturent.png',
            'all projects pictures/5nd ss ember-ivy-resturent.png',
            'all projects pictures/6nd ss ember-ivy-resturent.png'
        ]
    },

    {
        id: 'taskflow',

        name: 'TaskFlow — Dashboard',

        shortDesc:
            'Collaborative task management with workspace productivity tracking.',

        desc:
            'A full-featured task management dashboard with project boards, team directories, calendar views, notifications, and real-time productivity analytics for modern teams.',

        url:
            'https://taskflow-dashboard-mu-woad.vercel.app',

        tech: [
            'React',
            'Node.js',
            'Express',
            'MongoDB'
        ],

        thumb:
            'all projects pictures/1st ss taskflow.png',

        screenshots: [
            'all projects pictures/1st ss taskflow.png',
            'all projects pictures/2st ss taskflow.png',
            'all projects pictures/3st ss taskflow.png',
            'all projects pictures/4st ss taskflow.png',
            'all projects pictures/5st ss taskflow.png',
            'all projects pictures/6st ss taskflow.png'
        ]
    },

    {
        id: 'medicarex',

        name: 'MedicareX — Healthcare',

        shortDesc:
            'Healthcare platform connecting patients with trusted doctors and specialists.',

        desc:
            'A comprehensive healthcare platform that helps patients find the right doctors, compare specialties, read reviews, and schedule appointments with ease across multiple cities.',

        url:
            'https://medicarex-omega.vercel.app',

        tech: [
            'React',
            'Node.js',
            'TypeScript',
            'Tailwind'
        ],

        thumb:
            'all projects pictures/1ss medicarex.png',

        screenshots: [
            'all projects pictures/1ss medicarex.png',
            'all projects pictures/2ss medicarex.png',
            'all projects pictures/3ss medicarex.png',
            'all projects pictures/4ss medicarex.png',
            'all projects pictures/5ss medicarex.png',
            'all projects pictures/6ss medicarex.png'
        ]
    },

    {
        id: 'propertyhub',

        name: 'PropertyHub — Real Estate',

        shortDesc:
            'Marketplace for discovering exceptional homes and investment opportunities.',

        desc:
            'A modern real estate marketplace with property listings, advanced search filters, saved shortlists, agent profiles, and a clean user dashboard for home seekers and investors.',

        url:
            'https://propertyhub-liard.vercel.app',

        tech: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind'
        ],

        thumb:
            'all projects pictures/1ss propertry hub.png',

        screenshots: [
            'all projects pictures/1ss propertry hub.png',
            'all projects pictures/2ss propertry hub.png',
            'all projects pictures/3ss propertry hub.png',
            'all projects pictures/4ss propertry hub.png',
            'all projects pictures/5ss propertry hub.png',
            'all projects pictures/6ss propertry hub.png'
        ]
    },

    // =========================================================
    // PROJECT 6 — ARVEN
    // =========================================================

    {
        id: 'arven',

        name: 'ARVEN — Fashion Branding',

        shortDesc:
            'Fashion branding and visual identity project with a refined creative direction.',

        desc:
            'A complete fashion branding concept focused on visual identity, campaign direction, brand presentation, and a refined premium aesthetic.',

        url:
            '',

        tech: [
            'Brand Identity',
            'Fashion Branding',
            'Campaign Design',
            'Graphic Design'
        ],

        // CORRECTED IMAGE PATH
        thumb:
            'all projects pictures/ARVEN branding.png.png',

        // CORRECTED GALLERY IMAGE PATH
        screenshots: [
            'all projects pictures/ARVEN branding.png.png'
        ],

        type:
            'design'
    },

    // =========================================================
    // PROJECT 7 — ROAST & FORM
    // =========================================================

    {
        id: 'roast-form',

        name: 'ROAST & FORM — Coffee Branding',

        shortDesc:
            'Specialty coffee branding with a distinctive and modern visual identity.',

        desc:
            'A specialty coffee branding project combining brand identity, packaging direction, print design, and a distinctive modern visual system.',

        url:
            '',

        tech: [
            'Brand Identity',
            'Coffee Branding',
            'Packaging Design',
            'Print Design'
        ],

        // CORRECTED IMAGE PATH
        thumb:
            'all projects pictures/ROAST & FORM branding.png.png',

        // CORRECTED GALLERY IMAGE PATH
        screenshots: [
            'all projects pictures/ROAST & FORM branding.png.png'
        ],

        type:
            'design'
    }

];


// =============================================================
// RENDER PROJECT CARDS
// =============================================================

const grid =
    document.getElementById('projectsGrid');


function getAssetUrl(path) {

    return path
        .split('/')
        .map(encodeURIComponent)
        .join('/');

}


projectsData.forEach(function(p, idx) {

    const card =
        document.createElement('div');


    card.className =
        'project-card reveal';


    // Add design class to ARVEN and ROAST & FORM
    if (p.type === 'design') {

        card.classList.add(
            'design-project'
        );

    }


    // Existing animation delays
    if (idx === 1) {

        card.classList.add(
            'delay-1'
        );

    }


    if (idx === 2) {

        card.classList.add(
            'delay-2'
        );

    }


    // Live Demo only for web projects
    const liveDemo =
        p.url
            ? `
                <a
                    href="${p.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-sm outline"
                >
                    Live Demo →
                </a>
            `
            : '';


    card.innerHTML = `

        <div class="project-image-wrap">

            <img
                src="${getAssetUrl(p.thumb)}"
                alt="${p.name}"
                loading="lazy"
            />

            <span class="project-badge">
                Project ${idx + 1}
            </span>

        </div>


        <div class="project-meta">

            <h3>
                ${p.name}
            </h3>


            <p>
                ${p.shortDesc}
            </p>


            <div class="project-tech">

                ${p.tech
                    .map(function(t) {

                        return `<span>${t}</span>`;

                    })
                    .join('')
                }

            </div>


            <div class="project-actions">

                <button
                    class="btn-sm"
                    data-project="${p.id}"
                >
                    View Gallery
                </button>

                ${liveDemo}

            </div>

        </div>

    `;


    const galleryButton =
        card.querySelector(
            '[data-project]'
        );


    galleryButton.addEventListener(
        'click',
        function(e) {

            e.stopPropagation();

            openGallery(p.id);

        }
    );


    card.addEventListener(
        'click',
        function(e) {

            if (
                e.target.closest('a') ||
                e.target.closest('button')
            ) {

                return;

            }


            openGallery(p.id);

        }
    );


    grid.appendChild(card);

});


// =============================================================
// GALLERY LOGIC
// =============================================================

let currentProject = null;

let currentIndex = 0;


const modal =
    document.getElementById(
        'projectModal'
    );


const track =
    document.getElementById(
        'modalTrack'
    );


const title =
    document.getElementById(
        'modalTitle'
    );


const desc =
    document.getElementById(
        'modalDesc'
    );


const counter =
    document.getElementById(
        'modalCounter'
    );


const prevBtn =
    document.getElementById(
        'modalPrev'
    );


const nextBtn =
    document.getElementById(
        'modalNext'
    );


const closeBtn =
    document.getElementById(
        'modalCloseBtn'
    );


const liveLink =
    document.getElementById(
        'modalLiveLink'
    );


// =============================================================
// OPEN GALLERY
// =============================================================

function openGallery(projectId) {

    const proj =
        projectsData.find(
            function(p) {

                return p.id === projectId;

            }
        );


    if (!proj) {

        return;

    }


    currentProject =
        proj;


    currentIndex =
        0;


    renderGallery(
        proj
    );


    modal.classList.add(
        'show'
    );


    document.body.style.overflow =
        'hidden';


    updateControls();

}


// =============================================================
// CLOSE GALLERY
// =============================================================

function closeGallery() {

    modal.classList.remove(
        'show'
    );


    document.body.style.overflow =
        '';

}


// =============================================================
// RENDER GALLERY
// =============================================================

function renderGallery(proj) {

    title.textContent =
        proj.name;


    desc.textContent =
        proj.desc;


    // Web projects show Live Demo
    if (proj.url) {

        liveLink.href =
            proj.url;


        liveLink.style.display =
            'inline-flex';

    }

    // Graphic design projects hide Live Demo
    else {

        liveLink.removeAttribute(
            'href'
        );


        liveLink.style.display =
            'none';

    }


    track.innerHTML =
        '';


    proj.screenshots.forEach(
        function(src) {

            const slide =
                document.createElement(
                    'div'
                );


            slide.className =
                'modal-slide';


            const img =
                document.createElement(
                    'img'
                );


            img.src =
                getAssetUrl(src);


            img.alt =
                proj.name +
                ' screenshot';


            img.loading =
                'lazy';


            slide.appendChild(
                img
            );


            track.appendChild(
                slide
            );

        }
    );


    currentIndex =
        0;


    updateTrack();


    updateControls();

}


// =============================================================
// UPDATE GALLERY TRACK
// =============================================================

function updateTrack() {

    const slides =
        track.querySelectorAll(
            '.modal-slide'
        );


    if (!slides.length) {

        return;

    }


    track.style.transform =
        'translateX(-' +
        (
            currentIndex * 100
        ) +
        '%)';


    counter.textContent =
        (
            currentIndex + 1
        ) +
        ' / ' +
        slides.length;

}


// =============================================================
// UPDATE CONTROLS
// =============================================================

function updateControls() {

    const slides =
        track.querySelectorAll(
            '.modal-slide'
        );


    prevBtn.disabled =
        currentIndex === 0;


    nextBtn.disabled =
        currentIndex ===
        slides.length - 1;


    if (slides.length <= 1) {

        prevBtn.disabled =
            true;


        nextBtn.disabled =
            true;

    }

}


// =============================================================
// PREVIOUS
// =============================================================

function goPrev() {

    if (
        currentIndex > 0
    ) {

        currentIndex--;


        updateTrack();


        updateControls();

    }

}


// =============================================================
// NEXT
// =============================================================

function goNext() {

    const slides =
        track.querySelectorAll(
            '.modal-slide'
        );


    if (
        currentIndex <
        slides.length - 1
    ) {

        currentIndex++;


        updateTrack();


        updateControls();

    }

}


// =============================================================
// GALLERY EVENTS
// =============================================================

prevBtn.addEventListener(
    'click',
    goPrev
);


nextBtn.addEventListener(
    'click',
    goNext
);


closeBtn.addEventListener(
    'click',
    closeGallery
);


modal.addEventListener(
    'click',
    function(e) {

        if (
            e.target === modal
        ) {

            closeGallery();

        }

    }
);


document.addEventListener(
    'keydown',
    function(e) {

        if (
            !modal.classList.contains(
                'show'
            )
        ) {

            return;

        }


        if (
            e.key === 'Escape'
        ) {

            closeGallery();

        }


        if (
            e.key === 'ArrowLeft'
        ) {

            goPrev();

        }


        if (
            e.key === 'ArrowRight'
        ) {

            goNext();

        }

    }
);


// =============================================================
// SKILL CATEGORY FILTERS
// =============================================================

var skillFilters =
    document.querySelectorAll(
        '[data-skill-filter]'
    );


var skillCards =
    document.querySelectorAll(
        '[data-skill-category]'
    );


var skillFilterStatus =
    document.getElementById(
        'skillFilterStatus'
    );


skillFilters.forEach(
    function(filterButton) {

        filterButton.addEventListener(
            'click',
            function() {

                var selectedCategory =
                    filterButton.getAttribute(
                        'data-skill-filter'
                    );


                var visibleCount =
                    0;


                skillCards.forEach(
                    function(card) {

                        var isVisible =
                            selectedCategory === 'all' ||
                            card.getAttribute(
                                'data-skill-category'
                            ) === selectedCategory;


                        card.hidden =
                            !isVisible;


                        if (isVisible) {

                            visibleCount++;


                            card.classList.add(
                                'active'
                            );

                        }

                    }
                );


                skillFilters.forEach(
                    function(button) {

                        var isSelected =
                            button === filterButton;


                        button.classList.toggle(
                            'is-active',
                            isSelected
                        );


                        button.setAttribute(
                            'aria-pressed',
                            String(isSelected)
                        );

                    }
                );


                skillFilterStatus.textContent =
                    selectedCategory === 'all'
                        ? 'Showing all ' + visibleCount + ' skill categories.'
                        : 'Showing ' + filterButton.textContent.trim() + ' skills.';

            }
        );

    }
);


// =============================================================
// NAVBAR SCROLL
// =============================================================

var navbar =
    document.getElementById(
        'navbar'
    );


function handleNavbar() {

    if (
        window.scrollY > 50
    ) {

        navbar.classList.add(
            'scrolled'
        );

    }

    else {

        navbar.classList.remove(
            'scrolled'
        );

    }

}


window.addEventListener(
    'scroll',
    handleNavbar
);


handleNavbar();


// =============================================================
// MOBILE MENU
// =============================================================

var menuBtn =
    document.getElementById(
        'menuBtn'
    );


var navLinks =
    document.getElementById(
        'navLinks'
    );


menuBtn.addEventListener(
    'click',
    function() {

        var isOpen =
            navLinks.classList.toggle(
                'open'
            );


        menuBtn.setAttribute(
            'aria-expanded',
            String(isOpen)
        );


        menuBtn.textContent =
            isOpen
                ? '\u00d7'
                : '\u2630';

    }
);


navLinks
    .querySelectorAll('a')
    .forEach(
        function(link) {

            link.addEventListener(
                'click',
                function() {

                    navLinks.classList.remove(
                        'open'
                    );


                    menuBtn.setAttribute(
                        'aria-expanded',
                        'false'
                    );


                    menuBtn.textContent =
                        '\u2630';

                }
            );

        }
    );


// =============================================================
// SCROLL REVEAL
// =============================================================

var revealElements =
    document.querySelectorAll(
        '.reveal'
    );


var revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            'active'
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function(el) {

        revealObserver.observe(
            el
        );

    }
);


// =============================================================
// CUSTOM CURSOR
// =============================================================

var cursor =
    document.getElementById(
        'cursor'
    );


if (
    cursor &&
    window.innerWidth > 650
) {

    var mouseX = 0;

    var mouseY = 0;

    var currentX = 0;

    var currentY = 0;


    document.addEventListener(
        'mousemove',
        function(e) {

            mouseX =
                e.clientX;

            mouseY =
                e.clientY;

        }
    );


    function animateCursor() {

        currentX +=
            (
                mouseX -
                currentX
            ) *
            0.15;


        currentY +=
            (
                mouseY -
                currentY
            ) *
            0.15;


        cursor.style.left =
            currentX +
            'px';


        cursor.style.top =
            currentY +
            'px';


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    document
        .querySelectorAll(
            'a, button, .service, .skill, .platform, .hobby, .edu-card, .about-card, .project-card'
        )
        .forEach(
            function(el) {

                el.addEventListener(
                    'mouseenter',
                    function() {

                        cursor.classList.add(
                            'hover'
                        );

                    }
                );


                el.addEventListener(
                    'mouseleave',
                    function() {

                        cursor.classList.remove(
                            'hover'
                        );

                    }
                );

            }
        );

}


// =============================================================
// SMOOTH SCROLL
// =============================================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function(link) {

            link.addEventListener(
                'click',
                function(e) {

                    var targetId =
                        link.getAttribute(
                            'href'
                        );


                    if (
                        !targetId ||
                        targetId === '#'
                    ) {

                        return;

                    }


                    var target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    e.preventDefault();


                    var offset =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    var pos =
                        target
                            .getBoundingClientRect()
                            .top +
                        window.scrollY -
                        offset;


                    window.scrollTo(
                        {
                            top: pos,
                            behavior: 'smooth'
                        }
                    );

                }
            );

        }
    );


// =============================================================
// ACTIVE NAV
// =============================================================

var sections =
    document.querySelectorAll(
        'main section[id]'
    );


var navAnchors =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );


var activeObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    var id =
                        entry.target.getAttribute(
                            'id'
                        );


                    navAnchors.forEach(
                        function(link) {

                            link.classList.toggle(
                                'active-link',
                                link.getAttribute(
                                    'href'
                                ) ===
                                '#' + id
                            );

                        }
                    );

                }
            );

        },
        {
            rootMargin:
                '-30% 0px -60% 0px'
        }
    );


sections.forEach(
    function(s) {

        activeObserver.observe(
            s
        );

    }
);


// =============================================================
// CONTACT FORM
// =============================================================

var contactForm =
    document.getElementById(
        'contactForm'
    );


contactForm.addEventListener(
    'submit',
    function(e) {

        e.preventDefault();


        var btn =
            contactForm.querySelector(
                'button'
            );


        var original =
            btn.innerHTML;


        btn.innerHTML =
            '✓ Message Sent!';


        btn.style.pointerEvents =
            'none';


        btn.style.opacity =
            '0.8';


        contactForm.reset();


        setTimeout(
            function() {

                btn.innerHTML =
                    original;


                btn.style.pointerEvents =
                    'auto';


                btn.style.opacity =
                    '1';

            },
            2800
        );

    }
);


// =============================================================
// 3D TILT
// =============================================================

var tiltCards =
    document.querySelectorAll(
        '.service, .platform, .hobby, .edu-card, .project-card, .contact-info-card'
    );


if (
    window.innerWidth > 900
) {

    tiltCards.forEach(
        function(card) {

            card.addEventListener(
                'mousemove',
                function(e) {

                    var rect =
                        card.getBoundingClientRect();


                    var x =
                        e.clientX -
                        rect.left;


                    var y =
                        e.clientY -
                        rect.top;


                    var cx =
                        rect.width / 2;


                    var cy =
                        rect.height / 2;


                    var rx =
                        (
                            (y - cy) /
                            cy
                        ) *
                        -4;


                    var ry =
                        (
                            (x - cx) /
                            cx
                        ) *
                        4;


                    card.style.transform =
                        'translateY(-6px) perspective(800px) rotateX(' +
                        rx +
                        'deg) rotateY(' +
                        ry +
                        'deg) scale(1.01)';

                }
            );


            card.addEventListener(
                'mouseleave',
                function() {

                    card.style.transform =
                        '';

                }
            );

        }
    );

}


// =============================================================
// PARALLAX
// =============================================================

var pElements =
    document.querySelectorAll(
        '.about-card, .edu-card, .service, .skill, .platform, .hobby, .project-card, .contact-info-card'
    );


var pTimeout;


function handleParallax() {

    pElements.forEach(
        function(el) {

            var rect =
                el.getBoundingClientRect();


            if (
                rect.top <
                    window.innerHeight &&
                rect.bottom >
                    0
            ) {

                var yPos =
                    (
                        rect.top +
                        rect.height / 2 -
                        window.innerHeight / 2
                    ) *
                    0.02;


                if (
                    window.innerWidth > 900 &&
                    !el.classList.contains(
                        'contact-info-card'
                    )
                ) {

                    el.style.transform =
                        'translateY(' +
                        (
                            yPos * 0.3
                        ) +
                        'px)';

                }

            }

        }
    );

}


window.addEventListener(
    'scroll',
    function() {

        clearTimeout(
            pTimeout
        );


        pTimeout =
            setTimeout(
                handleParallax,
                10
            );

    }
);


// =============================================================
// LOADER
// =============================================================

setTimeout(
    function() {

        var loader =
            document.getElementById(
                'loader'
            );


        if (loader) {

            loader.classList.add(
                'hide'
            );

        }

    },
    1000
);


// =============================================================
// CONSOLE
// =============================================================

console.log(
    '%c🚀 Portfolio Loaded — 7 Projects!',
    'color:#42e17b; font-size:14px;'
);


// =============================================================
// WELCOME SCREEN
// =============================================================

var welcomeScreen =
    document.getElementById(
        'welcomeScreen'
    );


var enterPortfolioButton =
    document.getElementById(
        'enterPortfolio'
    );


var welcomeVoice =
    document.getElementById(
        'welcomeVoice'
    );


var welcomeHint =
    document.querySelector(
        '.welcome-hint'
    );


window.scrollTo(
    0,
    0
);


enterPortfolioButton.addEventListener(
    'click',
    function() {

        welcomeVoice.currentTime =
            0;


        var voicePlayback =
            welcomeVoice.play();


        if (
            voicePlayback &&
            typeof voicePlayback.then === 'function'
        ) {

            voicePlayback.then(
                function() {

                    welcomeHint.classList.remove(
                        'has-voice-error'
                    );


                    welcomeHint.classList.add(
                        'is-speaking'
                    );


                    welcomeHint.textContent =
                        'Welcome to my portfolio.';

                }
            ).catch(
                function() {

                    welcomeHint.classList.remove(
                        'is-speaking'
                    );


                    welcomeHint.classList.add(
                        'has-voice-error'
                    );


                    welcomeHint.textContent =
                        'Voice welcome could not play. Please check your device audio.';

                }
            );

        }


        welcomeVoice.onended =
            function() {

                welcomeHint.classList.remove(
                    'is-speaking'
                );

            };


        welcomeVoice.onerror =
            function() {

                welcomeHint.classList.remove(
                    'is-speaking'
                );


                welcomeHint.classList.add(
                    'has-voice-error'
                );


                welcomeHint.textContent =
                    'Voice welcome audio could not be loaded.';

            };


        window.scrollTo(
            0,
            0
        );


        document.body.classList.remove(
            'intro-locked'
        );


        var portfolioSurface =
            document.querySelectorAll(
                '#navbar, main, footer'
            );


        portfolioSurface.forEach(
            function(surface) {

                surface.removeAttribute(
                    'inert'
                );


                surface.removeAttribute(
                    'aria-hidden'
                );

            }
        );


        welcomeScreen.classList.add(
            'is-leaving'
        );


        document
            .querySelector('.hero h1')
            .focus({
                preventScroll: true
            });


        window.setTimeout(
            function() {

                welcomeScreen.remove();

            },
            750
        );

    }
);