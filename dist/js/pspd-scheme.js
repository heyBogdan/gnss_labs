var RECTWIDTH = 10, RECTHEIGHT = 8;
var LINELENGTH = 5;
var CIRCLERADIUS = 3;
var STROKEWIDTH = 0.5;
var INFOBLOCKHEIGHT = 15, INFOBLOCKWIDTH = 8, INFOBLOCK_OFFSET = 5;
var SYMBOLHEIGHT = 40, SYMBOLWIDTH = 10;


var rectOptions = {
    width:RECTWIDTH + '%',
    height:RECTHEIGHT + '%',
}
var circleOptions = {
    r: CIRCLERADIUS + '%'
}

Rectangle.prototype = rectOptions;
function Rectangle(rectOptions){
    this.x = rectOptions.x + '%';
    this.y = rectOptions.y + '%';
    this.content = rectOptions.content;
    this.link = rectOptions.link;
    this.description = rectOptions.description;
    if(rectOptions.width) this.width = rectOptions.width + '%';
    if(rectOptions.height) this.height = rectOptions.height + '%';
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
        if(rect.description){
            var descriptionElement = document.createElementNS('http://www.w3.org/2000/svg','foreignObject');
            descriptionElement.setAttribute('x', (0.8*parseInt(rect.x)) + '%');
            descriptionElement.setAttribute('y', (parseInt(rect.y) + RECTHEIGHT*1.2) + '%');
            var descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'description-element';
            descriptionDiv.innerHTML = rect.description;
            descriptionElement.appendChild(descriptionDiv);
            wrapper.appendChild(descriptionElement);

            wrapper.onmouseover = function(){
                descriptionDiv.classList.toggle('description-element--in')
            }
            wrapper.onmouseout = function(){
                descriptionDiv.classList.toggle('description-element--in')
            }                   
        }
        scheme.appendChild(wrapper);
    });
}
// Rectangle.displayText = function(rects){
//     rects.forEach(function(rect,i){

//     });
// } 

