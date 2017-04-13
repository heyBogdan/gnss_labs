var RECTWIDTH = 10, RECTHEIGHT = 8;
var LINELENGTH = 5;
var CIRCLERADIUS = 3;
var STROKEWIDTH = 0.5;

var rectOptions = {
    width:RECTWIDTH + '%',
    height:RECTHEIGHT + '%',
}
var circleOptions = {
    r: CIRCLERADIUS + '%'
}

Rectangle.prototype = rectOptions;
function Rectangle(rectOptions){
    this.x = rectOptions.x;
    this.y = rectOptions.y;
    this.content = rectOptions.content;
    this.link = rectOptions.link;
    if(rectOptions.width) this.width = rectOptions.width;
    if(rectOptions.height) this.height = rectOptions.height;
}
Rectangle.makeHTML = function(rects){
    rects.forEach(function(rect,i){
        var rectElem = document.createElementNS('http://www.w3.org/2000/svg','rect'); 
        rectElem.setAttribute('id', 'rectangle-id-' + i )
        
        for(var key in rect){
            rectElem.setAttribute(key, rect[key])
        }
        var textElem = document.createElementNS('http://www.w3.org/2000/svg','text');
        var wrapper = document.createElementNS('http://www.w3.org/2000/svg','a');
        textElem.classList.add('rect-text');
        var textNode = document.createTextNode(rect.content);
        textElem.appendChild(textNode);
        textElem.setAttribute('x', (parseInt(rect.x) + 2) + '%' )
        textElem.setAttribute('y', (parseInt(rect.y) + RECTHEIGHT/2 + 0.5) + '%'),
        textElem.setAttribute('id','rect-text-' + i)
        wrapper.classList.add('rectangle');    
        wrapper.setAttribute('href', rect.link);
        wrapper.appendChild(rectElem);
        wrapper.appendChild(textElem);
        scheme.appendChild(wrapper);
    });
}
// Rectangle.displayText = function(rects){
//     rects.forEach(function(rect,i){

//     });
// } 

Circle.prototype = circleOptions;
function Circle(rectOptions){
    this.cx = rectOptions.x;
    this.cy = rectOptions.y;
    this.content = rectOptions.content;
}
Circle.makeHTML = function(circles){
    circles.forEach(function(circle,i){
        var circleElem = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
        circleElem.setAttribute('id', 'circle-id-' + i )
        circleElem.classList.add('circle');
        for(var key in circle){
            circleElem.setAttribute(key, circle[key])
        }
        var textElem = document.createElementNS('http://www.w3.org/2000/svg','text');
        var wrapper = document.createElementNS('http://www.w3.org/2000/svg','a');
        textElem.classList.add('circle-text');
        var textNode = document.createTextNode(circle.content);
        textElem.appendChild(textNode);
        textElem.setAttribute('x', (parseInt(circle.cx)) + '%' )
        textElem.setAttribute('y', (parseInt(circle.cy) + 2) + '%'),
        textElem.setAttribute('id','circle-text-' + i)
        wrapper.classList.add('circle');    
        wrapper.setAttribute('href', circle.link);
        wrapper.appendChild(circleElem);
        wrapper.appendChild(textElem);       
        scheme.appendChild(wrapper);
    });
}


function Line(lineOptions){
    this.x1 = lineOptions.x1;
    this.y1 = lineOptions.y1;
    this.x2 = lineOptions.x2;
    this.y2 = lineOptions.y2;
}
Line.makeHTML = function(lineses){
    lines.forEach(function(line,i){
        var lineElem = document.createElementNS('http://www.w3.org/2000/svg','line'); 
        lineElem.setAttribute('id', 'lineId' + i )
        lineElem.classList.add('line');
        for(var key in line){
            lineElem.setAttribute(key, line[key])
        }
        scheme.appendChild(lineElem);
    });
}



