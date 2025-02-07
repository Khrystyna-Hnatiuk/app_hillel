// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.


const contactBook = {
    contact: [

        { name: 'Olha', number: '+380988347944', email: 'olha@gmail.com' },
        { name: 'Mykola', number: '+380637024567', email: 'mykolq@gmail.com' },
        { name: 'Oksana', number: '+380954359000', email: 'oksaaaana@gmail.com' },
        { name: 'Ihor', number: '+380988047344', email: 'Ihor@gmail.com' }

    ],
    addContact: function (name, number, email) {
        const isExist = this.contact.some(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (isExist) {
            return (`contact with name: ${name} is already exists`)
        }
        this.contact.push({ name, number, email })
    },
    searchContact: function (searchedElement) {
        let foundContact = this.contact.filter(elem => elem.name.toLowerCase().includes(searchedElement.toLowerCase()))
        return foundContact.length ? foundContact : 'contact is not found'
    }


}
contactBook.addContact('Kate', '+38094573844', 'kate@gmail.com')
console.log(contactBook.addContact('Olha', '+38094573844', 'kate@gmail.com'))
console.log(contactBook.searchContact('mykolA'))
console.log(contactBook.searchContact('arthur'))
console.log(contactBook.searchContact('ol'))
console.log(contactBook.contact)





