var student = require('./student')
var teacher = require('./teacher')

function add(teachers,students) {
	teacher.add(teachers)
	students.forEach(function (item,index) {
		student.add(item)
	})
}
exports.add = add