var rmsSlider = document.getElementById('slider-range1');
var delaySlider = document.getElementById('slider-range2');

noUiSlider.create(rmsSlider, {
    start: [5],
    tooltips: [true],
    step: 0.1,
    range: {
        'min': 0,
        'max': 10
    }
});

noUiSlider.create(delaySlider, {
    start: [100],
    tooltips: [true],
    step: 1,
    range: {
        'min': 0,
        'max': 511
    }
});

function shiftReg(register){
	for(var i =  register.length-1; i > 0; i--){
		register[i] = register[i-1];
	}
}
function genMcode512(startReg){
	var register = startReg, 
		mCode = [],
		newBit;
		
	for(var i = 0; i < 512; i++){
		mCode[i] = register[6];
		newBit = register[4]*register[8];
		shiftReg(register);
		register[0] = newBit;
	}

	return mCode;
}

function corr(input1Arg,input2Arg){
	var input1 = input1Arg, input2 = input2Arg;

	var N = input2.length,
		output = [],
        norm, sum,  i, j;
    
    for (i = 0; i < 2*N; i++) {
        sum = 0;
        for (j = 0; j < N; j++) {
            sum += (input2[j] * (input1[j-N+i] || 0));
        }
        output[i] = sum;
    }
    return output;
}

function extendArr(arr, n){
	var output = [];
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < n; j++){
			output[i*n + j] = arr[i];
		}
	} 
	return output;
} 

function genChart(ctx, xdata, ydata, label, color){
	
	var data = {
		labels: xdata,
	    datasets: [
	        {
	            label: label,
	            fill: false,
	            lineTension: 0.1,
	            backgroundColor: "rgba(75,192,192,0.4)",
	            borderColor: "rgba(75,192,192,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "rgba(75,192,192,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor:"rgba(75,192,192,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: ydata,
	            spanGaps: false
	        }
	    ]
	};
	var myLineChart = new Chart(ctx, {
	    type: 'line',
	    data: data,
	    options: {
	    	maintainAspectRatio: false,
	    	scales: {
       		    xAxes: [{
				    ticks: {
       				autoSkip: true,
        			maxTicksLimit: 20
   					}
				}]
       		}
	    }
	});

	return myLineChart;
}

function readReg(){
	var reg = [];
	for(var i = 0; i < 9; i++){
		reg[i] = +document.getElementById('reg-bit-' + i).value;
	}
	return reg;
}

function random(max, min){
	return Math.floor(Math.random() * (max - min)) + min;
}

function xArgs(size){
	var output = []
	
	for(var i = 0; i < size; i++){
		output.push(i);
	}

	return output;
}

function normalizeByMax(arr){
	var max = Math.max.apply(null, arr);
	console.log(max);
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i] / max ;
	}
} 

function translateToDB(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = 10 * Math.log10(arr[i]);
	}
}

var lineChart1, lineChart2, lineChart3;

function genGaussNoise(N, RMS){
	var x1 = [], x2 = [], output = [];

	for (var i = 0; i < N; i++){
		x1[i] = Math.random();
		x2[i] = Math.random();
		output[i] =  RMS * Math.sqrt(-2 * Math.log(x1[i])) * Math.sin(2 * Math.PI * x2[i]);
	}

	return output;
}

function addSignal(initArr, addedArr){
	if(initArr.length === addedArr.length){
		for (var i = 0; i < initArr.length; i++){
			initArr[i] = initArr[i] + addedArr[i];
		}
	}else{
		console.error("Arrays sizes are different");
	}
}

function addDelay(arr, delay){
	for(var i = 0; i < delay; i++){
		arr.unshift(0); 
	}
	
}

function mCode512(){
	var startReg = readReg();
	var expansivity = 8;
	var color = "rgba(75,192,192,1)";


	var mCode512 = genMcode512(startReg),

		xArgs256 = xArgs(256),
		xArgs512 = xArgs(512),
		xArgs1024 = xArgs(1024),
		xArgs4096 = xArgs(4096),
		xArgs8192 = xArgs(8192);

	var ctx1 = document.getElementById("myChart1"),
		ctx2 = document.getElementById("myChart2"),
		ctx3 = document.getElementById("myChart3");		

	var signal = mCode512.slice();	

	if(lab_addDelay.checked){
			var delay = delaySlider.noUiSlider.get();
			addDelay(signal, delay);
	}
 
	if(lab_addNoise.checked){
			
			var RMS = rmsSlider.noUiSlider.get();
			var gaussNoise = genGaussNoise(signal.length, RMS);
			addSignal(signal, gaussNoise);
	}

	console.log(signal);
	var aCorr = corr(signal, mCode512); 
	console.log(aCorr);
	

	if(lineChart1){
		lineChart1.clear();
		lineChart1.destroy();
		
		lineChart1 = genChart(ctx1, xArgs512, signal, "М-ПОСЛЕДОВАТЕЛЬНОСТЬ 512",color);
	}else{
		lineChart1 = genChart(ctx1, xArgs512, signal, "М-ПОСЛЕДОВАТЕЛЬНОСТЬ 512",color);
	}

	if(lineChart2){
		lineChart2.clear();
		lineChart2.destroy();
		
		lineChart2 = genChart(ctx2, xArgs1024, aCorr, "АКФ",color);
	}else{
		lineChart2 = genChart(ctx2, xArgs1024, aCorr, "АКФ",color);
	}
	
	// var mCodeExt = extendArr(mCode512, expansivity); 

	// var signalExt = extendArr(signal, expansivity); 

	var aCorrExt = extendArr(aCorr, expansivity);


	var fft = new FFT(aCorrExt.length, 44100);
    fft.forward(aCorrExt);
    var spectrum = fft.spectrum;

    normalizeByMax(spectrum);
    translateToDB(spectrum);

	if(lineChart3){
		lineChart3.clear();
		lineChart3.destroy();
		
		lineChart3 = genChart(ctx3, xArgs4096, spectrum, "СПМ",color);
	}else{
		lineChart3 = genChart(ctx3, xArgs4096, spectrum, "СПМ",color);
	}
}


lab_mCode512.onclick = mCode512;
lab_addNoise.onchange = function(){
	document.querySelector(".lab-gnss-signals_options_add-noise__RMS").classList.toggle('lab-gnss-signals_options_add-noise__RMS--active');
};
lab_addDelay.onchange = function(){
	document.querySelector(".lab-gnss-signals_options_add-delay__delay").classList.toggle('lab-gnss-signals_options_add-delay__delay--active');
};