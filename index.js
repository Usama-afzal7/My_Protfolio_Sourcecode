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