Circle.prototype = circleOptions;
function Circle(rectOptions){
    this.cx = rectOptions.x + '%';
    this.cy = rectOptions.y + '%';
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
    this.x1 = lineOptions.x1 + '%';
    this.y1 = lineOptions.y1 + '%';
    this.x2 = lineOptions.x2 + '%';
    this.y2 = lineOptions.y2 + '%';
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

function InfoBlock(infoBlockOptions){
    this.symbolsNum = infoBlockOptions.symbolsNum;
    this.duration = infoBlockOptions.duration;
    this.x = infoBlockOptions.x + '%';
    this.y = infoBlockOptions.y + '%';
    this.width = INFOBLOCKWIDTH + '%';
    this.height = INFOBLOCKHEIGHT + '%';
    this.freq = infoBlockOptions.freq;
    this.type = infoBlockOptions.type;
    this.generateRandPath = function(){
        var path = 'M 0 40';
        var symbols = [];
        symbols[0] = 0;
        for (var i = 1; i < this.symbolsNum; i++){
            symbols.push(Math.round(Math.random()));
            if(symbols[i-1] == 0 && symbols[i] == 1) path += ' v ' + SYMBOLHEIGHT;
            if(symbols[i-1] == 1 && symbols[i] == 0) path += ' v -' + SYMBOLHEIGHT;
            path += ' h ' + SYMBOLWIDTH;
        }
        return path;
    }
    this.generateMeandrPath = function(){
        var path = 'M 0 40';
        for (var i = 1; i < this.symbolsNum; i++){
            path += ((i%2) == 0) ? ' v -' : ' v ' ;
            path += SYMBOLHEIGHT;
            path += ' h ' + SYMBOLWIDTH;
        }
        return path;
    }
}

InfoBlock.makeHTML = function(infoBlocks){
    
    infoBlocks.forEach(function(infoBlock, i){
        if(infoBlock.type == "data"){
            var path = infoBlock.generateRandPath();
        } else if (infoBlock.type == "meandr"){
            var path = infoBlock.generateMeandrPath();
        }        

        var infoBlockWrapper = document.createElementNS('http://www.w3.org/2000/svg','svg');
        infoBlockWrapper.setAttribute('x', infoBlock.x);
        infoBlockWrapper.setAttribute('y', infoBlock.y);
        infoBlockWrapper.setAttribute('width', infoBlock.width);
        infoBlockWrapper.setAttribute('height', infoBlock.height);

        var textElem = document.createElementNS('http://www.w3.org/2000/svg','text');
        var textNode = document.createTextNode('Длительность:' + infoBlock.duration + 'с');
        textElem.setAttribute('x','0');
        textElem.setAttribute('y','10');
        textElem.setAttribute ('style','font-size:10px');
        textElem.appendChild(textNode);
        var textElem2 = document.createElementNS('http://www.w3.org/2000/svg','text');
        var textNode2 = document.createTextNode("Частота: " + infoBlock.freq + "Гц");
        textElem2.setAttribute('x','0');
        textElem2.setAttribute('y','25');
        textElem2.setAttribute ('style','font-size:10px');
        textElem2.appendChild(textNode2);         
        infoBlockWrapper.appendChild(textElem);
        infoBlockWrapper.appendChild(textElem2);


        var infoBlockSymbols = document.createElementNS('http://www.w3.org/2000/svg','path');
        infoBlockSymbols.setAttribute('d',path);
        infoBlockSymbols.setAttribute('style','fill:transparent;stroke:#000;stroke-width:2');
        infoBlockSymbols.setAttribute('id','infoBlock' + i);
        

        var animateSymbols = document.createElementNS('http://www.w3.org/2000/svg','animateTransform');
        animateSymbols.setAttribute('attributeName','transform');
        animateSymbols.setAttribute('type','translate');
        animateSymbols.setAttribute('from','-' + SYMBOLWIDTH*infoBlock.symbolsNum + ' 0');
        animateSymbols.setAttribute('to','0 0');
        animateSymbols.setAttribute('dur', infoBlock.duration + 's');
        animateSymbols.setAttribute('repeatCount','indefinite');
        infoBlockSymbols.appendChild(animateSymbols); 

        infoBlockWrapper.appendChild(infoBlockSymbols);
        scheme.appendChild(infoBlockWrapper);
    })
}

var navDataOptions = {
    x:5,
    y:60,
    content: 'ЦИ',
    description: 'Блок формирования ЦИ с символьной частотой 50 Гц. '+
     'Каждая строка содержит 85 двоичных символов ЦИ. '+
    'Нумерация позиций символов в строке осуществляется справа налево.',
    link:'/glonass/nav-data'
}
var coderOptions = {
    x: navDataOptions.x + RECTWIDTH + LINELENGTH,
    y: navDataOptions.y,
    content:'Кодер',
    description:'В каждой строке ЦИ передаются 8 проверочных символов кода Хемминга (КХ), позволяющие производить проверку достоверности символов ЦИ в строк'
}
var ofmOptions = {
    x: coderOptions.x + RECTWIDTH + LINELENGTH,
    y: navDataOptions.y,
    content:'Отн. код',
    description:'Блок преобразования ЦЙ в относительны код, позволяющий учитывать при декодировании не абсолютные значения фазы сигнала, а ее относительные сдвиги'
}
var timeMOptions = {
    x:ofmOptions.x,
    y:10,
    content:'МВ',
    description:'Метка времени - укороченная ПС последовательность, состоящая из 30-ти символов длительностью 10 мс'
}
var circle1Options = {
    x: ofmOptions.x + RECTWIDTH + LINELENGTH + CIRCLERADIUS,
    y: navDataOptions.y + RECTHEIGHT/2,
    content: '+'
}
//navdata + coder
var line1Options = {
    x1: navDataOptions.x + RECTWIDTH,
    y1: navDataOptions.y + RECTHEIGHT/2,
    x2: navDataOptions.x + RECTWIDTH + LINELENGTH,
    y2: navDataOptions.y + RECTHEIGHT/2
}
//coder + ofm
var line2Options = {
    x1: coderOptions.x + RECTWIDTH,
    y1: navDataOptions.y + RECTHEIGHT/2,
    x2: coderOptions.x + RECTWIDTH + LINELENGTH,
    y2: navDataOptions.y + RECTHEIGHT/2
}
//ofm + circle1
var line3Options = {
    x1: ofmOptions.x + RECTWIDTH,
    y1: navDataOptions.y + RECTHEIGHT/2,
    x2: ofmOptions.x + RECTWIDTH + LINELENGTH + STROKEWIDTH,
    y2: navDataOptions.y + RECTHEIGHT/2
}
//circle1 t0 vertical
var line4Options = {
    x1: circle1Options.x + CIRCLERADIUS - STROKEWIDTH,
    y1: navDataOptions.y + RECTHEIGHT/2,
    x2: circle1Options.x + CIRCLERADIUS + LINELENGTH,
    y2: navDataOptions.y + RECTHEIGHT/2
}
//timelabel to vertical
var line5Options = {
    x1: timeMOptions.x + RECTWIDTH,
    y1: timeMOptions.y + RECTHEIGHT/2,
    x2: timeMOptions.x + RECTWIDTH + 2*LINELENGTH + 2*CIRCLERADIUS,
    y2: timeMOptions.y + RECTHEIGHT/2
}
//vertical bottom to key
var line6Options = {
    x1: line4Options.x2,
    y1: line4Options.y2,
    x2: line4Options.x2,
    y2: line4Options.y2 - 4*LINELENGTH
}
//vertical top to key
var line7Options = {
    x1: line5Options.x2,
    y1: line5Options.y2,
    x2: line5Options.x2,
    y2: line5Options.y2 + 4*LINELENGTH
}
//key
var line8Options = {
    x1: line6Options.x2,
    y1: line6Options.y2,
    x2: line6Options.x2 + LINELENGTH,
    y2: line6Options.y2 - LINELENGTH
}
//key + circle2
var line9Options = {
    x1: line8Options.x2,
    y1: line8Options.y2,
    x2: line8Options.x2 + LINELENGTH,
    y2: line8Options.y2
}
var circle2Options = {
    x: line9Options.x2 + CIRCLERADIUS - STROKEWIDTH,
    y: line9Options.y2,
    content: '+'
}
//circle2 + modulator
var line10Options = {
    x1: circle2Options.x + CIRCLERADIUS - STROKEWIDTH,
    y1: line8Options.y2,
    x2: circle2Options.x + CIRCLERADIUS + LINELENGTH,
    y2: line8Options.y2
}
var modulatorOptions = {
    x: line10Options.x2,
    y: line10Options.y2 - RECTHEIGHT/2,
    content:'Модулятор',
    description:'Блок изменяющий параметры несущего сигнала в соответствии с изменениями передаваемого сигнала'
}
//circle1 + meandr
var line11Options = {
    x1: circle1Options.x,
    y1: circle1Options.y + CIRCLERADIUS + 3*STROKEWIDTH,
    x2: circle1Options.x,
    y2: circle1Options.y + CIRCLERADIUS + 2*LINELENGTH,
}
//circle2 + psp
var line12Options = {
    x1: circle2Options.x,
    y1: circle2Options.y + CIRCLERADIUS + 3*STROKEWIDTH,
    x2: circle2Options.x,
    y2: circle2Options.y + CIRCLERADIUS + 2*LINELENGTH
}
//modulator + carrier
var line13Options = {
    x1: modulatorOptions.x + RECTWIDTH/2,
    y1: modulatorOptions.y + RECTHEIGHT,
    x2: modulatorOptions.x + RECTWIDTH/2,
    y2: modulatorOptions.y + RECTHEIGHT + 2*LINELENGTH - 2*STROKEWIDTH,
}
var meandrOptions = {
    x:line11Options.x2 - RECTWIDTH/2,
    y:line11Options.y2,
    content:'Меандр',
    description:'Блок формирования вспомогательного меандрового колебания'    
}
var pspOptions = {
    x:line12Options.x2 - RECTWIDTH/2 ,
    y:line12Options.y2,
    content:'ПСП',
    description:'Блок формирования псевдослучайного дальномерного кода, передаваемого со скоростью 511 кбит/с',
    link:'/glonass/gnss-signals/'    
}
var carrierOptions = {
    x:line13Options.x2 - RECTWIDTH/2,
    y:line13Options.y2,
    content:'Несущая',
    description:'Блок формирования номинальных значений несущих частот в частотных поддиапазонах L1 и L2'    
}

var timeLabelBlockOptions = {
    x: line7Options.x1 - RECTWIDTH,
    y: timeMOptions.y + 2*INFOBLOCK_OFFSET,
    symbolsNum : 30,
    duration:0.3,
    freq:100,
    type:'data'
}

var digitalInfoOptions = {
    x: line7Options.x1 - RECTWIDTH,
    y: ofmOptions.y - 3.5*INFOBLOCK_OFFSET,
    symbolsNum : 170,
    duration:1.7,
    freq:100,
    type:'data'
}

var digitalInfoRawOptions = {
    x: line1Options.x1,
    y: navDataOptions.y - 3.5*INFOBLOCK_OFFSET,
    symbolsNum : 85,
    duration:1.7,
    freq:50,
    type:'data'
}

var binaryMeandrOptions = {
    x: meandrOptions.x + 1.2*RECTWIDTH ,
    y: meandrOptions.y - 0.75*RECTHEIGHT,
    symbolsNum : 340,
    duration:1.7,
    freq:100,
    type:'meandr'
}



var rectangles = [], circles = [], lines = [], infoBlocks = []; 

rectangles.push(new Rectangle(navDataOptions), new Rectangle(coderOptions),
new Rectangle(ofmOptions), new Rectangle(timeMOptions), new Rectangle(modulatorOptions),
new Rectangle(meandrOptions), new Rectangle(pspOptions), new Rectangle(carrierOptions));

circles.push(new Circle(circle1Options), new Circle(circle2Options))

lines.push(new Line(line1Options), new Line(line2Options), new Line(line3Options),
new Line(line4Options), new Line(line5Options), new Line(line6Options),
new Line(line7Options), new Line(line8Options), new Line(line9Options),
new Line(line10Options), new Line(line11Options), new Line(line12Options),
new Line(line13Options))

infoBlocks.push(new InfoBlock(timeLabelBlockOptions), new InfoBlock(digitalInfoOptions),
new InfoBlock(digitalInfoRawOptions), new InfoBlock(binaryMeandrOptions));


Rectangle.makeHTML(rectangles);
Circle.makeHTML(circles);
Line.makeHTML(lines);
InfoBlock.makeHTML(infoBlocks);


var string = 1, frame = 1, superFrame = 1; 
function validateData(){
    if(!(string % 16)){
        frame++;
        string = 1;
        clearInterval(time);
        time = setInterval(function(){
            seconds += 1;
            statBlockTime.innerHTML = seconds;
        },1000);
        if(!(frame % 6)){
            superFrame++;
            frame = 1;
        }
    }
}

seconds = 0;

var time = setInterval(function(){
    seconds += 1;
    statBlockTime.innerHTML = seconds;
},1000)


//timers
isDataTime = true;
(function changeKey(){
    if(isDataTime){
        var delay = 1700;
        isDataTime = !isDataTime;
        lineId7.setAttribute('y1', line6Options.y2 + '%');
        infoBlock1.style.display = 'block';
        infoBlock0.style.display = 'none';
        infoBlock2.style.display = 'block';
        infoBlock3.style.display = 'block';
        statBlockString.innerHTML = string;
        statBlockFrame.innerHTML = frame;
        statBlockSuperFrame.innerHTML = superFrame;        
        string += 1;
        validateData();
        return setTimeout(changeKey, delay);    
    }else{
        delay = 300;
        isDataTime = !isDataTime;
        lineId7.setAttribute('y1', (parseInt(line6Options.y2) - 2*LINELENGTH) + '%' );
        infoBlock1.style.display = 'none';
        infoBlock0.style.display = 'block';
        infoBlock2.style.display = 'none';
        infoBlock3.style.display = 'none';
        return setTimeout(changeKey, delay);        
    }
})();
