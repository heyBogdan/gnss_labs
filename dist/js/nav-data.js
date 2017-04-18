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
        frameElem.setAttribute('id','frame' + (frameNum + 1));
        frameElem.onclick = selectFrame;
        frameElem.innerHTML = 'Кадр № ' + (frameNum + 1);
        var stringList = document.createElement('ul');
        stringList.classList.add('nav-string-list');
        frameElem.appendChild(stringList);

        frame.strings.forEach(function(string, stringNum){
            var stringElem = document.createElement('li')
            stringElem.classList.add('nav-string');
            stringElem.onclick = selectNavString;
            stringElem.setAttribute('id','navString' + (stringNum + 1))
            if(stringNum < 4){
                stringElem.innerHTML = 'Строка №' + (stringNum + 1) + ' Опер. инфо (излучающий НКА)';
            }else{
                if(stringNum > 4){
                    var almanNKA = Math.ceil((frameNum*10 + (stringNum - 4))/2);

                    stringElem.innerHTML = 'Строка №' + (stringNum + 1) + ' Неопер. инфо (Альманах, спутник №' + almanNKA + ')';
                    if(almanNKA == 25) stringElem.innerHTML  = 'Строка №' + (stringNum + 1) + ' Неопер. инфо';
                }else{
                    
                    stringElem.innerHTML = 'Строка №' + (stringNum + 1) + ' Неопер. инфо для всех НКА';
                }
            }
            stringList.appendChild(stringElem);
        })
        superFrameList.appendChild(frameElem);
    })
    superFrameWrapper.appendChild(superFrameList);
};

var currentActiveFrame = null, prevActiveFrame = null;
var currentActiveNavString = null, prevActiveNavString = null;


function selectFrame(event){
    selectedFrame = event.currentTarget;
    if(selectedFrame === currentActiveFrame){
        selectedFrame.classList.toggle('active');
        currentActiveFrame = selectedFrame;
        if(currentActiveFrame.classList.value.indexOf('active') == -1){
            showNavStrings(false)
        }else{
            showNavStrings(true)
        }
    }else{
        if(currentActiveFrame){//not first time
            showNavStrings(false);
            prevActiveFrame = currentActiveFrame;
            prevActiveFrame.classList.remove('active');

        }
        currentActiveFrame = selectedFrame;
        currentActiveFrame.classList.add('active'); 
        showNavStrings(true);       
    }
};
function selectNavString(event){
    event.stopPropagation();
    selectedNavString = event.currentTarget;
    if(selectedNavString === currentActiveNavString){
        selectedNavString.classList.toggle('active');
        currentActiveNavString = selectedNavString;

    }else{
        if(currentActiveNavString){//not first time
            prevActiveNavString = currentActiveNavString;
            prevActiveNavString.classList.remove('active');

        }
        currentActiveNavString = selectedNavString;
        currentActiveNavString.classList.add('active'); 
    
    }

}

function showNavStrings(option){
    console.log(currentActiveFrame.children);
    currentActiveFrame.children[0].style.display = option?'block':'none';
}

makeList(superFrame,frames);
console.log(frames)
