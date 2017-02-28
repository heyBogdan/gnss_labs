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
	var input1, input2;
	if(input1Arg.length >= input2Arg.length){
		input1 = input1Arg;
		input2 = input2Arg;
	}else{
		input1 = input2Arg;
		input2 = input1Arg;
	}

	var N = input1.length,
		output = [],
        norm, sum,  i, j;
    
    for (i = 0; i < 2*N; i++) {
        sum = 0;
        for (j = 0; j < N; j++) {
            sum += (input2[j] * (input1[j-N+i] || 0));
        }
        output[i] = sum;
    }
    console.log(output);
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
       		        display: false
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

var lineChart1, lineChart2, lineChart3;




function mCode512(){
	var startReg = readReg();


	var mCode512 = genMcode512(startReg),
		xArgs256 = xArgs(256),
		xArgs512 = xArgs(512),
		xArgs1024 = xArgs(1024);

	var aCorr = corr(mCode512,mCode512);
	
	var ctx1 = document.getElementById("myChart1"),
		ctx2 = document.getElementById("myChart2"),
		ctx3 = document.getElementById("myChart3");

	var color = "rgba(" + random(255,0) + ',' + random(255,0) + ',' + random(255,0) + ',1)';

	var fft = new FFT(1024, 44100);
    fft.forward(aCorr);
    var spectrum = fft.spectrum;

    console.log(spectrum);

	if(lineChart1){
		lineChart1.clear();
		lineChart1.destroy();
		
		lineChart1 = genChart(ctx1, xArgs512, mCode512, "М-ПОСЛЕДОВАТЕЛЬНОСТЬ 512",color);
	}else{
		lineChart1 = genChart(ctx1, xArgs512, mCode512, "М-ПОСЛЕДОВАТЕЛЬНОСТЬ 512",color);
	}

	if(lineChart2){
		lineChart2.clear();
		lineChart2.destroy();
		
		lineChart2 = genChart(ctx2, xArgs1024, aCorr, "АКФ",color);
	}else{
		lineChart2 = genChart(ctx2, xArgs1024, aCorr, "АКФ",color);
	}
	
	if(lineChart3){
		lineChart3.clear();
		lineChart3.destroy();
		
		lineChart3 = genChart(ctx3, xArgs256, spectrum, "СПМ",color);
	}else{
		lineChart3 = genChart(ctx3, xArgs256, spectrum, "СПМ",color);
	}
}
