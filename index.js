function contact (event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_xc26pdd',
        'template_s22zz29',
        event.target,
        'a0WHHrTv0KFlWvMqg'
       ).then (() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
       }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("Email service is temporarily Unvalailable, Please Contact me directly on afalusama77@gmail.com")
       })
}
let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false; 
       return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle
    if (contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      // Added rotate after tutorial
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }