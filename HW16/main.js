class Student {
    #marksArray = [];
    #presentArray = [];
    constructor(name, surname, birthYear, marksArray = [], presentArray = []) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;

        if (Array.isArray(marksArray)) {
            this.#marksArray = marksArray;
        }
        if (Array.isArray(presentArray)) {
            this.#presentArray = presentArray;
        }

    }
    getAge() {
        let year = new Date().getFullYear();
        let age = year - this.birthYear;
        return age;
    }
    getAverageMark() {
        if (this.#marksArray.length === 0 || !this.#marksArray) return 0
        let sum = this.#marksArray.reduce((acc, curr) => acc + curr, 0);
        let averageMark = (sum / this.#marksArray.length).toFixed(3);
        return averageMark;
    }
    set marks(mark) {
        if (typeof (mark) === 'number' && mark >= 0 && mark <= 100) {
            this.#marksArray.push(mark)
        }
        else {
            console.log('Оцінка має бути більше 0 і менше 100')
        }
    }


    present() {
        if (this.#presentArray.length < 25) {
            this.#presentArray.push(true);
        }
    }
    absent() {
        if (this.#presentArray.length < 25) {
            this.#presentArray.push(false)

        }
    }

    summary() {
        const averageMark = this.getAverageMark();
        const presentAtLesson = this.#presentArray.filter((elem) => elem === true);
        const averagePresence = this.#presentArray.length > 0 ? presentAtLesson.length / this.#presentArray.length : 0;
        console.log(averagePresence);

        if (averageMark >= 90 && averagePresence >= 0.9) {
            return 'Молодець!';
        }
        else if (averageMark >= 90 || averagePresence >= 0.9) {
            return 'Добре, але можна краще';
        }
        else {
            return 'Редиска!'
        }
    }

    get marks() {
        return [...this.#marksArray]
    }
    get presense() {
        return this.#presentArray.length
    }


}


//Виведе Редиска
console.log('Student 1')
const student1 = new Student('Anna', 'Dowson', 2005);
student1.addMark(77)
student1.addMark(60)
student1.addMark(60)
student1.addMark(63)
student1.addMark(70)

student1.absent()
student1.absent()
student1.absent()
student1.absent()
student1.present()
console.log('Age: ', student1.getAge())
console.log('Average mark: ', student1.getAverageMark())
console.log('Marks: ', student1.marks);
console.log('Attendance count: ', student1.presense);
console.log(student1.summary())


//Виведе - добре, але можна краще
console.log('')
console.log('Student 2')
const student2 = new Student('KAte', 'Milson', 2000);
student2.addMark(100)
student2.addMark(90)
student2.addMark(88)
student2.addMark(100)

student2.absent()
student2.absent()
student2.present()
student2.absent()
student2.present()

console.log('Age: ', student2.getAge())
console.log('Average mark: ', student2.getAverageMark())
console.log('Marks: ', student2.marks);
console.log('Attendance count: ', student2.presense);
console.log(student2.summary())


//Виведе Молодець!
console.log('')
console.log('Student 3')
const student3 = new Student('Mike', 'Keur', 2002);
student3.addMark(100)
student3.addMark(90)
student3.addMark(95)
student3.addMark(94)
student3.addMark(99)

student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student3.absent()
console.log('Age: ', student3.getAge())
console.log('Average mark: ', student3.getAverageMark())
console.log('Marks: ', student3.marks);
console.log('Attendance count: ', student3.presense);
console.log(student3.summary())