// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    let header = document.querySelector('header');

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    header.classList.toggle('sticky', top > 100);

    // remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    // animation footer on scroll
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight)
};
