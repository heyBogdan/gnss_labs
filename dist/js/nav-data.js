function SuperFrame(frameNum){
    this.frameNum = frameNum;
}

function Frame(stringNum){
    this.stringNum = stringNum;
    this.strings = [];
}
function NavString(parentName){
    this.parentName = parentName;
}    

var superFrame = new SuperFrame(5);
var frames = [];
for(var i = 0; i < superFrame.frameNum ; i++){
    frames.push(new Frame(15));
    frames[i].name = "frame" + i;
    for(var j = 0; j < frames[i].stringNum ; j++){
        frames[i].strings.push(new NavString(frames[i].name));
    }
}

function makeList(superFrame,frames){
    var superFrameList = document.createElement('ul');
    superFrameList.classList.add('superframe-list')

    frames.forEach(function(frame,frameNum){
        var frameElem = document.createElement('li');
        frameElem.classList.add('frame');
        frameElem.onclick = selectFrame;
        frameElem.innerHTML = 'Кадр № ' + (frameNum + 1);
        var stringList = document.createElement('ul');

        frameElem.appendChild(stringList);

        frame.strings.forEach(function(string, stringNum){
            var stringElem = document.createElement('li')
            stringElem.classList.add('nav-string')
            stringElem.innerHTML = 'Строка № ' + (stringNum + 1);
            stringList.appendChild(stringElem);
        })
        superFrameList.appendChild(frameElem);
    })
    superFrameWrapper.appendChild(superFrameList);
};

function selectFrame(event){
    event.currentTarget.classList.toggle('active');
};

makeList(superFrame,frames);
console.log(frames)
