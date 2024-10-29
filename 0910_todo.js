function xbtnclick(e) {
    pnode = e.target.parentNode;
    list = document.getElementById('todolist');
    list.removeChild(pnode);
}

function addItem() {
    console.log('addItem 함수 호출됨');

    todo = document.getElementById('item');
    list = document.getElementById('todolist');
    
    listitem = document.createElement('li');
    listitem.innerText = todo.value;
    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';
    
    //삭제버튼 추가
    dbtn = document.createElement('button');
    dbtn.innerHTML = "&#33";
    
    //onclick 지원방법 - 화살표함수 적용
    dbtn.onclick = (e)=>{
        pnode = e.target.parentNode;
        pnode.style.textDecoration = "line-through";
    } 
    dbtn.className = 'close';

    listitem.appendChild(dbtn);

    list.appendChild(listitem);

    todo.value = "";
    todo.focus();
}