function selectActiveTab(){
    var currentLink = document.href;
}

function Menu(){
    this.items = document.querySelectorAll('.menu__item');
}

var menu = new Menu();

document.addEventListener("DOMContentLoaded",function(){
    menu.items.forEach(function(item){
        if (document.location.href == item.children[0].href ) item.classList.add('active'); 
    })
});