var navDataOptions = {
    x:'5%',
    y:'60%',
    content: 'НИ',
    link:'/glonass/nav-data'
}
var coderOptions = {
    x: (parseInt(navDataOptions.x) + RECTWIDTH + LINELENGTH) + '%',
    y: navDataOptions.y,
    content:'Кодер'
}
var ofmOptions = {
    x: (parseInt(coderOptions.x) + RECTWIDTH + LINELENGTH) + '%',
    y: navDataOptions.y,
    content:'Отн. код'
}
var timeMOptions = {
    x:ofmOptions.x,
    y:'10%',
    content:'МВ'
}
var circle1Options = {
    x: (parseInt(ofmOptions.x) + RECTWIDTH + LINELENGTH + CIRCLERADIUS) + '%',
    y: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%',
    content: '+'
}
//navdata + coder
var line1Options = {
    x1: (parseInt(navDataOptions.x) + RECTWIDTH) + '%',
    y1: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%',
    x2: (parseInt(navDataOptions.x) + RECTWIDTH + LINELENGTH) + '%',
    y2: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%'
}
//coder + ofm
var line2Options = {
    x1: (parseInt(coderOptions.x) + RECTWIDTH) + '%',
    y1: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%',
    x2: (parseInt(coderOptions.x) + RECTWIDTH + LINELENGTH) + '%',
    y2: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%'
}
//ofm + circle1
var line3Options = {
    x1: (parseInt(ofmOptions.x) + RECTWIDTH) + '%',
    y1: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%',
    x2: (parseInt(ofmOptions.x) + RECTWIDTH + LINELENGTH + STROKEWIDTH) + '%',
    y2: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%'
}
//circle1 t0 vertical
var line4Options = {
    x1: (parseInt(circle1Options.x) + CIRCLERADIUS - STROKEWIDTH) + '%',
    y1: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%',
    x2: (parseInt(circle1Options.x) + CIRCLERADIUS + LINELENGTH) + '%',
    y2: (parseInt(navDataOptions.y) + RECTHEIGHT/2) + '%'
}
//timelabel to vertical
var line5Options = {
    x1: (parseInt(timeMOptions.x) + RECTWIDTH) + '%',
    y1: (parseInt(timeMOptions.y) + RECTHEIGHT/2) + '%',
    x2: (parseInt(timeMOptions.x) + RECTWIDTH + 2*LINELENGTH + 2*CIRCLERADIUS ) + '%',
    y2: (parseInt(timeMOptions.y) + RECTHEIGHT/2) + '%'
}
//vertical bottom to key
var line6Options = {
    x1: line4Options.x2,
    y1: line4Options.y2,
    x2: line4Options.x2,
    y2: (parseInt(line4Options.y2) - 4*LINELENGTH ) + '%'
}
//vertical top to key
var line7Options = {
    x1: line5Options.x2,
    y1: line5Options.y2,
    x2: line5Options.x2,
    y2: (parseInt(line5Options.y2) + 4*LINELENGTH ) + '%'
}
//key
var line8Options = {
    x1: line6Options.x2,
    y1: line6Options.y2,
    x2: (parseInt(line6Options.x2) + LINELENGTH) + '%',
    y2: (parseInt(line6Options.y2) - LINELENGTH ) + '%'
}
//key + circle2
var line9Options = {
    x1: line8Options.x2,
    y1: line8Options.y2,
    x2: (parseInt(line8Options.x2) + LINELENGTH) + '%',
    y2: line8Options.y2
}
var circle2Options = {
    x: (parseInt(line9Options.x2) + CIRCLERADIUS - STROKEWIDTH) + '%',
    y: line9Options.y2,
    content: '+'
}
//circle2 + modulator
var line10Options = {
    x1: (parseInt(circle2Options.x) + CIRCLERADIUS) + '%',
    y1: line8Options.y2,
    x2: (parseInt(circle2Options.x) + CIRCLERADIUS + LINELENGTH) + '%',
    y2: line8Options.y2
}
var modulatorOptions = {
    x: line10Options.x2,
    y: (parseInt(line10Options.y2) - RECTHEIGHT/2) + '%',
    content:'Модулятор'
}
//circle1 + meandr
var line11Options = {
    x1: circle1Options.x,
    y1: (parseInt(circle1Options.y) + CIRCLERADIUS + 3*STROKEWIDTH  ) + '%',
    x2: circle1Options.x,
    y2: (parseInt(circle1Options.y) + CIRCLERADIUS + 2*LINELENGTH ) + '%',
}
//circle2 + psp
var line12Options = {
    x1: circle2Options.x,
    y1: (parseInt(circle2Options.y) + CIRCLERADIUS + 3*STROKEWIDTH  ) + '%',
    x2: circle2Options.x,
    y2: (parseInt(circle2Options.y) + CIRCLERADIUS + 2*LINELENGTH ) + '%',
}
//modulator + carrier
var line13Options = {
    x1: (parseInt(modulatorOptions.x) + RECTWIDTH/2) + '%',
    y1: (parseInt(modulatorOptions.y) + RECTHEIGHT) + '%',
    x2: (parseInt(modulatorOptions.x) + RECTWIDTH/2) + '%',
    y2: (parseInt(modulatorOptions.y) + RECTHEIGHT + 2*LINELENGTH - 2*STROKEWIDTH ) + '%',
}
var meandrOptions = {
    x:(parseInt(line11Options.x2) - RECTWIDTH/2) + '%',
    y:line11Options.y2,
    content:'Меандр'    
}
var pspOptions = {
    x:(parseInt(line12Options.x2) - RECTWIDTH/2 + STROKEWIDTH ) + '%',
    y:line12Options.y2,
    content:'ПСП',
    link:'/glonass/gnss-signals/'    
}
var carrierOptions = {
    x:(parseInt(line13Options.x2) - RECTWIDTH/2) + '%',
    y:line13Options.y2,
    content:'Несущая'    
}


var rectangles = [], circles = [], lines = []; 

rectangles.push(new Rectangle(navDataOptions), new Rectangle(coderOptions),
new Rectangle(ofmOptions), new Rectangle(timeMOptions), new Rectangle(modulatorOptions),
new Rectangle(meandrOptions), new Rectangle(pspOptions), new Rectangle(carrierOptions));

circles.push(new Circle(circle1Options), new Circle(circle2Options))

lines.push(new Line(line1Options), new Line(line2Options), new Line(line3Options),
new Line(line4Options), new Line(line5Options), new Line(line6Options),
new Line(line7Options), new Line(line8Options), new Line(line9Options),
new Line(line10Options), new Line(line11Options), new Line(line12Options),
new Line(line13Options))

Rectangle.makeHTML(rectangles);
Circle.makeHTML(circles);
Line.makeHTML(lines);

isDataTime = true;
(function changeKey(){
    if(isDataTime){
        var delay = 1700;
        isDataTime = !isDataTime;
        lineId7.setAttribute('y1', line6Options.y2);
        return setTimeout(changeKey, delay);    
    }else{
        delay = 300;
        isDataTime = !isDataTime;
        lineId7.setAttribute('y1', (parseInt(line6Options.y2) - 2*LINELENGTH) + '%' );
        return setTimeout(changeKey, delay);        
    }
})();
