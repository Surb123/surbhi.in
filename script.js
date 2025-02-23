/*============================ Toggle Icon Navbar ============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*============================ scroll sections active link ============================*/
let sections = document.querySelectorAll ('section');
let navLinks = document.querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============================ sticky navbar ============================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================ Toggle Icon Navbar ============================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============================ scroll reveal ============================*/
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 /*============================ Typed JS ============================*/
 const typed =new Typed ('.multi-text', {
    strings: ['Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });



/*============================ Firebase JQuery ============================*/


const firebaseConfig = {
    apiKey: "AIzaSyBWEiij9W6D_h8xZfq6-nCacb_Shqjadps",
    authDomain: "surbhi-pandey.firebaseapp.com",
    databaseURL: "https://surbhi-pandey-default-rtdb.firebaseio.com",
    projectId: "surbhi-pandey",
    storageBucket: "surbhi-pandey.firebasestorage.app",
    messagingSenderId: "466523367240",
    appId: "1:466523367240:web:3ce862eea1f741130bf57d",
    measurementId: "G-Z324MKG1V9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference database
var contactDB = firebase.database().ref('contact');

$('#contact').submit(function (e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var number = getElementVal("number");
    var subject = getElementVal("subject");
    var message = getElementVal("message");

    saveMessages(name, email, number, subject, message);

    $('.alert').show();

    setTimeout(function () {
        $('.alert').hide();
    }, 3000);

    $('#contact')[0].reset();
});

const saveMessages = (name, email, number, subject, message) => {
    var newContactForm = contactDB.push();

    newContactForm.set({
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
    });
};

const getElementVal = (id) => {
    return $('#' + id).val();
};
