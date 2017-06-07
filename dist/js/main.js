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
    document.querySelector('.start_block_content__btn').addEventListener('click',function(){
        var scrollVal = document.querySelector('.start_block-2').offsetTop;
        $('html, body').animate({scrollTop:scrollVal}, 600);
    })
});