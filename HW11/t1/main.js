// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
let body = document.querySelector('body')
let number = 10;

let table = document.createElement('table');
table.border = 1;
body.appendChild(table)

let thead = document.createElement('thead');
table.appendChild(thead);
let tr = document.createElement('tr');
thead.appendChild(tr)
let firstTh = document.createElement('th')
tr.appendChild(firstTh)

for (let i = 1; i <= number; i++) {
    let th = document.createElement('th')
    th.textContent = i;
    tr.appendChild(th)
}

let tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let i = 1; i <= number; i++) {

    let trInTbody = document.createElement('tr');
    let thInBody = document.createElement('th');

    thInBody.textContent = i
    trInTbody.appendChild(thInBody)
    for (let j = 1; j <= number; j++) {
        let td = document.createElement('td');
        td.textContent = i * j
        trInTbody.appendChild(td)
    }
    tbody.appendChild(trInTbody)

}

