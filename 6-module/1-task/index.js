/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let table = document.createElement("table");
    table.innerHTML = `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
  </thead>
    `;

    let tbody = document.createElement("tbody");
    for (let row of rows) {
      let tr = document.createElement("tr");
      tr.innerHTML += `<td>${row.name}</td>`;
      tr.innerHTML += `<td>${row.age}</td>`;
      tr.innerHTML += `<td>${row.salary}</td>`;
      tr.innerHTML += `<td>${row.city}</td>`;

      let button = document.createElement("button");
      button.textContent = "X";
      button.onclick = () => tr.remove();

      let td = document.createElement("td");

      td.appendChild(button);
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    this.elem = table;
  }
}
