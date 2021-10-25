// render list
const tableBody = document.querySelector(".table__body");

for (let i = 1; i <= 30; i++) {
  tableBody.innerHTML += `
      <tr class="table__row">
        <td class="table__cell table__cell--checkbox">
            <input type="checkbox" />
        </td>
        <td class="table__cell table__cell--id">ID${i}</td>
        <td class="table__cell table__cell--name">Name</td>
        <td class="table__cell table__cell--advertiser">
            <span class="cell__advertiser__line">Advertiser</span>
            <span class="cell__advertiser__line cell__advertiser__line--group">Group</span>
        </td>
        <td class="table__cell table__cell--description">Description</td>
        <td class="table__cell table__cell--price">Price</td>
        <td class="table__cell table__cell--starttime">Start Time</td>
        <td class="table__cell table__cell--endtime">End Time</td>
          <td class="table__cell table__cell--action">
            <img class="cell__action__icon" src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg" id="action__input" alt="menu">
            <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input" id="action__menu">
              <menu class="menu__body">
                <menuitem class="menu__item">
                <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg" class="menu__item__icon" />
                <span>Duplicate</span>
                </menuitem>
                <menuitem class="menu__item">
                <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg" class="menu__item__icon" />
                <span>Edit</span>
                </menuitem>
                <menuitem class="menu__item">
                <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg" class="menu__item__icon" />
                <span>Delete</span>
                </menuitem>
             </menu>
          </div>
        </td>
      </tr>
  `;
}
//toggle menu
const toggleActionMenu = event => {
  if (event.target.classList.contains('cell__action__icon')) {
    const actionMenu = event.target.nextElementSibling
    if (actionMenu.classList.contains('hidden')) {
      const allActionMenu = document.querySelectorAll('.action__menu')
      allActionMenu.forEach(menu => menu.classList.add('hidden'))
    }
    event.target.nextElementSibling.classList.toggle('hidden')
  }
}

tableBody.addEventListener('click', toggleActionMenu)

// dark mode
// target the switch element
const darkModeToggle = document.getElementById("dark__mode__toggle");

// toggle handler
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

// bind the event
darkModeToggle.addEventListener("change", darkModeToggleHandler);

// Checkbox effect
const mainTable = document.querySelector(".main__table");

mainTable.addEventListener("change", function changeColor(event) {
  const target = event.target;
  const parent = event.target.parentElement.parentElement;
  if (target.tagName === "INPUT") {
    parent.classList.toggle("table__row--checkbox");
  }

  if (parent.classList.contains("table__header")) {
    const tbodyAllCheck = document.querySelectorAll(".table__cell--checkbox");
    tbodyAllCheck.forEach((checkbox) => {
      const checkboxInput = checkbox.children[0];
      checkboxInput.checked = target.checked;
      checkboxInput.checked
        ? checkbox.parentElement.classList.add("table__row--checkbox")
        : checkbox.parentElement.classList.remove("table__row--checkbox");
    });
  }
});