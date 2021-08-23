const result = require('./notation')
const check = require('./validator')

input1 = "Hello World"
input2 = 34
number1 = 34.8
number2 = 12

console.log("angka ini",number1, "merupakan: ", result.checkNum(number1))
console.log("angka ini",number2, "merupakan: ", result.checkNum(number2))

console.log(
	"Apakah", input1, "merupakan string? ",'\n', check.cStr(input1),'\n',
	"Apakah", input1, "merupakan integer? ",'\n', check.cInt(input1))

const express = require('express')

const app = express()

app.get("/", (req, res)=>{
	res.status(200).json({
		status: 200,
		result:{
			message:"Server Ok"
		}
	})
})

app.listen(8080, ()=>{
	console.log("Server listen on port 8080")
})
