const nav = document.getElementById('header');

function scrollNav(e){
    
    if(!window.pageYOffset){
        showNav();
    } else {
        if(e.deltaY > 0){showNav()} 
        else {hideNav()}
    }
    
}

function hideNav(){
    nav.style.height = '0rem';
}

function showNav(){
    nav.style.height = '10rem';

}

window.addEventListener('mousewheel', (e) =>{
    scrollNav(e);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});