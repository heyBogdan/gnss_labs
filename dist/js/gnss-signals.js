var rmsSlider = document.getElementById('slider-range1');
var delaySlider = document.getElementById('slider-range2');
var fdSlider = document.getElementById('slider-range3');
var fifSlider = document.getElementById('slider-range4');
var tsSlider = document.getElementById('slider-range5');

var lineChart1, lineChart2, lineChart3, lineChart4, lineChart5;

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

noUiSlider.create(fdSlider, {
    start: [16],
    tooltips: [true],
    step: 1,
    range: {
        'min': 1,
        'max': 30
    }
});

noUiSlider.create(fifSlider, {
    start: [2.5],
    tooltips: [true],
    step: 0.1,
    range: {
        'min': 0.1,
        'max': 5
    }
});

noUiSlider.create(tsSlider, {
    start: [1],
    tooltips: [true],
    step: 0.05,
    range: {
        'min': 0.1,
        'max': 1
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
		
	for(var i = 0; i < 511; i++){
		mCode[i] = register[6];
		newBit = register[4]*register[8];
		shiftReg(register);
		register[0] = newBit;
	}


	return mCode;
}

function addPeriods(mCode, periods){
	var mCodePeriods = [];

	for (var i = 0; i < periods; i++){
		Array.prototype.push.apply(mCodePeriods, mCode);
	}

	return mCodePeriods;	
}

function corr(input1Arg,input2Arg){
	var input1 = input1Arg, input2 = input2Arg;
	console.log('Вход1',input1);
	console.log('Вход2',input2);
	var N1 = input1.length,
		N2 = input2.length,
		output = [],
        norm, sum,  i, j;
    console.log('N1',N1, 'N2', N2);
    for (i = 0; i < 2*N1; i++) {
        sum = 0;
        for (j = 0; j < N2; j++) {
            sum += (input2[j] * (input1[j-N2+i] || 0));
        }
        output[i] = sum;
    }
    console.log('ВЫХОД',output);
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
		arr[i] = 20 * Math.log10(arr[i]);
	}
}



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

function addZerosForPow2(signal, periods){
	for(var i = 0; i < periods; i++){
 		signal.push(0);
 	};
}

function addDelay(arr, delay, periods){
	for(var i = 0; i < delay; i++){
		arr.unshift(arr[arr.length - 1 - i]); 
	}
	var arr2 = arr.slice(0,511*periods);
	return arr2;
}

function  convertRMSToSNR(RMS){
	var amplitude = 1;
	return 20 * Math.log10(amplitude/RMS);
}

function genCode(){
	var ctx1 = document.getElementById("myChart1"),
		ctx2 = document.getElementById("myChart2"),
		ctx3 = document.getElementById("myChart3");
	var color = "rgba(75,192,192,1)";		
	var startReg = readReg();
	var expansivity = 8;
	
	var periods = +lab_periodNum.value;
	var mCode512 = genMcode512(startReg);

	var signal = addPeriods(mCode512, periods);	

	if(lab_addDelay.checked){
			var delay = delaySlider.noUiSlider.get();
			signal = addDelay(signal, delay,periods);
	}
 
	if(lab_addNoise.checked){
			
			var RMS = rmsSlider.noUiSlider.get();
			var gaussNoise = genGaussNoise(signal.length, RMS);
			addSignal(signal, gaussNoise);
	}

	var aCorr = corr(signal, mCode512); 

	if(lineChart1){
		lineChart1.clear();
		lineChart1.destroy();
		
		lineChart1 = genChart(ctx1, xArgs(signal.length), signal, "М-ПОСЛЕДОВАТЕЛЬНОСТЬ 512",color);
	}else{
		lineChart1 = genChart(ctx1, xArgs(signal.length), signal, "М-ПОСЛЕДОВАТЕЛЬНОСТЬ 512",color);
	}

	if(lineChart2){
		lineChart2.clear();
		lineChart2.destroy();
		
		lineChart2 = genChart(ctx2, xArgs(aCorr.length), aCorr, "АКФ",color);
	}else{
		lineChart2 = genChart(ctx2, xArgs(aCorr.length), aCorr, "АКФ",color);
	}
	
	// var mCodeExt = extendArr(mCode512, expansivity); 

	// var signalExt = extendArr(signal, expansivity); 

	// var aCorrExt = extendArr(aCorr, expansivity);



	// var fft = new FFT(aCorrExt.length, 44100);
 //    fft.forward(aCorrExt);


	addZerosForPow2(signal, periods);

 	var signalExt = extendArr(signal, expansivity);



	var fft = new FFT(signalExt.length, 44100);
    fft.forward(signalExt);
    var spectrum = fft.spectrum;

    normalizeByMax(spectrum);
    translateToDB(spectrum);

	if(lineChart3){
		lineChart3.clear();
		lineChart3.destroy();
		
		lineChart3 = genChart(ctx3, xArgs(spectrum.length), spectrum, "СПМ",color);
	}else{
		lineChart3 = genChart(ctx3, xArgs(spectrum.length), spectrum, "СПМ",color);
	}
}

function genСountDown(ts, fd){
	var  t = [0];
	var td = 1/fd;

	for (var i = 1; i < (ts)/td; i++){
		t[i] = t[i-1] + td;
	}

	return t;
}

function genCarrPhases(fif,phase,t){
	var carrPhases = [];

	for (var i = 0; i < t.length; i++){
		carrPhases[i] = phase + 2 * Math.PI * fif * t[i];
	}

	return carrPhases;
}

function genCodePhases(fc,phase,t){
	var codePhases = [];

	for (var i = 0; i < t.length; i++){
		codePhases[i] = phase + fc * t[i];
	}

	return codePhases;
}

function getCos(carrPhases){
	var signal = [];
	
	for (var i = 0; i < carrPhases.length; i++){
		signal[i] = Math.cos(carrPhases[i]);
	}

	return signal;
}

function genFreqArgs(N, fd){
	var f = [];
	for (var i = 0; i < N; i++){
		f[i] = i * (fd/(2*N));
		f[i] = f[i].toPrecision(3);
	}

	return f;
}

function addZerosToPow2(signal){
	var N = signal.length;
	var nInBinary = N.toString(2);
	if (Math.pow(2,nInBinary.length) % N){
		var nearestNum = Math.pow(2,nInBinary.length);
		var numberOfAdditions = nearestNum - N;
		for (var i = 0; i < numberOfAdditions; i ++){
			signal.push(0)
		}
	}
	console.log(signal);
}

function getCodePhasesIndexes(phases, N){
	console.log(phases);
	var indexes = [];
	for(var i = 0; i < phases.length; i++){
		indexes[i] = Math.floor(phases[i] % N);
	}
	console.log(indexes);
	return indexes;
}
function getCode(code, indexes){
	var result = [];
	for (var i = 0; i < indexes.length; i++){
		result[i] = code[indexes[i]];
	}
	return result;
}
function mulSiganlCode(carrier, code){
	var result = [];
	for (var i = 0; i < carrier.length; i++){
		result[i] = carrier[i] * code[i];
	}
	return result
}

function formatValue(x, val){
	var result = [];
	for (var i = 0; i < x.length; i++) {
		result[i] = x[i].toPrecision(val);
	}
	return result
} 

function genSignal(){
	var ctx1 = document.getElementById("myChart1"),
		ctx2 = document.getElementById("myChart2"),
		ctx3 = document.getElementById("myChart3");
		ctx4 = document.getElementById("myChart4"),
		ctx5 = document.getElementById("myChart5");

	var color = "rgba(75,192,192,1)";			
	var startReg = readReg();
	var fd = fdSlider.noUiSlider.get() * 1e6,
		fif = fifSlider.noUiSlider.get() * 1e6,
		fc = 0.511e6,
		codeLength = 511,
		ts = tsSlider.noUiSlider.get() * 1e-3,
		сarrPh0 = 0,
		codePh0 = 5000;

	var t = genСountDown(ts, fd);

	var carrPhases = genCarrPhases(fif,сarrPh0, t);

	var carrier = getCos(carrPhases);

	var tFormat = formatValue(t,2);
	
	if(lineChart1){
		lineChart1.clear();
		lineChart1.destroy();
		
		lineChart1 = genChart(ctx1, tFormat.slice(0,100), carrier.slice(0,100), "Несущая (первые 100 отсчётов)",color);
	}else{
		lineChart1 = genChart(ctx1, tFormat.slice(0,100), carrier.slice(0,100), "Несущая (первые 100 отсчётов)",color);
	}


	var codePhases = genCodePhases(fc,0,t);
	var codePhasesIndexes = getCodePhasesIndexes(codePhases, codeLength);

	var mCode512 = genMcode512(startReg);


	var code = getCode(mCode512, codePhasesIndexes);

	if(lineChart2){
		lineChart2.clear();
		lineChart2.destroy();
		
		lineChart2 = genChart(ctx2, tFormat.slice(0,100), code.slice(0,100), "М-последовательность 511 для отсчётов времени (100 отсчётов)",color);
	}else{
		lineChart2 = genChart(ctx2, tFormat.slice(0,100),code.slice(0,100), "М-последовательность 511 для отсчётов времени (100 отсчётов)" ,color);
	}

	var signal = mulSiganlCode(carrier,code);

	if(lineChart3){
		lineChart3.clear();
		lineChart3.destroy();
		
		lineChart3 = genChart(ctx3, tFormat.slice(0,100), signal.slice(0,100), "Несушая после модуляции (первые 100 отсчётов)",color);
	}else{
		lineChart3 = genChart(ctx3, tFormat.slice(0,100), signal.slice(0,100), "Несущая после модуляции (первые 100 отсчётов)",color);
	}

	addZerosToPow2(carrier);


	var fft = new FFT(carrier.length, fd);
    fft.forward(carrier);
    var spectrumCar = fft.spectrum;


    normalizeByMax(spectrumCar);
    translateToDB(spectrumCar);
  

    var f = genFreqArgs(spectrumCar.length, fd);
    
	if(lineChart4){
		lineChart4.clear();
		lineChart4.destroy();
		
		lineChart4 = genChart(ctx4, f, spectrumCar, "Спектр несущей",color);
	}else{
		lineChart4 = genChart(ctx4, f, spectrumCar, "Спепктр несущей",color);
	}    

	addZerosToPow2(signal);
	var fft1 = new FFT(carrier.length, fd);
    fft1.forward(signal);
    var spectrumSignal = fft1.spectrum;	
    normalizeByMax(spectrumSignal);
    translateToDB(spectrumSignal); 
    
	if(lineChart5){
		lineChart5.clear();
		lineChart5.destroy();
		
		lineChart5 = genChart(ctx5, f, spectrumSignal, "Спектр модулированного сигнала",color);
	}else{
		lineChart5 = genChart(ctx5, f, spectrumSignal, "Спектр модулированного сигнала ",color);
	}
}


	

lab_mCode512.onclick = genCode;
lab_signal.onclick = genSignal;
lab_addNoise.onchange = function(){
	document.querySelector(".lab-gnss-signals_options_add-noise__RMS").classList.toggle('lab-gnss-signals_options_add-noise__RMS--active');
	document.querySelector('.lab-gnss-signals_options_add-noise_RMS__SNR').innerHTML = convertRMSToSNR(rmsSlider.noUiSlider.get());
};
lab_addDelay.onchange = function(){
	document.querySelector(".lab-gnss-signals_options_add-delay__delay").classList.toggle('lab-gnss-signals_options_add-delay__delay--active');
};
rmsSlider.noUiSlider.on("change", function() {
	document.querySelector('.lab-gnss-signals_options_add-noise_RMS__SNR').innerHTML = convertRMSToSNR(rmsSlider.noUiSlider.get());
});
