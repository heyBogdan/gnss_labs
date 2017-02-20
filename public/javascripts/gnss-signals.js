function shiftReg(register){
	for(var i =  register.length-1; i > 0; i--){
		register[i] = register[i-1];
	}
}
function genMcode512(){
	var register = [-1,-1,-1,-1,-1,-1,-1,-1,-1], mCode = [], newBit;
	for(var i = 0; i < 512; i++){
		mCode[i] = register[6];
		newBit = register[4]*register[8];
		console.log("Регистр: ",register);
		console.log("Новое значение первого бита: ", newBit);
		shiftReg(register);
		register[0] = newBit;
		console.log("Регистр после сдвига: ",register);
	}
	console.log("М-последовательность: ", mCode);
}