// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
//  Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
    name: 'Olha',
    age: 22,
    country: 'Ukraine',
    city: 'Kharkiv',
    showData: function () {
        console.log(`Hello, my name ${this.name}, i'm ${this.age} old, i live in ${this.country} in ${this.city} city`)
    },
    receiveData: function (newName, newAge, newCountry, newCity) {
        this.name = newName;
        this.age = newAge;
        this.country = newCountry;
        this.city = newCity
    }
}

user.showData()
user.receiveData('Katya',22, 'Poland', 'Warsaw')
user.showData()
