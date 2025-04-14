
const StudentModel = require("../models/Student");

exports.getAllStudents = async() => {
    return await StudentModel.find();
};

exports.createStudent = async(student) => {
    return await StudentModel.create(student);
};

exports.getStudentById = async(id) => {
    return await StudentModel.findById(id);
};

exports.updateStudent = async (id, student) => {
    return await StudentModel.findByIdAndUpdate(id, student);
};

exports.deleteStudent = async (id) => {
    return await StudentModel.findByIdAndDelete(id);
}

exports.searchStudent = async (keyword) => {
    const students = await StudentModel.find();
    return students.filter(student => 
        (student.name && student.name.toLowerCase().trim().includes(keyword.toLowerCase().trim())) || 
        (student.address && student.address.toLowerCase().trim().includes(keyword.toLowerCase().trim()))
    );
}