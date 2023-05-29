
let menuIcon = document.getElementById('menu-icon')
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');

}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id + ']').classList.add('active')
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active')
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content',{origin:'top'});
ScrollReveal().reveal('.services h1',{origin:'top'});
ScrollReveal().reveal('.portfolio h1',{origin:'top'});
ScrollReveal().reveal('.home-img',{origin:'bottom'});
ScrollReveal().reveal('.container',{origin:'bottom'});
ScrollReveal().reveal('.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content h1',{origin:'left'});
ScrollReveal().reveal('.about-info',{origin:'right'});
ScrollReveal().reveal('.about-info h1',{origin:'top'});

// ScrollReveal().reveal(".home-img img",{reset:true,delay:200, origin:'bottom'});

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Graphic Designer','CSE - Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sanjayjoseph1001@gmail.com",
        Password : "lathmics1",
        To : 'sanjayjosephm@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Enquiry",
        Body : "tell about yourself"
    }).then(
      message => alert(message)
    );
}