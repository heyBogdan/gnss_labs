function HammingLab(option){
    var elem = option.elem;
    var fullString = null;
    elem.addEventListener('click', function(e){
        if(!e.target.closest('.hamming_practice__btn')) return;
        var value = this.querySelector('input').value;
        var correctionSymbolsNum =  countCorrectionSymbolsNum(value.length);
        console.log(correctionSymbolsNum)
        
        var string = createDataSymbols(value);
        renderTable(string,'Информационные символы');

        fullString = addCorrectionSymbols(string, correctionSymbolsNum);
        renderTable(fullString, 'Информационные и проверочные символы');

        createRadioBtns(correctionSymbolsNum);

        var controlSums = [];
        for(var i = 0; i < correctionSymbolsNum; i++){
            var controlSum = {
                symbol: null,
                value: null
            } 
            controlSum.symbol = 'C' + '<sub>' + (i + 1) + '</sub>'; 
            controlSum.value = countControlSum(i); 
            controlSums[i] = controlSum;
        }

        renderTable(controlSums,'Контрольные суммы')

        var controlBits = controlSums.slice();
        controlBits.map(function(sum){
            var symbol = sum.symbol.slice(1);
            symbol = 'β' + symbol;
            sum.symbol = symbol;
            sum.value = sum.value%2
            return sum;
        })

        renderTable(controlBits, 'Проверочные символы')
    })
    function countCorrectionSymbolsNum(infoDataNum){
        for(var i = 0; i <= (Math.ceil(Math.log2(infoDataNum)) + 1); i++){
            if ((i + infoDataNum) <= (Math.pow(2,i) - 1)) return i;
        }
    }
    elem.addEventListener('change', function(e){
        if(!e.target.closest('.hamming_practice__radio-btns')) return;
        var selectedSymbol = parseInt(e.target.getAttribute('data-symb-number'));
        selectBitsForControlSum(selectedSymbol);
    })
    function countControlSum(correctionSymbol){
        var i = Math.pow(2,correctionSymbol) - 1;
        var result = 0;
        while(i < fullString.length){
            for(var j = i; (j < (i + Math.pow(2,correctionSymbol))) && (j < fullString.length); j++){
                result += fullString[j].value;
            }
            i += 2*Math.pow(2,correctionSymbol);
        }
        return result;
    }
    function selectBitsForControlSum(correctionSymbol){
        var i = Math.pow(2,correctionSymbol) - 1;
        var table = document.querySelectorAll('.table')[1];
        table.querySelectorAll('td').forEach(function(cell){
            cell.classList.remove('selected');
        })
        while(i < fullString.length){
            for(var j = i; (j < (i + Math.pow(2,correctionSymbol))) && (j < fullString.length); j++){
                table.querySelector('[data-cell-id="' + j + '"]').classList.add('selected');
            }
            i += 2*Math.pow(2,correctionSymbol);
        }
    }
    function createRadioBtns(number){
        for(var i = 0; i < number; i++){
            var radioBtnWrapper = document.createElement('div');
            radioBtnWrapper.classList = 'hamming_practice__radio-btns'
            var radioBtnLabel = document.createElement('label');
            radioBtnLabel.innerHTML = 'C' + '<sub>' + (i + 1) + '</sub>';
            var radioBtn  = document.createElement('input');
            radioBtn.type = 'radio';
            radioBtn.name = 'correctionSymbols';
            radioBtn.setAttribute('data-symb-number', i);
            radioBtnWrapper.appendChild(radioBtnLabel);
            radioBtnWrapper.appendChild(radioBtn);

            document.querySelector('.hamming_practice').appendChild(radioBtnWrapper);
        }
    }
    function createDataSymbols(value){
        var string = []
        for(var i = 0; i < value.length; i++ ){
            var dataSymbol = {
                symbol:null,
                value:null
            }
            dataSymbol.symbol = 'b' + '<sub>' + (i + 1) + '</sub>';
            dataSymbol.value = parseInt(value[i]);
            string[i] = dataSymbol;
        }
        return string;        
    }
    function addCorrectionSymbols(string, correctionSymbolsNum){
        var result = string.slice();
        for(var i = 0; i < correctionSymbolsNum; i++){
            var correctionSymbol = {
                symbol:null,
                value:null
            }
            correctionSymbol.symbol = 'β' + '<sub>' + (i + 1) + '</sub>';
            correctionSymbol.value = 0;
            result.splice(Math.pow(2,i)-1,0,correctionSymbol); 
        }
        return result;        
    }
    function renderTable(string, title){
        var table =  document.createElement('table');
        table.classList = 'table';
        var tableBody = document.createElement('tbody');
        var tableHead = document.createElement('caption');
        tableHead.innerHTML = title;
        var headRow = document.createElement('tr');
        var bodyRow = document.createElement('tr');
        string.forEach(function(cell,i){
            var headCell = document.createElement('th');
            headCell.innerHTML = cell.symbol;
            headRow.appendChild(headCell);


            var bodyCell = document.createElement('td');
            bodyCell.setAttribute('data-cell-id', i);
            bodyCell.innerHTML = cell.value;
            bodyRow.appendChild(bodyCell);

            if(!((i+1) % 20)) {
                tableBody.appendChild(headRow);
                headRow = document.createElement('tr');
                tableBody.appendChild(bodyRow);
                bodyRow = document.createElement('tr');                
            }    
        })
        tableBody.appendChild(headRow);
        tableBody.appendChild(bodyRow);
        table.appendChild(tableHead);
        table.appendChild(tableBody);
        document.querySelector('.hamming_practice').appendChild(table);
    }
}

var hammingLab = new HammingLab({
    elem: document.querySelector('.hamming_practice')
})