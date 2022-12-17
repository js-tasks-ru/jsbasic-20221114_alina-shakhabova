function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    const currentRow = table.rows[i];

    if (currentRow.cells[3].dataset.available === "true") {
      currentRow.classList.add("available");
    } else if (currentRow.cells[3].dataset.available === "false") {
      currentRow.classList.add("unavailable");
    } else if (currentRow.cells[3].dataset.available === undefined) {
      currentRow.hidden = true;
    }

    if (currentRow.cells[2].textContent === "m") {
      currentRow.classList.add("male");
    } else if (currentRow.cells[2].textContent === "f") {
      currentRow.classList.add("female");
    }

    if (+currentRow.cells[1].textContent < 18) {
      currentRow.style.textDecoration = "line-through";
    }
  }
}
