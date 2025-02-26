class Student {
    constructor(name, surname, birthYear, marksArray, presentArray) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.marksArray = marksArray;
        this.presentArray = presentArray ;


    }
    getAge() {
        let year = new Date().getFullYear();
        let age = year - this.birthYear;
        return age;
    }
    getAverageMark() {
        if(this.marksArray.length === 0) return 0
        let sum = this.marksArray.reduce((acc, curr) => acc + curr, 0);
        let averageMark = parseFloat((sum / this.marksArray.length).toFixed(3));
        return averageMark;
    }
    present() {
        if (this.presentArray.length < 25) {
            this.presentArray.push(true);
        }
    }
    absent() {
        if (this.presentArray.length < 25) {
            this.presentArray.push(false)

        }
    }

    summary() {
        const averageMark = this.getAverageMark();
        const presentAtLesson = this.presentArray.filter((elem) => elem === true);
        const averagePresence = this.presentArray.length > 0 ? presentAtLesson.length / this.presentArray.length : 0;
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


}


//Виведе Редиска
console.log('Student 1')
const student1 = new Student('Anna', 'Dowson', 2005, [77, 60, 70, 86, 90, 88, 80, 99, 95, 90, 85, 94, 96], []);
console.log('Age: ', student1.getAge())
console.log('Average mark: ', student1.getAverageMark())
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.absent()
student1.absent()
student1.present()
student1.present()
student1.absent()
student1.absent()
student1.absent()
student1.absent()
student1.present()
student1.absent()
student1.absent()
student1.absent()
student1.absent()
student1.present()
student1.absent()
student1.absent()
student1.present()// останній елемент, що попаде в масив (25)
student1.present()
student1.present()

console.log(student1.presentArray)
console.log(student1.summary())



//Виведе - добре, але можна краще
console.log('')
console.log('Student 2')
const student2 = new Student('KAte', 'Milson', 2000, [100, 90, 96, 88, 98, 99, 100, 88, 67, 90, 99], []);
console.log('Age: ', student2.getAge())
console.log('Average mark: ', student2.getAverageMark())
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.present()
student2.present()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.present()
student2.absent()
student2.absent()
student2.absent()

console.log(student2.presentArray)
console.log(student2.summary())


//Виведе Молодець!
console.log('')
console.log('Student 3')
const student3 = new Student('Mike', 'Keur', 2002, [100, 99, 90, 88, 99, 95, 96, 97, 94, 90, 100], []);
console.log('Age: ', student3.getAge())
console.log('Average mark: ', student3.getAverageMark())
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

console.log(student3.presentArray)
console.log(student3.summary())