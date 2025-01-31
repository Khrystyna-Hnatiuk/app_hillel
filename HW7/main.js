let company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        web: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
}

function countSalary(company) {
    let sum = 0;
    for (let key in company) {
        if (Array.isArray(company[key])) {
            sum+= company[key].reduce((acc,curr)=>acc+curr.salary,0)
        }
        else if (typeof (company[key]) === 'object' && company[key] !== null) {
            sum += countSalary(company[key])
        }
    }
    return sum
}
console.log(countSalary(company))







