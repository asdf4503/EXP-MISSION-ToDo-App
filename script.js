const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo() {
    //item의 데이터
    const item = {
        id: new Date().getTime(), 
        text: '', 
        complete: false
    };

    todos.unshift(item);

    //요소 생성
    const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);

    //앞으로 itemEl 추가 (새로 생성된 일정)
    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');

    inputEl.focus();
    saveToLocalStorage();
}

//요소 생성
function createTodoElement(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    if(item.complete) {
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled', '');

    const actionsEl = document.createElement('div');
    actionsEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText = 'remove_circles';

    //체크박스 활성화
    checkboxEl.addEventListener ('change', () => {
        item.complete = checkboxEl.checked;

        if(item.complete) {
            itemEl.classList.add('complete');
        } else {
            itemEl.classList.remove('complete');
        }
        saveToLocalStorage();
    })

    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '');
        saveToLocalStorage();
    })

    inputEl.addEventListener('input', () => {
        item.text = inputEl.value;
    })

    //할 일 편집
    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute ('disabled');
        inputEl.focus();
    })

    //할 일 제거
    removeBtnEl.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== item.id)
        itemEl.remove();
        saveToLocalStorage();
    })

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl}
}

//로컬 스토리지에 저장하는 함수
function saveToLocalStorage() {
    //todos의 배열을 string으로 변환
    const data = JSON.stringify(todos);

    localStorage.setItem('my_todos', data);
}

//로컬 스토리지의 데이터를 불러오는 함수
function loadFromLocalStorage() {
    const data = localStorage.getItem('my_todos');

    //데이터가 있으면 string으로 변환했던 데이터를 배열로 재변환
    if(data) {
        todos = JSON.parse(data);
    }
}

//새로고침 후 화면에 요소 불러오기
function displayTodos() {
    loadFromLocalStorage();

    for(let i = 0;i < todos.length;i++) {
        const item = todos[i];
        const { itemEl } = createTodoElement(item);

        list.append(itemEl);
    }
}

displayTodos();