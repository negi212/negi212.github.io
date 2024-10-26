const BUTTON_CLICK_EVENT= document.getElementById('submit');
const setNum = document.getElementById("setnumber");
const selectNum = document.getElementById("number");
BUTTON_CLICK_EVENT.addEventListener('click', () => {
    const num = selectNum.selectedIndex;
    // 選択した要素のテキストを取得する処理
    const getNum = selectNum.options[num].innerText;
    // 取得した要素をHTMLに埋め込む
    setNum.innerText = getNum;
});