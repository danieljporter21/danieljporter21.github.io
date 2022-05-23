const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');
const burgerClicked = document.querySelector('.burgerClicked');

window.onscroll = function() {
    const top = window.scrollY;
    if(top >=50) {
        navbar.classList.add('navbarScroll');
        navLink.forEach(function (Link){
            Link.classList.add('navLinkScroll')
        })
    }
    else {
        navbar.classList.remove('navbarScroll');
        navLink.forEach(function (Link){
            Link.classList.remove('navLinkScroll')
        })
    }
}

const burgerIcon = document.querySelector('.navbar-toggler');

burgerIcon.addEventListener('click', () => {

        navbar.classList.toggle('burgerClicked')
})


