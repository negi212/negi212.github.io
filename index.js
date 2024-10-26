function butotnClick(){
    document.getElementById('selected').innerText = '選択されているのは ' + numSelect.value + ' です';
  }
  
  let numSelect = document.getElementById('number');
  let text = document.getElementById('selected').innerText;
  numSelect.options[0].selected = true;
  
  let checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', butotnClick);