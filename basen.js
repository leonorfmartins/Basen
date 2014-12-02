binToDec = function(bin) {
	if (bin.length === 1) {
		return bin;
	}
	var result=0;
	for (var i=bin.length-1, pos=0; i>=0; i--, pos++) {
		var currDigit = bin[i];
		var multiplier = Math.pow(2,pos);
		var value = currDigit === '1' ? multiplier * 1 : 0;
		result += value;
	
	}
	return result;
};


