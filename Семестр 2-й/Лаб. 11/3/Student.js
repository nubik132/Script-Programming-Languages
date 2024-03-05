class Student{
    constructor(name, age, courses){
        this.name = name;
        this.age = age;
        this.courses = courses;
    }

    getCoursesCount(){
        return this.courses.length;
    }
    addCourse(name){
        this.courses.push(name);
    }
    removeCourse(name){
        this.courses = this.courses.filter((course) => course != name);
    }
}

let stud1 = new Student("Vald", 12, ["Теория струн", "Чёрная материя"]);
let stud2 = new Student("Fedya", 22, ["Органическая химия"]);
let stud3 = new Student("Samus", 73, ["Математика", "Физика", "Химия"]);