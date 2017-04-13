var WIDTH = '10%';
var HEIGHT = '8%';
var RECTSTYLE = "fill:#fff;stroke:#000;stroke-width:2;" ;


function Rectangle(rectOptions){
    this.width = rectOptions.width;
    this.height = rectOptions.height;
    this.x = rectOptions.x;
    this.y = rectOptions.y;
    this.style = rectOptions.style;
    this.content = rectOptions.content;
}

Rectangle.makeHTML = function(rect){
    var rectElem = document.createElement('rectangle'); 
    for(var key in rect){
        rectElem.setAttribute(key, rect[key])
    }

    scheme.appendChild(rectElem);
}

var navDataOptions = {
    width:WIDTH,
    height:HEIGHT,
    x:'5%',
    y:'70%',
    style: RECTSTYLE,
    content: 'НИ' 
}

var navData = new Rectangle(navDataOptions);

Rectangle.makeHTML(navData);
