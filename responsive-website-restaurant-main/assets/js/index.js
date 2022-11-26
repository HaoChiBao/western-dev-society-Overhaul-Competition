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

function addToMenu(imgsrc, itemName, itemDetail, price){
    const menu = document.createElement('div');
    menu.class = "menu__content"

    const img = document.createElement('img');
    img.src = imgsrc
    img.class = "menu__img"

    menu.appendChild(img);

    const menuItem = document.createElement('h3')
    menuItem.class = "menu__name"
    menuItem.innerHTML = itemName

    menu.appendChild(menuItem);

    const menuDetail = document.createElement('span');
    menuDetail.class = "menu__detail"
    menuDetail.innerHTML = itemDetail
    
    menu.appendChild(menuDetail);
    
    const menuPrice = document.createElement('span');
    menuDetail.class = "menu__preci"
    menuDetail.innerHTML = price

    menu.appendChild(menuPrice);
}

let totalPrice = 0;
const order = [];
function handleFood(price, name){
    totalPrice += price;
    for(let i = 0; i < order.length; i++){
        if(order[i] === name){
            return;
        }
    }
}