function buttonClick() {
  const selectedElements = document.querySelectorAll('#selectContainer select');
  let selectedText = '';
  selectedElements.forEach((select, index) => {
    selectedText += `リストボックス${index + 1}の選択は ${select.value} です。\n `;
  });
  document.getElementById('selected').innerText = selectedText;
}

function addSelectBox() {
  const newSelect = document.createElement('select');
  newSelect.innerHTML = `
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  `;
  newSelect.options[0].selected = true;
  document.getElementById('selectContainer').appendChild(newSelect);
}

document.getElementById('checkButton').addEventListener('click', buttonClick);
document.getElementById('addButton').addEventListener('click', addSelectBox);