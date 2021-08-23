function cStr(input) {
	return typeof input == 'string'
	
}

function cInt(input) {
    	return typeof input == 'number'
}

function cBoolean(input) {
	return typeof input == 'boolean'
}

module.exports = {
	cStr,
	cInt,
	cBoolean
}
