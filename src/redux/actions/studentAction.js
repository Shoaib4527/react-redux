class StudentAction {
    static ADD_STUDENT = "ADD_STUDENT"

    static  addStudent(student) {
        return {
            type : this.ADD_STUDENT,
            payload: student
        }
    }
    
    static DELETE_STUDENT ="DELETE_STUDENT"

    static delStudents(student) {
        return {
            type : this.DELETE_STUDENT,
            payload : student
        }
    }
}
export default StudentAction;