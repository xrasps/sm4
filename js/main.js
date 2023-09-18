alert("Давайте сделаем покупку")
let oneNum = +prompt('стоимость товара?','')
let twoNum = +prompt('ваше количество денег?','')
let falta;
const result = document.querySelector('.content');
if(oneNum == twoNum){
    result.innerHTML = 'покупка совершена!'
}else if(oneNum > twoNum){
    falta = oneNum - twoNum;
    result.innerHTML = 'вам не хватает ' + falta +  'руб';
}else{
    falta = twoNum - oneNum;
    result.innerHTML = 'покупка совершена. Сдача ' + falta + ' руб';
}

// css edit
result.style.background = '#232323';
result.style.fontSize = '20px';
result.style.borderRadius = '5px';
result.style.color = '#ffffe7';
