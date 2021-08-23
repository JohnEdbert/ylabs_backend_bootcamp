/*var bilKoma = prompt("masukan angka: ")
parseInt(bilKoma)
console.log(parseInt(bilKoma))

var num = 35
var str = num.toString()
console.log(str)
*/

/*var number = 31.5/*prompt("masukan angka: ")*/
function checkNum(number){
	parseInt(number)
	if (number % 2 == 0) {
		return "ini angka genap"
		}
	else {
		return "ini angka ganjil"
		}
	var numToStr = number.toString()
}
module.exports = {
	checkNum
}
